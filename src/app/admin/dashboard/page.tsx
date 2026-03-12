'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import {
    Users,
    KanbanSquare,
    Eye,
    Mail,
    Plus,
    Trash2,
    RefreshCw,
} from 'lucide-react';

interface StatCard {
    label: string;
    value: number;
    icon: React.ElementType;
    color: string;
}

interface PageVisitStat {
    path: string;
    label: string;
    count: number;
}

interface AdminNote {
    id: string;
    content: string;
    created_at: string;
}

interface DailyVisit {
    date: string;
    count: number;
}

export default function DashboardOverview() {
    const [stats, setStats] = useState<StatCard[]>([
        { label: 'Total Active Leads', value: 0, icon: Users, color: '#FF4925' },
        { label: 'Pipelines Configured', value: 0, icon: KanbanSquare, color: '#3B82F6' },
        { label: 'Unique Visitors', value: 0, icon: Eye, color: '#10B981' },
        { label: 'Email Subscribers', value: 0, icon: Mail, color: '#8B5CF6' },
    ]);
    const [pageVisits, setPageVisits] = useState<PageVisitStat[]>([]);
    const [dailyVisits, setDailyVisits] = useState<DailyVisit[]>([]);
    const [notes, setNotes] = useState<AdminNote[]>([]);
    const [newNote, setNewNote] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAll();
    }, []);

    const fetchAll = async () => {
        setLoading(true);
        await Promise.all([fetchStats(), fetchPageVisits(), fetchDailyVisits(), fetchNotes()]);
        setLoading(false);
    };

    const fetchStats = async () => {
        const [leadsRes, pipelinesRes, visitorsRes, subsRes] = await Promise.all([
            supabase.from('leads').select('id', { count: 'exact', head: true }),
            supabase.from('pipelines').select('id', { count: 'exact', head: true }),
            supabase.from('page_visits').select('visitor_id'),
            supabase.from('email_subscriptions').select('id', { count: 'exact', head: true }),
        ]);

        const uniqueVisitors = new Set(visitorsRes.data?.map((v: { visitor_id: string }) => v.visitor_id)).size;

        setStats([
            { label: 'Total Active Leads', value: leadsRes.count || 0, icon: Users, color: '#FF4925' },
            { label: 'Pipelines Configured', value: pipelinesRes.count || 0, icon: KanbanSquare, color: '#3B82F6' },
            { label: 'Unique Visitors', value: uniqueVisitors, icon: Eye, color: '#10B981' },
            { label: 'Email Subscribers', value: subsRes.count || 0, icon: Mail, color: '#8B5CF6' },
        ]);
    };

    const fetchPageVisits = async () => {
        const pages = [
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/services', label: 'Services' },
            { path: '/portfolio', label: 'Portfolio' },
            { path: '/contact', label: 'Contact' },
            { path: '/blog', label: 'Blog' },
        ];

        const { data } = await supabase.from('page_visits').select('page_path');

        const pathCounts: Record<string, number> = {};
        data?.forEach((v: { page_path: string }) => {
            pathCounts[v.page_path] = (pathCounts[v.page_path] || 0) + 1;
        });

        setPageVisits(
            pages.map((p) => ({
                ...p,
                count: pathCounts[p.path] || 0,
            }))
        );
    };

    const fetchDailyVisits = async () => {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const { data } = await supabase
            .from('page_visits')
            .select('created_at')
            .gte('created_at', thirtyDaysAgo.toISOString());

        const dailyCounts: Record<string, number> = {};
        data?.forEach((v: { created_at: string }) => {
            const day = v.created_at.substring(0, 10);
            dailyCounts[day] = (dailyCounts[day] || 0) + 1;
        });

        // Fill in 30 days
        const days: DailyVisit[] = [];
        for (let i = 29; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const key = d.toISOString().substring(0, 10);
            days.push({ date: key, count: dailyCounts[key] || 0 });
        }
        setDailyVisits(days);
    };

    const fetchNotes = async () => {
        const { data } = await supabase
            .from('admin_notes')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(20);
        setNotes(data || []);
    };

    const addNote = async () => {
        if (!newNote.trim()) return;
        await supabase.from('admin_notes').insert({ content: newNote.trim() });
        setNewNote('');
        fetchNotes();
    };

    const deleteNote = async (id: string) => {
        await supabase.from('admin_notes').delete().eq('id', id);
        fetchNotes();
    };

    const maxDailyCount = Math.max(...dailyVisits.map((d) => d.count), 1);
    const maxPageCount = Math.max(...pageVisits.map((p) => p.count), 1);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <p className="text-gray-400 text-sm mt-1">Overview of your website analytics and CRM</p>
                </div>
                <button
                    onClick={fetchAll}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm transition-colors border border-white/10"
                >
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                    Refresh
                </button>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="bg-zinc-900 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center"
                                style={{ backgroundColor: `${stat.color}20` }}
                            >
                                <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                            </div>
                        </div>
                        <p className="text-3xl font-bold">{stat.value.toLocaleString()}</p>
                        <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Page Views */}
                <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
                    <h2 className="text-lg font-semibold mb-6">Page Views</h2>
                    <div className="space-y-4">
                        {pageVisits.map((page) => (
                            <div key={page.path} className="space-y-1.5">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-300">{page.label}</span>
                                    <span className="text-gray-400 font-mono">{page.count}</span>
                                </div>
                                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-500"
                                        style={{
                                            width: `${(page.count / maxPageCount) * 100}%`,
                                            background: 'linear-gradient(90deg, #FF4925, #FF7A5C)',
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Engagement Overview (30-day) */}
                <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
                    <h2 className="text-lg font-semibold mb-6">Engagement Overview (30 Days)</h2>
                    <div className="flex items-end gap-[2px] h-40">
                        {dailyVisits.map((day) => (
                            <div
                                key={day.date}
                                className="flex-1 group relative"
                            >
                                <div
                                    className="w-full rounded-t transition-all duration-300 hover:opacity-80 cursor-pointer"
                                    style={{
                                        height: `${Math.max((day.count / maxDailyCount) * 100, 2)}%`,
                                        background: day.count > 0
                                            ? 'linear-gradient(180deg, #FF4925, #FF7A5C)'
                                            : 'rgba(255,255,255,0.05)',
                                    }}
                                />
                                {/* Tooltip */}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                                    <div className="bg-zinc-800 border border-white/10 rounded-lg px-3 py-2 text-xs whitespace-nowrap shadow-xl">
                                        <p className="text-gray-400">{day.date}</p>
                                        <p className="text-white font-semibold">{day.count} visits</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Notes */}
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
                <h2 className="text-lg font-semibold mb-4">Quick Notes</h2>

                {/* Add Note */}
                <div className="flex gap-3 mb-6">
                    <input
                        type="text"
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && addNote()}
                        placeholder="Add a quick note..."
                        className="flex-1 bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#FF4925]/50 transition-colors"
                    />
                    <button
                        onClick={addNote}
                        className="px-4 py-3 bg-[#FF4925] hover:bg-[#E03816] rounded-xl text-sm font-medium transition-colors flex items-center gap-2"
                    >
                        <Plus className="w-4 h-4" />
                        Add
                    </button>
                </div>

                {/* Notes List */}
                <div className="space-y-3">
                    {notes.length === 0 ? (
                        <p className="text-gray-500 text-sm text-center py-4">No notes yet. Add one above!</p>
                    ) : (
                        notes.map((note) => (
                            <div
                                key={note.id}
                                className="flex items-start justify-between gap-4 p-4 bg-black rounded-xl border border-white/5"
                            >
                                <div className="flex-1">
                                    <p className="text-sm text-gray-200">{note.content}</p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        {new Date(note.created_at).toLocaleString()}
                                    </p>
                                </div>
                                <button
                                    onClick={() => deleteNote(note.id)}
                                    className="p-1.5 text-gray-500 hover:text-red-400 transition-colors"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
