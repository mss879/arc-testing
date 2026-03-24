'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import {
    Loader2, Trash2, ChevronDown, ChevronUp, Copy, ExternalLink,
    ClipboardList, Globe, Palette, Bot, Sparkles, User, Mail,
    Phone, Building2, Calendar, Clock, FileText, CheckCircle
} from 'lucide-react';

interface JobRequest {
    id: string;
    created_at: string;
    name: string;
    email: string;
    phone: string | null;
    company: string | null;
    service_frontend_only: boolean;
    service_frontend_backend: boolean;
    service_frontend_backend_ai: boolean;
    service_branding: boolean;
    service_ai_automation: boolean;
    requirements: string | null;
    planned_start: string | null;
    status: string;
}

const STATUS_OPTIONS = ['new', 'contacted', 'in_progress', 'completed', 'archived'] as const;

const STATUS_COLORS: Record<string, string> = {
    new: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    contacted: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    in_progress: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    completed: 'bg-green-500/10 text-green-400 border-green-500/20',
    archived: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
};

const SERVICE_LABELS: { key: keyof JobRequest; label: string; icon: React.ElementType }[] = [
    { key: 'service_frontend_only', label: 'Frontend Only', icon: Globe },
    { key: 'service_frontend_backend', label: 'Frontend + Backend', icon: Globe },
    { key: 'service_frontend_backend_ai', label: 'Frontend + Backend + AI', icon: Bot },
    { key: 'service_branding', label: 'Branding', icon: Palette },
    { key: 'service_ai_automation', label: 'AI Automation', icon: Sparkles },
];

export default function AdminJobRequestsPage() {
    const [requests, setRequests] = useState<JobRequest[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [filterStatus, setFilterStatus] = useState<string>('all');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('job_requests')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching job requests:', error);
        } else {
            setRequests(data || []);
        }
        setLoading(false);
    };

    const updateStatus = async (id: string, status: string) => {
        const { error } = await supabase
            .from('job_requests')
            .update({ status })
            .eq('id', id);

        if (error) {
            console.error('Error updating status:', error);
        } else {
            fetchRequests();
        }
    };

    const deleteRequest = async (id: string) => {
        if (!confirm('Are you sure you want to delete this job request?')) return;

        const { error } = await supabase
            .from('job_requests')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting request:', error);
        } else {
            if (expandedId === id) setExpandedId(null);
            fetchRequests();
        }
    };

    const copyPublicLink = () => {
        const url = `${window.location.origin}/job-request`;
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const getSelectedServices = (req: JobRequest) => {
        return SERVICE_LABELS.filter((s) => req[s.key] as boolean);
    };

    const filtered = filterStatus === 'all'
        ? requests
        : requests.filter((r) => r.status === filterStatus);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">Job Requests</h1>
                    <p className="text-gray-400 text-sm mt-1">
                        Manage incoming project requests from potential clients
                    </p>
                </div>
                <button
                    onClick={copyPublicLink}
                    className="flex items-center gap-2 px-4 py-2 bg-[#FF4925]/10 hover:bg-[#FF4925]/20 text-[#FF4925] rounded-lg text-sm transition-colors border border-[#FF4925]/20 font-medium whitespace-nowrap"
                >
                    {copied ? (
                        <>
                            <CheckCircle className="w-4 h-4" />
                            Link Copied!
                        </>
                    ) : (
                        <>
                            <Copy className="w-4 h-4" />
                            Copy Public Link
                        </>
                    )}
                </button>
            </div>

            {/* Filter Bar */}
            <div className="flex items-center gap-2 flex-wrap">
                {['all', ...STATUS_OPTIONS].map((status) => (
                    <button
                        key={status}
                        onClick={() => setFilterStatus(status)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all border ${
                            filterStatus === status
                                ? 'bg-[#FF4925]/10 text-[#FF4925] border-[#FF4925]/20'
                                : 'text-gray-400 hover:text-white border-white/5 hover:bg-white/5'
                        }`}
                    >
                        {status.replace('_', ' ')}{' '}
                        {status === 'all'
                            ? `(${requests.length})`
                            : `(${requests.filter((r) => r.status === status).length})`}
                    </button>
                ))}
            </div>

            {/* Request List */}
            {loading ? (
                <div className="flex justify-center py-16">
                    <Loader2 className="w-8 h-8 animate-spin text-[#FF4925]" />
                </div>
            ) : filtered.length === 0 ? (
                <div className="text-center py-16 border border-dashed border-white/10 rounded-xl">
                    <ClipboardList className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">No job requests found</h3>
                    <p className="text-gray-400 text-sm max-w-sm mx-auto">
                        {filterStatus !== 'all'
                            ? 'Try changing the filter.'
                            : 'Share the public link with potential clients to start receiving requests.'}
                    </p>
                </div>
            ) : (
                <div className="space-y-3">
                    {filtered.map((req) => {
                        const services = getSelectedServices(req);
                        return (
                            <div
                                key={req.id}
                                className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden transition-all hover:border-white/15"
                            >
                                {/* Header */}
                                <div
                                    className="p-5 cursor-pointer flex items-center justify-between gap-4"
                                    onClick={() =>
                                        setExpandedId(expandedId === req.id ? null : req.id)
                                    }
                                >
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                                            <h3 className="text-sm font-bold text-white">
                                                {req.name}
                                            </h3>
                                            <span
                                                className={`px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase border ${
                                                    STATUS_COLORS[req.status] || STATUS_COLORS.new
                                                }`}
                                            >
                                                {req.status.replace('_', ' ')}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3 text-xs text-gray-500 flex-wrap">
                                            <span>{req.email}</span>
                                            {req.company && <span>• {req.company}</span>}
                                            <span>
                                                •{' '}
                                                {new Date(req.created_at).toLocaleDateString()}
                                            </span>
                                        </div>
                                        {/* Service badges inline */}
                                        <div className="flex flex-wrap gap-1.5 mt-2">
                                            {services.map((s) => {
                                                const Icon = s.icon;
                                                return (
                                                    <span
                                                        key={s.key as string}
                                                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-gray-400 font-medium"
                                                    >
                                                        <Icon className="w-3 h-3" />
                                                        {s.label}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0">
                                        {expandedId === req.id ? (
                                            <ChevronUp className="w-4 h-4 text-gray-400" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4 text-gray-400" />
                                        )}
                                    </div>
                                </div>

                                {/* Expanded Details */}
                                {expandedId === req.id && (
                                    <div className="border-t border-white/5 px-5 pb-5 pt-4 space-y-4 animate-in slide-in-from-top-2 fade-in duration-200">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="flex items-center gap-2 text-sm">
                                                <User className="w-4 h-4 text-gray-500" />
                                                <span className="text-gray-400">Name:</span>
                                                <span className="text-white">{req.name}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Mail className="w-4 h-4 text-gray-500" />
                                                <span className="text-gray-400">Email:</span>
                                                <a
                                                    href={`mailto:${req.email}`}
                                                    className="text-[#FF4925] hover:underline"
                                                >
                                                    {req.email}
                                                </a>
                                            </div>
                                            {req.phone && (
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Phone className="w-4 h-4 text-gray-500" />
                                                    <span className="text-gray-400">Phone:</span>
                                                    <a
                                                        href={`tel:${req.phone}`}
                                                        className="text-white hover:text-[#FF4925]"
                                                    >
                                                        {req.phone}
                                                    </a>
                                                </div>
                                            )}
                                            {req.company && (
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Building2 className="w-4 h-4 text-gray-500" />
                                                    <span className="text-gray-400">Company:</span>
                                                    <span className="text-white">{req.company}</span>
                                                </div>
                                            )}
                                            {req.planned_start && (
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Calendar className="w-4 h-4 text-gray-500" />
                                                    <span className="text-gray-400">
                                                        Planned Start:
                                                    </span>
                                                    <span className="text-white">
                                                        {req.planned_start}
                                                    </span>
                                                </div>
                                            )}
                                            <div className="flex items-center gap-2 text-sm">
                                                <Clock className="w-4 h-4 text-gray-500" />
                                                <span className="text-gray-400">Submitted:</span>
                                                <span className="text-white">
                                                    {new Date(req.created_at).toLocaleString()}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Services */}
                                        <div>
                                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                                Requested Services
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {services.map((s) => {
                                                    const Icon = s.icon;
                                                    return (
                                                        <span
                                                            key={s.key as string}
                                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FF4925]/10 border border-[#FF4925]/20 text-xs text-[#FF4925] font-medium"
                                                        >
                                                            <Icon className="w-3.5 h-3.5" />
                                                            {s.label}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Requirements */}
                                        {req.requirements && (
                                            <div>
                                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                                    Requirements
                                                </h4>
                                                <p className="text-sm text-gray-300 bg-black/30 rounded-lg p-3 leading-relaxed whitespace-pre-line">
                                                    {req.requirements}
                                                </p>
                                            </div>
                                        )}

                                        {/* Status Actions */}
                                        <div className="flex items-center gap-2 pt-2 border-t border-white/5 flex-wrap">
                                            <span className="text-xs text-gray-500 mr-2">
                                                Update Status:
                                            </span>
                                            {STATUS_OPTIONS.map((status) => (
                                                <button
                                                    key={status}
                                                    onClick={() =>
                                                        updateStatus(req.id, status)
                                                    }
                                                    className={`px-3 py-1 rounded-lg text-xs font-medium capitalize transition-all border ${
                                                        req.status === status
                                                            ? STATUS_COLORS[status]
                                                            : 'text-gray-500 border-white/5 hover:bg-white/5 hover:text-white'
                                                    }`}
                                                >
                                                    {status.replace('_', ' ')}
                                                </button>
                                            ))}
                                            <div className="flex-1" />
                                            <button
                                                onClick={() => deleteRequest(req.id)}
                                                className="px-3 py-1 rounded-lg text-xs font-medium text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 transition-all"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
