'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import {
    Plus,
    Trash2,
    X,
    Eye,
    GripVertical,
    Building2,
    Mail as MailIcon,
    Phone,
    MessageSquare,
    Clock,
    Tag,
} from 'lucide-react';

interface Pipeline {
    id: string;
    name: string;
    sort_order: number;
}

interface Stage {
    id: string;
    pipeline_id: string;
    name: string;
    sort_order: number;
}

interface Lead {
    id: string;
    full_name: string | null;
    email: string;
    phone: string | null;
    company: string | null;
    subject: string | null;
    message: string | null;
    notes: string | null;
    source: string | null;
    pipeline_id: string;
    stage_id: string;
    sort_order: number;
    created_at: string;
}

export default function KanbanBoard() {
    const [pipelines, setPipelines] = useState<Pipeline[]>([]);
    const [activePipeline, setActivePipeline] = useState<string | null>(null);
    const [stages, setStages] = useState<Stage[]>([]);
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);

    // New pipeline/stage forms
    const [showNewPipeline, setShowNewPipeline] = useState(false);
    const [newPipelineName, setNewPipelineName] = useState('');
    const [showNewStage, setShowNewStage] = useState(false);
    const [newStageName, setNewStageName] = useState('');

    // Inline add lead
    const [addingLeadStage, setAddingLeadStage] = useState<string | null>(null);
    const [newLead, setNewLead] = useState({ name: '', email: '', company: '' });

    // Lead detail modal
    const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

    // Drag state
    const [draggedLead, setDraggedLead] = useState<string | null>(null);

    useEffect(() => {
        fetchPipelines();
    }, []);

    useEffect(() => {
        if (activePipeline) {
            fetchStagesAndLeads(activePipeline);
        }
    }, [activePipeline]);

    const fetchPipelines = async () => {
        const { data } = await supabase
            .from('pipelines')
            .select('*')
            .order('sort_order');
        if (data && data.length > 0) {
            setPipelines(data);
            if (!activePipeline) setActivePipeline(data[0].id);
        }
        setLoading(false);
    };

    const fetchStagesAndLeads = async (pipelineId: string) => {
        const [stagesRes, leadsRes] = await Promise.all([
            supabase.from('stages').select('*').eq('pipeline_id', pipelineId).order('sort_order'),
            supabase.from('leads').select('*').eq('pipeline_id', pipelineId).order('sort_order'),
        ]);
        setStages(stagesRes.data || []);
        setLeads(leadsRes.data || []);
    };

    // Pipeline CRUD
    const createPipeline = async () => {
        if (!newPipelineName.trim()) return;
        await supabase.from('pipelines').insert({
            name: newPipelineName.trim(),
            sort_order: pipelines.length,
        });
        setNewPipelineName('');
        setShowNewPipeline(false);
        fetchPipelines();
    };

    const deletePipeline = async (id: string) => {
        if (pipelines.length <= 1) return;
        await supabase.from('pipelines').delete().eq('id', id);
        if (activePipeline === id) setActivePipeline(null);
        fetchPipelines();
    };

    // Stage CRUD
    const createStage = async () => {
        if (!newStageName.trim() || !activePipeline) return;
        await supabase.from('stages').insert({
            pipeline_id: activePipeline,
            name: newStageName.trim(),
            sort_order: stages.length,
        });
        setNewStageName('');
        setShowNewStage(false);
        fetchStagesAndLeads(activePipeline);
    };

    const deleteStage = async (id: string) => {
        const stageLeads = leads.filter((l) => l.stage_id === id);
        if (stageLeads.length > 0) {
            alert('Move or delete leads in this stage first.');
            return;
        }
        await supabase.from('stages').delete().eq('id', id);
        if (activePipeline) fetchStagesAndLeads(activePipeline);
    };

    // Lead CRUD
    const createLead = async (stageId: string) => {
        if (!newLead.name.trim() || !newLead.email.trim() || !activePipeline) return;
        await supabase.from('leads').insert({
            full_name: newLead.name.trim(),
            email: newLead.email.trim(),
            company: newLead.company.trim() || null,
            pipeline_id: activePipeline,
            stage_id: stageId,
            source: 'manual',
            sort_order: leads.filter((l) => l.stage_id === stageId).length,
        });
        setNewLead({ name: '', email: '', company: '' });
        setAddingLeadStage(null);
        fetchStagesAndLeads(activePipeline);
    };

    const deleteLead = async (id: string) => {
        // Optimistic UI
        setLeads((prev) => prev.filter((l) => l.id !== id));
        setSelectedLead(null);
        await supabase.from('leads').delete().eq('id', id);
    };

    // Drag and Drop
    const handleDragStart = (leadId: string) => {
        setDraggedLead(leadId);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = async (stageId: string) => {
        if (!draggedLead || !activePipeline) return;

        // Optimistic UI
        setLeads((prev) =>
            prev.map((l) =>
                l.id === draggedLead ? { ...l, stage_id: stageId } : l
            )
        );

        await supabase.rpc('move_lead', {
            p_lead_id: draggedLead,
            p_new_stage_id: stageId,
            p_new_sort_order: 0,
        });

        setDraggedLead(null);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="w-8 h-8 border-2 border-[#FF4925] border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Pipeline Tabs */}
            <div className="flex items-center gap-2 flex-wrap">
                {pipelines.map((p) => (
                    <div key={p.id} className="flex items-center">
                        <button
                            onClick={() => setActivePipeline(p.id)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                                activePipeline === p.id
                                    ? 'bg-[#FF4925] text-white'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                            }`}
                        >
                            {p.name}
                        </button>
                        {pipelines.length > 1 && (
                            <button
                                onClick={() => deletePipeline(p.id)}
                                className="ml-1 p-1 text-gray-500 hover:text-red-400 transition-colors"
                                title="Delete pipeline"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        )}
                    </div>
                ))}

                {showNewPipeline ? (
                    <div className="flex items-center gap-2">
                        <input
                            value={newPipelineName}
                            onChange={(e) => setNewPipelineName(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && createPipeline()}
                            placeholder="Pipeline name"
                            className="bg-black border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#FF4925]/50"
                            autoFocus
                        />
                        <button onClick={createPipeline} className="p-1.5 bg-[#FF4925] rounded-lg text-white">
                            <Plus className="w-4 h-4" />
                        </button>
                        <button onClick={() => setShowNewPipeline(false)} className="p-1.5 text-gray-400">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => setShowNewPipeline(true)}
                        className="flex items-center gap-1 px-3 py-2 text-gray-400 hover:text-white text-sm transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                        New Pipeline
                    </button>
                )}
            </div>

            {/* Kanban Board */}
            <div className="flex gap-4 overflow-x-auto pb-4" style={{ minHeight: '60vh' }}>
                {stages.map((stage) => {
                    const stageLeads = leads.filter((l) => l.stage_id === stage.id);

                    return (
                        <div
                            key={stage.id}
                            className="flex-shrink-0 w-[320px] bg-zinc-900 border border-white/10 rounded-2xl flex flex-col"
                            onDragOver={handleDragOver}
                            onDrop={() => handleDrop(stage.id)}
                        >
                            {/* Stage Header */}
                            <div className="p-4 border-b border-white/10 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <h3 className="font-semibold text-sm">{stage.name}</h3>
                                    <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">
                                        {stageLeads.length}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={() => setAddingLeadStage(stage.id)}
                                        className="p-1 text-gray-400 hover:text-[#FF4925] transition-colors"
                                        title="Add lead"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => deleteStage(stage.id)}
                                        className="p-1 text-gray-500 hover:text-red-400 transition-colors"
                                        title="Delete stage"
                                    >
                                        <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>

                            {/* Stage Content */}
                            <div className="flex-1 p-3 space-y-3 overflow-y-auto max-h-[calc(60vh-60px)]">
                                {/* Inline Add Lead Form */}
                                {addingLeadStage === stage.id && (
                                    <div className="bg-black rounded-xl p-3 border border-[#FF4925]/20 space-y-2">
                                        <input
                                            value={newLead.name}
                                            onChange={(e) => setNewLead({ ...newLead, name: e.target.value })}
                                            placeholder="Name *"
                                            className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-600 focus:outline-none"
                                            autoFocus
                                        />
                                        <input
                                            value={newLead.email}
                                            onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
                                            placeholder="Email *"
                                            className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-600 focus:outline-none"
                                        />
                                        <input
                                            value={newLead.company}
                                            onChange={(e) => setNewLead({ ...newLead, company: e.target.value })}
                                            placeholder="Company"
                                            className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-600 focus:outline-none"
                                        />
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => createLead(stage.id)}
                                                className="flex-1 py-2 bg-[#FF4925] hover:bg-[#E03816] rounded-lg text-sm font-medium transition-colors"
                                            >
                                                Add Lead
                                            </button>
                                            <button
                                                onClick={() => setAddingLeadStage(null)}
                                                className="px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm transition-colors"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Lead Cards */}
                                {stageLeads.map((lead) => (
                                    <div
                                        key={lead.id}
                                        draggable
                                        onDragStart={() => handleDragStart(lead.id)}
                                        className={`bg-black rounded-xl p-4 border border-white/10 cursor-grab active:cursor-grabbing hover:border-white/20 transition-all ${
                                            draggedLead === lead.id ? 'opacity-50' : ''
                                        }`}
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <GripVertical className="w-3.5 h-3.5 text-gray-600" />
                                                <span className="text-sm font-medium text-white">
                                                    {lead.full_name || 'Unnamed'}
                                                </span>
                                            </div>
                                            <button
                                                onClick={() => setSelectedLead(lead)}
                                                className="p-1 text-gray-500 hover:text-white transition-colors"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                        </div>

                                        {lead.company && (
                                            <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                                                <Building2 className="w-3 h-3" />
                                                {lead.company}
                                            </div>
                                        )}
                                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                                            <MailIcon className="w-3 h-3" />
                                            {lead.email}
                                        </div>
                                        {lead.phone && (
                                            <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                                                <Phone className="w-3 h-3" />
                                                {lead.phone}
                                            </div>
                                        )}
                                        {lead.message && (
                                            <div className="flex items-start gap-1.5 text-xs text-gray-500 mt-2">
                                                <MessageSquare className="w-3 h-3 mt-0.5" />
                                                <span className="line-clamp-2">{lead.message}</span>
                                            </div>
                                        )}
                                        {lead.source && (
                                            <div className="flex items-center gap-1.5 mt-2">
                                                <Tag className="w-3 h-3 text-gray-600" />
                                                <span className="text-[10px] bg-white/5 text-gray-400 px-2 py-0.5 rounded-full">
                                                    {lead.source}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {stageLeads.length === 0 && addingLeadStage !== stage.id && (
                                    <div className="text-center py-8 text-gray-600 text-xs">
                                        Drop leads here
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}

                {/* Add Stage Button */}
                <div className="flex-shrink-0 w-[320px]">
                    {showNewStage ? (
                        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-4 space-y-3">
                            <input
                                value={newStageName}
                                onChange={(e) => setNewStageName(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && createStage()}
                                placeholder="Stage name"
                                className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#FF4925]/50"
                                autoFocus
                            />
                            <div className="flex gap-2">
                                <button
                                    onClick={createStage}
                                    className="flex-1 py-2 bg-[#FF4925] hover:bg-[#E03816] rounded-lg text-sm font-medium transition-colors"
                                >
                                    Add Stage
                                </button>
                                <button
                                    onClick={() => setShowNewStage(false)}
                                    className="px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={() => setShowNewStage(true)}
                            className="w-full h-24 border-2 border-dashed border-white/10 rounded-2xl flex items-center justify-center gap-2 text-gray-500 hover:text-white hover:border-white/20 transition-all"
                        >
                            <Plus className="w-5 h-5" />
                            <span className="text-sm">Add Stage</span>
                        </button>
                    )}
                </div>
            </div>

            {/* Lead Detail Modal */}
            {selectedLead && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                    <div className="bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto">
                        <div className="p-6 border-b border-white/10 flex items-center justify-between">
                            <h2 className="text-lg font-bold">Lead Details</h2>
                            <button
                                onClick={() => setSelectedLead(null)}
                                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6 space-y-4">
                            <DetailRow label="Name" value={selectedLead.full_name} />
                            <DetailRow label="Email" value={selectedLead.email} />
                            <DetailRow label="Phone" value={selectedLead.phone} />
                            <DetailRow label="Company" value={selectedLead.company} />
                            <DetailRow label="Subject" value={selectedLead.subject} />
                            <DetailRow label="Source" value={selectedLead.source} />
                            <DetailRow
                                label="Date"
                                value={new Date(selectedLead.created_at).toLocaleString()}
                            />

                            {selectedLead.message && (
                                <div>
                                    <p className="text-xs text-gray-400 mb-1">Message</p>
                                    <p className="text-sm text-gray-200 bg-black p-3 rounded-xl border border-white/5 whitespace-pre-wrap">
                                        {selectedLead.message}
                                    </p>
                                </div>
                            )}

                            {selectedLead.notes && (
                                <div>
                                    <p className="text-xs text-gray-400 mb-1">AI Notes</p>
                                    <p className="text-sm text-gray-200 bg-black p-3 rounded-xl border border-white/5 whitespace-pre-wrap">
                                        {selectedLead.notes}
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="p-6 border-t border-white/10">
                            <button
                                onClick={() => deleteLead(selectedLead.id)}
                                className="w-full py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl text-sm font-medium transition-colors border border-red-500/20"
                            >
                                Delete Lead
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function DetailRow({ label, value }: { label: string; value: string | null | undefined }) {
    return (
        <div className="flex items-start gap-4">
            <p className="text-xs text-gray-400 w-20 shrink-0 pt-0.5">{label}</p>
            <p className="text-sm text-gray-200">{value || '—'}</p>
        </div>
    );
}
