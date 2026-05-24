'use client';

import { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    Upload,
    Trash2,
    Plus,
    Image as ImageIcon,
    Calendar,
    ArrowLeft,
    Loader2,
    Save,
    X,
    LayoutDashboard
} from 'lucide-react';
import NextImage from 'next/image';

interface LaunchItem {
    id: string;
    title: string;
    description: string;
    image_url: string;
    launch_date: string | null;
    status: 'planned' | 'development' | 'ready';
    created_at: string;
}

export default function AdminLaunches() {
    const [launches, setLaunches] = useState<LaunchItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image_url: '',
        status: 'planned' as const
    });

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
            router.push('/admin/login');
        } else {
            fetchLaunches();
        }
    };

    const fetchLaunches = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('upcoming_launches')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching launches:', error);
            alert('Error fetching launches');
        } else {
            setLaunches(data || []);
        }
        setLoading(false);
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `${fileName}`;

        setUploading(true);

        const { error: uploadError } = await supabase.storage
            .from('launches')
            .upload(filePath, file);

        if (uploadError) {
            console.error('Error uploading image:', uploadError);
            alert('Error uploading image');
            setUploading(false);
            return;
        }

        const { data: { publicUrl } } = supabase.storage
            .from('launches')
            .getPublicUrl(filePath);

        setFormData({ ...formData, image_url: publicUrl });
        setUploading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.title || !formData.image_url) {
            alert('Title and Image are required');
            return;
        }

        setUploading(true);

        const { error } = await supabase
            .from('upcoming_launches')
            .insert([formData]);

        if (error) {
            console.error('Error creating launch:', error);
            alert('Error creating launch');
        } else {
            setFormData({
                title: '',
                description: '',
                image_url: '',
                status: 'planned'
            });
            setShowForm(false);
            fetchLaunches();
        }
        setUploading(false);
    };

    const handleDelete = async (id: string, imageUrl: string) => {
        if (!confirm('Are you sure you want to delete this launch?')) return;

        // 1. Delete record
        const { error } = await supabase
            .from('upcoming_launches')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting launch:', error);
            alert('Error deleting launch');
            return;
        }

        // 2. Try to delete image from storage (optional, best effort)
        try {
            const path = imageUrl.split('/').pop();
            if (path) {
                await supabase.storage
                    .from('launches')
                    .remove([path]);
            }
        } catch (err) {
            console.error('Error deleting image:', err);
        }

        fetchLaunches();
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <nav className="border-b border-white/10 bg-zinc-900/50 backdrop-blur-md sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center gap-4">
                            <Link href="/admin" className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 hover:text-white">
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <span className="font-bold text-lg">Manage Launches</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href="/admin" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                <LayoutDashboard className="w-4 h-4" />
                                Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Upcoming Launches</h1>
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="flex items-center gap-2 px-4 py-2 bg-[#FF4925] hover:bg-[#ff5d3d] rounded-lg transition-colors font-medium text-white"
                    >
                        {showForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        {showForm ? 'Cancel' : 'Add New Launch'}
                    </button>
                </div>

                {/* Create Form */}
                {showForm && (
                    <div className="mb-12 bg-zinc-900 border border-white/10 rounded-xl p-6 md:p-8 animate-in slide-in-from-top-4 fade-in duration-200">
                        <h2 className="text-xl font-semibold mb-6">Add New Launch</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Title</label>
                                        <input
                                            type="text"
                                            value={formData.title}
                                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#FF4925] transition-colors"
                                            placeholder="Project Name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Status</label>
                                        <select
                                            value={formData.status}
                                            onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#FF4925] transition-colors"
                                        >
                                            <option value="planned">Planned</option>
                                            <option value="development">In Development</option>
                                            <option value="ready">Ready for Launch</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
                                        <textarea
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#FF4925] transition-colors min-h-[100px]"
                                            placeholder="Brief description..."
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Project Image</label>
                                    <div
                                        onClick={() => fileInputRef.current?.click()}
                                        className={`border-2 border-dashed border-white/10 rounded-xl aspect-video flex flex-col items-center justify-center cursor-pointer hover:border-[#FF4925]/50 hover:bg-white/5 transition-all group overflow-hidden relative ${!formData.image_url ? 'bg-black/30' : ''}`}
                                    >
                                        {formData.image_url ? (
                                            <div className="relative w-full h-full">
                                                <NextImage
                                                    src={formData.image_url}
                                                    alt="Preview"
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                                    <span className="text-sm font-medium">Click to change</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                                    {uploading ? <Loader2 className="w-6 h-6 animate-spin text-[#FF4925]" /> : <ImageIcon className="w-6 h-6 text-gray-400" />}
                                                </div>
                                                <span className="text-sm text-gray-400">Click to upload image</span>
                                                <span className="text-xs text-gray-500 mt-1">PNG, JPG, WEBP up to 5MB</span>
                                            </>
                                        )}
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="hidden"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={uploading || !formData.image_url}
                                    className="flex items-center gap-2 px-6 py-2 bg-[#FF4925] hover:bg-[#ff5d3d] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors font-medium text-white"
                                >
                                    {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                                    Save Launch
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* List */}
                {loading ? (
                    <div className="flex justify-center py-20">
                        <Loader2 className="w-8 h-8 animate-spin text-[#FF4925]" />
                    </div>
                ) : launches.length === 0 ? (
                    <div className="text-center py-20 border border-dashed border-white/10 rounded-xl">
                        <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4">
                            <ImageIcon className="w-8 h-8 text-gray-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">No launches found</h3>
                        <p className="text-gray-400 mb-6">Get started by adding your first upcoming project.</p>
                        <button
                            onClick={() => setShowForm(true)}
                            className="px-6 py-2 bg-white text-black hover:bg-gray-200 rounded-lg transition-colors font-medium"
                        >
                            Add Launch
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {launches.map((launch) => (
                            <div key={launch.id} className="group bg-zinc-900 border border-white/10 rounded-xl overflow-hidden hover:border-[#FF4925]/30 transition-all">
                                <div className="relative aspect-video bg-black/50">
                                    <NextImage
                                        src={launch.image_url}
                                        alt={launch.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-3 right-3">
                                        <span className={`px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider ${launch.status === 'ready' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                                                launch.status === 'development' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                                                    'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                            }`}>
                                            {launch.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#FF4925] transition-colors">{launch.title}</h3>
                                    <p className="text-sm text-gray-400 line-clamp-2 mb-4 h-10">{launch.description || 'No description provided.'}</p>

                                    <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                        <span className="text-xs text-gray-500">
                                            Added {new Date(launch.created_at).toLocaleDateString()}
                                        </span>
                                        <button
                                            onClick={() => handleDelete(launch.id, launch.image_url)}
                                            className="p-2 hover:bg-red-500/10 hover:text-red-400 text-gray-500 rounded-lg transition-colors"
                                            title="Delete Launch"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
