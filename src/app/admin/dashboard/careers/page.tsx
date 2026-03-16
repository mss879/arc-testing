'use client';

import { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import {
    Plus, Trash2, X, Save, Loader2, Eye, EyeOff, Download,
    Briefcase, FileText, Clock, CheckCircle, XCircle, Search,
    ChevronDown, ChevronUp, Mail, Phone, User, Calendar
} from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────────

interface Vacancy {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    requirements: string;
    is_active: boolean;
    created_at: string;
}

interface Application {
    id: string;
    vacancy_id: string;
    name: string;
    email: string;
    phone: string;
    personal_statement: string;
    earliest_start_date: string | null;
    currently_employed: boolean;
    cv_url: string;
    status: string;
    created_at: string;
    career_vacancies?: { title: string };
}

// ── Main Page ──────────────────────────────────────────────────────────────

export default function AdminCareersPage() {
    const [activeTab, setActiveTab] = useState<'vacancies' | 'applications'>('vacancies');

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-white">Careers Management</h1>
                <p className="text-gray-400 text-sm mt-1">Manage job listings and review applications</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 bg-zinc-900 border border-white/10 rounded-xl p-1 w-fit">
                <button
                    onClick={() => setActiveTab('vacancies')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === 'vacancies'
                            ? 'bg-[#FF4925] text-white shadow-lg'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                    <Briefcase className="w-4 h-4" />
                    Vacancies
                </button>
                <button
                    onClick={() => setActiveTab('applications')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === 'applications'
                            ? 'bg-[#FF4925] text-white shadow-lg'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                    <FileText className="w-4 h-4" />
                    Applications
                </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'vacancies' ? <VacanciesTab /> : <ApplicationsTab />}
        </div>
    );
}

// ── Vacancies Tab ──────────────────────────────────────────────────────────

function VacanciesTab() {
    const [vacancies, setVacancies] = useState<Vacancy[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [saving, setSaving] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        department: '',
        location: '',
        type: 'Full-time',
        description: '',
        requirements: '',
    });

    useEffect(() => {
        fetchVacancies();
    }, []);

    const fetchVacancies = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('career_vacancies')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching vacancies:', error);
        } else {
            setVacancies(data || []);
        }
        setLoading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.title) {
            alert('Title is required');
            return;
        }

        setSaving(true);
        const { error } = await supabase
            .from('career_vacancies')
            .insert([{ ...formData, is_active: true }]);

        if (error) {
            console.error('Error creating vacancy:', error);
            alert('Error creating vacancy');
        } else {
            setFormData({ title: '', department: '', location: '', type: 'Full-time', description: '', requirements: '' });
            setShowForm(false);
            fetchVacancies();
        }
        setSaving(false);
    };

    const toggleActive = async (id: string, currentState: boolean) => {
        const { error } = await supabase
            .from('career_vacancies')
            .update({ is_active: !currentState })
            .eq('id', id);

        if (error) {
            console.error('Error updating vacancy:', error);
        } else {
            fetchVacancies();
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure? This will also delete all applications for this vacancy.')) return;

        const { error } = await supabase
            .from('career_vacancies')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting vacancy:', error);
            alert('Error deleting vacancy');
        } else {
            fetchVacancies();
        }
    };

    return (
        <div className="space-y-6">
            {/* Action Bar */}
            <div className="flex justify-end">
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="flex items-center gap-2 px-4 py-2 bg-[#FF4925] hover:bg-[#ff5d3d] rounded-lg transition-colors font-medium text-white text-sm"
                >
                    {showForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    {showForm ? 'Cancel' : 'Post New Vacancy'}
                </button>
            </div>

            {/* Create Form */}
            {showForm && (
                <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 animate-in slide-in-from-top-4 fade-in duration-200">
                    <h2 className="text-lg font-semibold text-white mb-5">Post New Vacancy</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Job Title *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#FF4925] transition-colors"
                                    placeholder="e.g. Full-Stack Developer"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Department</label>
                                <input
                                    type="text"
                                    value={formData.department}
                                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#FF4925] transition-colors"
                                    placeholder="e.g. Engineering"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Location</label>
                                <input
                                    type="text"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#FF4925] transition-colors"
                                    placeholder="e.g. Remote / UK"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Type</label>
                                <select
                                    value={formData.type}
                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#FF4925] transition-colors"
                                >
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Internship">Internship</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Job Description</label>
                            <textarea
                                rows={4}
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#FF4925] transition-colors resize-none"
                                placeholder="Describe the role, responsibilities, etc."
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Requirements</label>
                            <textarea
                                rows={3}
                                value={formData.requirements}
                                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#FF4925] transition-colors resize-none"
                                placeholder="Skills, experience, qualifications..."
                            />
                        </div>
                        <div className="flex justify-end gap-3 pt-2 border-t border-white/10">
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={saving}
                                className="flex items-center gap-2 px-6 py-2 bg-[#FF4925] hover:bg-[#ff5d3d] disabled:opacity-50 rounded-lg transition-colors font-medium text-white text-sm"
                            >
                                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                                Publish Vacancy
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Vacancies List */}
            {loading ? (
                <div className="flex justify-center py-16">
                    <Loader2 className="w-8 h-8 animate-spin text-[#FF4925]" />
                </div>
            ) : vacancies.length === 0 ? (
                <div className="text-center py-16 border border-dashed border-white/10 rounded-xl">
                    <Briefcase className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">No vacancies posted</h3>
                    <p className="text-gray-400 text-sm">Click &quot;Post New Vacancy&quot; to create your first job listing.</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {vacancies.map((v) => (
                        <div
                            key={v.id}
                            className={`bg-zinc-900 border rounded-xl p-5 flex items-center justify-between gap-4 transition-all ${
                                v.is_active ? 'border-white/10' : 'border-white/5 opacity-60'
                            }`}
                        >
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-sm font-bold text-white truncate">{v.title}</h3>
                                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase ${
                                        v.is_active
                                            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                                            : 'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                                    }`}>
                                        {v.is_active ? 'Active' : 'Inactive'}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-gray-500">
                                    {v.department && <span>{v.department}</span>}
                                    {v.location && <span>• {v.location}</span>}
                                    <span>• {v.type}</span>
                                    <span>• {new Date(v.created_at).toLocaleDateString()}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                                <button
                                    onClick={() => toggleActive(v.id, v.is_active)}
                                    className={`p-2 rounded-lg transition-colors ${
                                        v.is_active
                                            ? 'hover:bg-yellow-500/10 text-yellow-500'
                                            : 'hover:bg-green-500/10 text-green-500'
                                    }`}
                                    title={v.is_active ? 'Deactivate' : 'Activate'}
                                >
                                    {v.is_active ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                                <button
                                    onClick={() => handleDelete(v.id)}
                                    className="p-2 hover:bg-red-500/10 hover:text-red-400 text-gray-500 rounded-lg transition-colors"
                                    title="Delete"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

// ── Applications Tab ──────────────────────────────────────────────────────

function ApplicationsTab() {
    const [applications, setApplications] = useState<Application[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [filterStatus, setFilterStatus] = useState<string>('all');

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('career_applications')
            .select('*, career_vacancies(title)')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching applications:', error);
        } else {
            setApplications(data || []);
        }
        setLoading(false);
    };

    const updateStatus = async (id: string, status: string) => {
        const { error } = await supabase
            .from('career_applications')
            .update({ status })
            .eq('id', id);

        if (error) {
            console.error('Error updating status:', error);
        } else {
            fetchApplications();
        }
    };

    const deleteApplication = async (id: string) => {
        if (!confirm('Are you sure you want to delete this application?')) return;

        const { error } = await supabase
            .from('career_applications')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting application:', error);
        } else {
            fetchApplications();
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
            case 'reviewed': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
            case 'shortlisted': return 'bg-green-500/10 text-green-400 border-green-500/20';
            case 'rejected': return 'bg-red-500/10 text-red-400 border-red-500/20';
            default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
        }
    };

    const filtered = filterStatus === 'all'
        ? applications
        : applications.filter(a => a.status === filterStatus);

    return (
        <div className="space-y-6">
            {/* Filter Bar */}
            <div className="flex items-center gap-2 flex-wrap">
                {['all', 'pending', 'reviewed', 'shortlisted', 'rejected'].map((status) => (
                    <button
                        key={status}
                        onClick={() => setFilterStatus(status)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all border ${
                            filterStatus === status
                                ? 'bg-[#FF4925]/10 text-[#FF4925] border-[#FF4925]/20'
                                : 'text-gray-400 hover:text-white border-white/5 hover:bg-white/5'
                        }`}
                    >
                        {status} {status !== 'all' && `(${applications.filter(a => a.status === status).length})`}
                        {status === 'all' && ` (${applications.length})`}
                    </button>
                ))}
            </div>

            {/* Applications List */}
            {loading ? (
                <div className="flex justify-center py-16">
                    <Loader2 className="w-8 h-8 animate-spin text-[#FF4925]" />
                </div>
            ) : filtered.length === 0 ? (
                <div className="text-center py-16 border border-dashed border-white/10 rounded-xl">
                    <FileText className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">No applications found</h3>
                    <p className="text-gray-400 text-sm">
                        {filterStatus !== 'all' ? 'Try changing the filter.' : 'Applications will appear here once candidates apply.'}
                    </p>
                </div>
            ) : (
                <div className="space-y-3">
                    {filtered.map((app) => (
                        <div
                            key={app.id}
                            className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden transition-all hover:border-white/15"
                        >
                            {/* Application Header */}
                            <div
                                className="p-5 cursor-pointer flex items-center justify-between gap-4"
                                onClick={() => setExpandedId(expandedId === app.id ? null : app.id)}
                            >
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                                        <h3 className="text-sm font-bold text-white">{app.name}</h3>
                                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase border ${getStatusColor(app.status)}`}>
                                            {app.status}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-gray-500 flex-wrap">
                                        <span>{app.career_vacancies?.title || 'Unknown Position'}</span>
                                        <span>• {app.email}</span>
                                        <span>• {new Date(app.created_at).toLocaleDateString()}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    {app.cv_url && (
                                        <a
                                            href={app.cv_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="p-2 hover:bg-blue-500/10 text-blue-400 rounded-lg transition-colors"
                                            title="Download CV"
                                        >
                                            <Download className="w-4 h-4" />
                                        </a>
                                    )}
                                    {expandedId === app.id ? (
                                        <ChevronUp className="w-4 h-4 text-gray-400" />
                                    ) : (
                                        <ChevronDown className="w-4 h-4 text-gray-400" />
                                    )}
                                </div>
                            </div>

                            {/* Expanded Details */}
                            {expandedId === app.id && (
                                <div className="border-t border-white/5 px-5 pb-5 pt-4 space-y-4 animate-in slide-in-from-top-2 fade-in duration-200">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-2 text-sm">
                                            <User className="w-4 h-4 text-gray-500" />
                                            <span className="text-gray-400">Name:</span>
                                            <span className="text-white">{app.name}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Mail className="w-4 h-4 text-gray-500" />
                                            <span className="text-gray-400">Email:</span>
                                            <a href={`mailto:${app.email}`} className="text-[#FF4925] hover:underline">{app.email}</a>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Phone className="w-4 h-4 text-gray-500" />
                                            <span className="text-gray-400">Phone:</span>
                                            <a href={`tel:${app.phone}`} className="text-white hover:text-[#FF4925]">{app.phone}</a>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Calendar className="w-4 h-4 text-gray-500" />
                                            <span className="text-gray-400">Earliest Start:</span>
                                            <span className="text-white">
                                                {app.earliest_start_date
                                                    ? new Date(app.earliest_start_date).toLocaleDateString()
                                                    : 'Not specified'}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Briefcase className="w-4 h-4 text-gray-500" />
                                            <span className="text-gray-400">Currently Employed:</span>
                                            <span className={`font-medium ${app.currently_employed ? 'text-amber-400' : 'text-green-400'}`}>
                                                {app.currently_employed ? 'Yes' : 'No'}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Clock className="w-4 h-4 text-gray-500" />
                                            <span className="text-gray-400">Applied:</span>
                                            <span className="text-white">{new Date(app.created_at).toLocaleString()}</span>
                                        </div>
                                    </div>

                                    {app.personal_statement && (
                                        <div>
                                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Personal Statement</h4>
                                            <p className="text-sm text-gray-300 bg-black/30 rounded-lg p-3 leading-relaxed whitespace-pre-line">
                                                {app.personal_statement}
                                            </p>
                                        </div>
                                    )}

                                    {/* Actions */}
                                    <div className="flex items-center gap-2 pt-2 border-t border-white/5 flex-wrap">
                                        <span className="text-xs text-gray-500 mr-2">Update Status:</span>
                                        {['pending', 'reviewed', 'shortlisted', 'rejected'].map((status) => (
                                            <button
                                                key={status}
                                                onClick={() => updateStatus(app.id, status)}
                                                className={`px-3 py-1 rounded-lg text-xs font-medium capitalize transition-all border ${
                                                    app.status === status
                                                        ? getStatusColor(status)
                                                        : 'text-gray-500 border-white/5 hover:bg-white/5 hover:text-white'
                                                }`}
                                            >
                                                {status}
                                            </button>
                                        ))}
                                        <div className="flex-1" />
                                        <button
                                            onClick={() => deleteApplication(app.id)}
                                            className="px-3 py-1 rounded-lg text-xs font-medium text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 transition-all"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
