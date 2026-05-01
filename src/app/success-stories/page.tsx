'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

type Review = {
    id: string;
    client_name: string;
    client_company: string;
    rating: number;
    content: string;
    created_at: string;
};

export default function ReviewsPage() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApprovedReviews = async () => {
            const { data, error } = await supabase
                .from('client_reviews')
                .select('*')
                .eq('status', 'approved')
                .order('created_at', { ascending: false });

            if (!error && data) {
                setReviews(data);
            }
            setLoading(false);
        };

        fetchApprovedReviews();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Navbar />

            <main className="flex-1 pt-32 pb-24 px-6 lg:px-12 relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF4925]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4925] to-orange-400">Stories</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            See what our partners have to say about working with ARC AI to transform their digital presence and automate their operations.
                        </p>
                    </motion.div>

                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="w-12 h-12 border-2 border-[#FF4925] border-t-transparent rounded-full animate-spin" />
                        </div>
                    ) : reviews.length === 0 ? (
                        <div className="text-center py-20 text-gray-500">
                            <Quote className="w-12 h-12 mx-auto mb-4 opacity-50" />
                            <p className="text-xl">More reviews coming soon.</p>
                        </div>
                    ) : (
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {reviews.map((review) => (
                                <motion.div
                                    key={review.id}
                                    variants={itemVariants}
                                    className="bg-zinc-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col relative group hover:border-[#FF4925]/30 transition-colors"
                                >
                                    <Quote className="absolute top-6 right-6 w-8 h-8 text-[#FF4925]/20 group-hover:text-[#FF4925]/40 transition-colors" />
                                    
                                    <div className="flex items-center gap-1 mb-6 text-yellow-500">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    
                                    <p className="text-gray-300 flex-1 leading-relaxed mb-6">
                                        "{review.content}"
                                    </p>
                                    
                                    <div className="mt-auto">
                                        <h3 className="font-semibold text-white">{review.client_name}</h3>
                                        {review.client_company && (
                                            <p className="text-sm text-gray-500 mt-1">{review.client_company}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
