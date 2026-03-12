'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { MessageSquare, RefreshCw } from 'lucide-react';

interface ChatMessage {
    id: string;
    session_id: string;
    role: string;
    content: string;
    created_at: string;
}

interface SessionSummary {
    session_id: string;
    firstMessage: string;
    firstTimestamp: string;
    messageCount: number;
}

export default function ChatHistoryPage() {
    const [sessions, setSessions] = useState<SessionSummary[]>([]);
    const [selectedSession, setSelectedSession] = useState<string | null>(null);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSessions();
    }, []);

    const fetchSessions = async () => {
        setLoading(true);
        const { data } = await supabase
            .from('chat_messages')
            .select('*')
            .order('created_at', { ascending: true });

        if (data) {
            const sessionMap = new Map<string, ChatMessage[]>();
            data.forEach((msg: ChatMessage) => {
                const existing = sessionMap.get(msg.session_id) || [];
                existing.push(msg);
                sessionMap.set(msg.session_id, existing);
            });

            const summaries: SessionSummary[] = [];
            sessionMap.forEach((msgs, sessionId) => {
                const userMsgs = msgs.filter((m) => m.role === 'user');
                summaries.push({
                    session_id: sessionId,
                    firstMessage: userMsgs[0]?.content || 'No user message',
                    firstTimestamp: msgs[0]?.created_at || '',
                    messageCount: msgs.length,
                });
            });

            // Sort by most recent first
            summaries.sort((a, b) => new Date(b.firstTimestamp).getTime() - new Date(a.firstTimestamp).getTime());
            setSessions(summaries);
        }
        setLoading(false);
    };

    const selectSession = async (sessionId: string) => {
        setSelectedSession(sessionId);
        const { data } = await supabase
            .from('chat_messages')
            .select('*')
            .eq('session_id', sessionId)
            .order('created_at', { ascending: true });
        setMessages(data || []);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">AI Chat History</h1>
                    <p className="text-gray-400 text-sm mt-1">Review all AI chat conversations</p>
                </div>
                <button
                    onClick={fetchSessions}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm transition-colors border border-white/10"
                >
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                    Refresh
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-14rem)]">
                {/* Session List */}
                <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-white/10 bg-white/[0.02]">
                        <p className="text-sm font-medium text-gray-300">{sessions.length} Sessions</p>
                    </div>
                    <div className="overflow-y-auto flex-1">
                        {sessions.length === 0 ? (
                            <div className="p-8 text-center text-gray-500">
                                <MessageSquare className="w-10 h-10 mx-auto mb-3 opacity-30" />
                                <p className="text-sm">No chat sessions yet</p>
                            </div>
                        ) : (
                            sessions.map((session) => (
                                <button
                                    key={session.session_id}
                                    onClick={() => selectSession(session.session_id)}
                                    className={`w-full text-left p-4 border-b border-white/5 hover:bg-white/5 transition-colors ${
                                        selectedSession === session.session_id
                                            ? 'bg-[#FF4925]/10 border-l-2 border-l-[#FF4925]'
                                            : 'border-l-2 border-l-transparent'
                                    }`}
                                >
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-xs font-mono text-gray-500">
                                            {session.session_id.slice(0, 8)}...
                                        </span>
                                        <span className="text-xs text-gray-400">
                                            {new Date(session.firstTimestamp).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-300 line-clamp-2 mb-1">{session.firstMessage}</p>
                                    <p className="text-xs text-gray-500">{session.messageCount} messages</p>
                                </button>
                            ))
                        )}
                    </div>
                </div>

                {/* Conversation View */}
                <div className="lg:col-span-2 bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden flex flex-col">
                    {selectedSession ? (
                        <>
                            <div className="p-4 border-b border-white/10 bg-white/[0.02]">
                                <p className="text-sm font-medium text-gray-300">
                                    Session: <span className="font-mono text-gray-400">{selectedSession.slice(0, 12)}...</span>
                                </p>
                                <p className="text-xs text-gray-500 mt-1">{messages.length} messages</p>
                            </div>
                            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                                                msg.role === 'user'
                                                    ? 'bg-[#FF4925] text-white rounded-tr-none'
                                                    : msg.role === 'proposal_sent'
                                                    ? 'bg-green-900/30 text-green-300 rounded-tl-none border border-green-500/20'
                                                    : 'bg-zinc-800 text-gray-200 rounded-tl-none'
                                            }`}
                                        >
                                            <div className="mb-1 text-[10px] opacity-50 uppercase tracking-wider font-bold">
                                                {msg.role === 'proposal_sent' ? '📧 PROPOSAL SENT' : msg.role}
                                            </div>
                                            <div className="whitespace-pre-wrap break-words">{msg.content}</div>
                                            <div className="text-[10px] opacity-30 mt-2">
                                                {new Date(msg.created_at).toLocaleTimeString()}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500">
                            <MessageSquare className="w-12 h-12 mb-4 opacity-20" />
                            <p>Select a session to view the conversation</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
