'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { 
    Star, Plus, Check, X as XIcon, Copy, Trash2, 
    Eye, RefreshCw, AlertCircle
} from 'lucide-react';
import { toast } from 'sonner';

type Review = {
    id: string;
    client_name: string;
    client_company: string;
    rating: number;
    content: string;
    status: 'pending' | 'approved' | 'rejected';
    token: string;
    token_used: boolean;
    created_at: string;
};

export default function AdminReviewsPage() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [generating, setGenerating] = useState(false);
    const [selectedReview, setSelectedReview] = useState<Review | null>(null);

    const fetchReviews = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('client_reviews')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching reviews:', error);
            toast.error('Failed to load reviews');
        } else {
            setReviews(data || []);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    const generateReviewLink = async () => {
        setGenerating(true);
        const token = crypto.randomUUID();
        
        const { data, error } = await supabase
            .from('client_reviews')
            .insert([{
                token,
                status: 'pending',
                token_used: false
            }])
            .select()
            .single();

        if (error) {
            console.error('Error generating link:', error);
            toast.error('Failed to generate review link');
            setGenerating(false);
            return;
        }

        const link = `${window.location.origin}/review?token=${token}`;
        await navigator.clipboard.writeText(link);
        toast.success('Review link generated and copied to clipboard!');
        
        if (data) {
            setReviews([data, ...reviews]);
        }
        setGenerating(false);
    };

    const updateReviewStatus = async (id: string, status: 'approved' | 'rejected') => {
        const { error } = await supabase
            .from('client_reviews')
            .update({ status })
            .eq('id', id);

        if (error) {
            console.error('Error updating review:', error);
            toast.error(`Failed to ${status} review`);
            return;
        }

        toast.success(`Review ${status} successfully`);
        setReviews(reviews.map(r => r.id === id ? { ...r, status } : r));
        if (selectedReview?.id === id) {
            setSelectedReview({ ...selectedReview, status });
        }
    };

    const deleteReview = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this review?')) return;

        const { error } = await supabase
            .from('client_reviews')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting review:', error);
            toast.error('Failed to delete review');
            return;
        }

        toast.success('Review deleted successfully');
        setReviews(reviews.filter(r => r.id !== id));
        if (selectedReview?.id === id) setSelectedReview(null);
    };

    const copyLink = async (token: string) => {
        const link = `${window.location.origin}/review?token=${token}`;
        await navigator.clipboard.writeText(link);
        toast.success('Link copied to clipboard!');
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Star className="w-6 h-6 text-[#FF4925]" />
                        Client Reviews
                    </h1>
                    <p className="text-gray-400 text-sm mt-1">
                        Manage client testimonials and generate review links.
                    </p>
                </div>
                
                <button
                    onClick={generateReviewLink}
                    disabled={generating}
                    className="flex items-center gap-2 px-4 py-2 bg-[#FF4925] text-white rounded-lg hover:bg-[#FF4925]/90 transition-colors disabled:opacity-50"
                >
                    {generating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                    Generate New Link
                </button>
            </div>

            {/* Content */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden">
                {loading ? (
                    <div className="p-8 flex justify-center">
                        <RefreshCw className="w-6 h-6 text-[#FF4925] animate-spin" />
                    </div>
                ) : reviews.length === 0 ? (
                    <div className="p-8 text-center text-gray-400 flex flex-col items-center">
                        <Star className="w-12 h-12 text-gray-600 mb-3" />
                        <p>No reviews yet. Generate a link and send it to a client!</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-gray-300">
                            <thead className="text-xs text-gray-400 uppercase bg-black/50">
                                <tr>
                                    <th className="px-6 py-4">Client</th>
                                    <th className="px-6 py-4">Rating</th>
                                    <th className="px-6 py-4">Review</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Link Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {reviews.map((review) => (
                                    <tr key={review.id} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4">
                                            {review.client_name ? (
                                                <div>
                                                    <p className="font-medium text-white">{review.client_name}</p>
                                                    <p className="text-xs text-gray-500">{review.client_company}</p>
                                                </div>
                                            ) : (
                                                <span className="text-gray-500 italic">Waiting for submission</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            {review.rating ? (
                                                <div className="flex items-center text-yellow-500">
                                                    {[...Array(review.rating)].map((_, i) => (
                                                        <Star key={i} className="w-4 h-4 fill-current" />
                                                    ))}
                                                </div>
                                            ) : (
                                                <span className="text-gray-500">-</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            {review.content ? (
                                                <p className="max-w-xs truncate" title={review.content}>
                                                    &ldquo;{review.content}&rdquo;
                                                </p>
                                            ) : (
                                                <span className="text-gray-500">-</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                                                review.status === 'approved' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                review.status === 'rejected' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                                                'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                                            }`}>
                                                {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {review.token_used ? (
                                                <span className="text-green-400 text-xs flex items-center gap-1">
                                                    <Check className="w-3 h-3" /> Submitted
                                                </span>
                                            ) : (
                                                <span className="text-gray-400 text-xs flex items-center gap-1">
                                                    <AlertCircle className="w-3 h-3" /> Pending
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end items-center gap-2">
                                                {!review.token_used && (
                                                    <button
                                                        onClick={() => copyLink(review.token)}
                                                        title="Copy Link"
                                                        className="p-1.5 bg-zinc-800 text-gray-300 hover:text-white rounded transition-colors"
                                                    >
                                                        <Copy className="w-4 h-4" />
                                                    </button>
                                                )}

                                                {review.token_used && (
                                                    <button
                                                        onClick={() => setSelectedReview(review)}
                                                        title="View Review"
                                                        className="p-1.5 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 rounded transition-colors"
                                                    >
                                                        <Eye className="w-4 h-4" />
                                                    </button>
                                                )}
                                                
                                                {review.token_used && review.status === 'pending' && (
                                                    <>
                                                        <button
                                                            onClick={() => updateReviewStatus(review.id, 'approved')}
                                                            title="Approve"
                                                            className="p-1.5 bg-green-500/20 text-green-400 hover:bg-green-500/30 rounded transition-colors"
                                                        >
                                                            <Check className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => updateReviewStatus(review.id, 'rejected')}
                                                            title="Reject"
                                                            className="p-1.5 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded transition-colors"
                                                        >
                                                            <XIcon className="w-4 h-4" />
                                                        </button>
                                                    </>
                                                )}

                                                <button
                                                    onClick={() => deleteReview(review.id)}
                                                    title="Delete"
                                                    className="p-1.5 text-gray-500 hover:text-red-400 rounded transition-colors ml-2"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Review Detail Modal */}
            {selectedReview && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div 
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={() => setSelectedReview(null)}
                    />
                    <div className="relative bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-lg p-8 shadow-2xl">
                        {/* Close */}
                        <button
                            onClick={() => setSelectedReview(null)}
                            className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                        >
                            <XIcon className="w-5 h-5" />
                        </button>

                        {/* Client Info */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold text-white">
                                {selectedReview.client_name}
                            </h2>
                            {selectedReview.client_company && (
                                <p className="text-sm text-gray-400 mt-1">{selectedReview.client_company}</p>
                            )}
                            <p className="text-xs text-gray-500 mt-1">
                                {new Date(selectedReview.created_at).toLocaleDateString('en-US', {
                                    year: 'numeric', month: 'long', day: 'numeric'
                                })}
                            </p>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-5 h-5 ${
                                        i < selectedReview.rating
                                            ? 'fill-yellow-500 text-yellow-500'
                                            : 'text-gray-600'
                                    }`}
                                />
                            ))}
                            <span className="text-sm text-gray-400 ml-2">{selectedReview.rating}/5</span>
                        </div>

                        {/* Review Content */}
                        <div className="bg-black/40 border border-white/5 rounded-xl p-5 mb-6">
                            <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                                &ldquo;{selectedReview.content}&rdquo;
                            </p>
                        </div>

                        {/* Status Badge */}
                        <div className="flex items-center justify-between">
                            <span className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                                selectedReview.status === 'approved' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                selectedReview.status === 'rejected' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                                'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                            }`}>
                                {selectedReview.status.charAt(0).toUpperCase() + selectedReview.status.slice(1)}
                            </span>

                            {/* Actions */}
                            {selectedReview.status === 'pending' && (
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => updateReviewStatus(selectedReview.id, 'rejected')}
                                        className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 rounded-lg transition-colors"
                                    >
                                        <XIcon className="w-4 h-4" />
                                        Reject
                                    </button>
                                    <button
                                        onClick={() => updateReviewStatus(selectedReview.id, 'approved')}
                                        className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 hover:bg-green-500/20 border border-green-500/20 rounded-lg transition-colors"
                                    >
                                        <Check className="w-4 h-4" />
                                        Approve
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
