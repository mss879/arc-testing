'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Mail, Download, RefreshCw } from 'lucide-react';

interface Subscriber {
    id: string;
    email: string;
    topic_interest: string;
    source: string;
    source_page: string | null;
    subscribed_at: string;
}

const topicColors: Record<string, string> = {
    'ai automation': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    'web design': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'chatbots': 'bg-green-500/10 text-green-400 border-green-500/20',
    'marketing': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    'content': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    'general': 'bg-gray-500/10 text-gray-400 border-gray-500/20',
};

function getTopicColor(topic: string): string {
    const lower = topic.toLowerCase();
    for (const [key, value] of Object.entries(topicColors)) {
        if (lower.includes(key)) return value;
    }
    return topicColors['general'];
}

export default function SubscribersPage() {
    const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSubscribers();
    }, []);

    const fetchSubscribers = async () => {
        setLoading(true);
        const { data } = await supabase
            .from('email_subscriptions')
            .select('*')
            .order('subscribed_at', { ascending: false });
        setSubscribers(data || []);
        setLoading(false);
    };

    const exportCSV = () => {
        const headers = ['Email', 'Topic Interest', 'Source', 'Source Page', 'Date Subscribed'];
        const rows = subscribers.map((s) => [
            s.email,
            s.topic_interest,
            s.source,
            s.source_page || '',
            new Date(s.subscribed_at).toLocaleDateString(),
        ]);
        const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `subscribers_${new Date().toISOString().substring(0, 10)}.csv`;
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Email Newsletter</h1>
                    <p className="text-gray-400 text-sm mt-1">
                        Manage subscribers · <span className="text-white font-mono">{subscribers.length}</span> total
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={exportCSV}
                        className="flex items-center gap-2 px-4 py-2 bg-[#FF4925] hover:bg-[#E03816] rounded-xl text-sm font-medium transition-colors"
                    >
                        <Download className="w-4 h-4" />
                        Export CSV
                    </button>
                    <button
                        onClick={fetchSubscribers}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm transition-colors border border-white/10"
                    >
                        <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                        Refresh
                    </button>
                </div>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/10 text-left">
                                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Subscriber Email</th>
                                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Interest</th>
                                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Source</th>
                                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Date Subscribed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subscribers.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="p-12 text-center text-gray-500">
                                        <Mail className="w-10 h-10 mx-auto mb-3 opacity-30" />
                                        <p>No subscribers yet</p>
                                    </td>
                                </tr>
                            ) : (
                                subscribers.map((sub) => (
                                    <tr key={sub.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <td className="p-4">
                                            <span className="text-sm text-white">{sub.email}</span>
                                        </td>
                                        <td className="p-4">
                                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getTopicColor(sub.topic_interest)}`}>
                                                {sub.topic_interest}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <span className="text-sm text-gray-400">{sub.source}</span>
                                        </td>
                                        <td className="p-4 text-sm text-gray-400 whitespace-nowrap">
                                            {new Date(sub.subscribed_at).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
