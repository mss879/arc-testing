'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Users, RefreshCw } from 'lucide-react';

interface Contact {
    id: string;
    email: string;
    full_name: string | null;
    phone: string | null;
    company: string | null;
    subject: string | null;
    message: string | null;
    source: string | null;
    is_deleted_from_crm: boolean;
    deleted_at: string | null;
    created_at: string;
}

export default function ContactsArchivePage() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        setLoading(true);
        const { data } = await supabase
            .from('contacts_archive')
            .select('*')
            .order('created_at', { ascending: false });
        setContacts(data || []);
        setLoading(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Contacts Archive</h1>
                    <p className="text-gray-400 text-sm mt-1">
                        Permanent history of all contacts · <span className="text-white font-mono">{contacts.length}</span> records
                    </p>
                </div>
                <button
                    onClick={fetchContacts}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm transition-colors border border-white/10"
                >
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                    Refresh
                </button>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/10 text-left">
                                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Contact Info</th>
                                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Source</th>
                                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Message</th>
                                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">CRM Status</th>
                                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="p-12 text-center text-gray-500">
                                        <Users className="w-10 h-10 mx-auto mb-3 opacity-30" />
                                        <p>No contacts yet</p>
                                    </td>
                                </tr>
                            ) : (
                                contacts.map((contact) => (
                                    <tr key={contact.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <td className="p-4">
                                            <div className="text-sm font-medium text-white">{contact.full_name || '—'}</div>
                                            <div className="text-xs text-gray-400">{contact.email}</div>
                                            {contact.phone && <div className="text-xs text-gray-500">{contact.phone}</div>}
                                            {contact.company && <div className="text-xs text-gray-500">{contact.company}</div>}
                                        </td>
                                        <td className="p-4">
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10">
                                                {contact.source || 'unknown'}
                                            </span>
                                        </td>
                                        <td className="p-4 max-w-[300px]">
                                            {contact.subject && <div className="text-xs font-medium text-gray-300 mb-1">{contact.subject}</div>}
                                            <div className="text-xs text-gray-500 line-clamp-2">{contact.message || '—'}</div>
                                        </td>
                                        <td className="p-4">
                                            {contact.is_deleted_from_crm ? (
                                                <div>
                                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                                                        Archived
                                                    </span>
                                                    {contact.deleted_at && (
                                                        <div className="text-[10px] text-gray-500 mt-1">
                                                            {new Date(contact.deleted_at).toLocaleDateString()}
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                                                    Active Lead
                                                </span>
                                            )}
                                        </td>
                                        <td className="p-4 text-xs text-gray-400 whitespace-nowrap">
                                            {new Date(contact.created_at).toLocaleDateString()}
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
