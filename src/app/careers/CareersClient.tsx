'use client';

import { useEffect, useState } from 'react';
import { MapPin, Clock, Briefcase, Building2, ArrowRight, Search } from 'lucide-react';
import CareerApplicationModal from '@/components/CareerApplicationModal';

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

export default function CareersClient() {
    const [vacancies, setVacancies] = useState<Vacancy[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [expandedId, setExpandedId] = useState<string | null>(null);

    useEffect(() => {
        fetchVacancies();
    }, []);

    const fetchVacancies = async () => {
        try {
            const res = await fetch('/api/careers');
            const data = await res.json();
            setVacancies(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error('Error fetching vacancies:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleApply = (vacancy: Vacancy) => {
        setSelectedVacancy(vacancy);
        setShowModal(true);
    };

    const getTypeColor = (type: string) => {
        switch (type.toLowerCase()) {
            case 'full-time': return 'bg-green-500/10 text-green-400 border-green-500/20';
            case 'part-time': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
            case 'contract': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
            case 'internship': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
            default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
        }
    };

    return (
        <>
            {/* Hero Section — Compact & Premium */}
            <section className="relative pt-36 md:pt-48 pb-12 px-6 lg:px-12 overflow-hidden" aria-label="Careers hero">
                {/* Background effects */}
                <div className="absolute inset-0 bg-[rgb(10,10,10)]" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#FF4925]/[0.05] via-transparent to-transparent pointer-events-none" aria-hidden="true" />
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[300px] md:h-[400px] opacity-25 pointer-events-none"
                    aria-hidden="true"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(255,73,37,0.15) 0%, transparent 70%)'
                    }}
                />

                <div className="relative z-10 max-w-[1200px] mx-auto text-center space-y-6">
                    <div>
                        <p className="text-[10px] md:text-xs font-medium text-[rgb(119,119,119)] uppercase tracking-widest mb-4">
                            (JOIN THE TEAM)
                        </p>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white uppercase leading-[0.9] tracking-tight mx-auto max-w-4xl">
                        BUILD THE
                        <br />
                        <span className="text-[rgb(255,73,37)]">FUTURE</span>
                    </h1>
                    <div className="max-w-xl mx-auto pt-2">
                        <p className="text-sm md:text-base text-[rgb(119,119,119)] leading-relaxed">
                            Join ARC AI and help shape the digital landscape for businesses worldwide with cutting-edge AI automation and world-class design.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vacancies Section */}
            <section className="pb-32 px-6 lg:px-12 relative bg-[rgb(10,10,10)]" aria-label="Open positions">
                <div className="max-w-[1400px] mx-auto">
                    {/* Divider */}
                    <div className="mb-20">
                        <div className="h-px w-full bg-[rgb(40,40,40)]"></div>
                    </div>

                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(202,202,202)] uppercase tracking-tight">
                            Open Positions
                        </h2>
                        <p className="text-[rgb(119,119,119)] mt-4">
                            {loading ? 'LOADING...' : `${vacancies.length} ROLE${vacancies.length !== 1 ? 'S' : ''} AVAILABLE`}
                        </p>
                    </div>

                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 animate-pulse h-[320px]">
                                    <div className="h-6 bg-white/5 rounded-full w-24 mb-6" />
                                    <div className="h-8 bg-white/5 rounded w-3/4 mb-4" />
                                    <div className="h-4 bg-white/5 rounded w-1/2 mb-8" />
                                    <div className="h-12 bg-white/5 rounded-xl w-full mt-auto" />
                                </div>
                            ))}
                        </div>
                    ) : vacancies.length === 0 ? (
                        <div className="text-center py-32 bg-white/[0.02] border border-white/10 rounded-3xl max-w-3xl mx-auto">
                            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="w-10 h-10 text-[rgb(119,119,119)]" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">No Open Positions</h3>
                            <p className="text-[rgb(119,119,119)] max-w-md mx-auto leading-relaxed">
                                We don&apos;t have any openings matching your profile right now, but we&apos;re always looking for exceptional talent. Say hello at{' '}
                                <a href="mailto:careers@arcai.agency" className="text-[rgb(255,73,37)] hover:text-[rgb(255,93,57)] transition-colors underline object-bottom">
                                    careers@arcai.agency
                                </a>
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {vacancies.map((vacancy) => (
                                <div
                                    key={vacancy.id}
                                    className="group relative flex flex-col justify-between bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden min-h-[380px]"
                                >
                                    {/* Glass shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" aria-hidden="true"></div>
                                    {/* Reflection hover effect */}
                                    <div className="absolute -top-[50%] -right-[50%] w-full h-full bg-gradient-to-br from-[rgb(255,73,37)]/10 to-transparent rotate-45 group-hover:opacity-100 opacity-0 transition-opacity duration-700 pointer-events-none" aria-hidden="true"></div>

                                    {/* Card Content - Z-index to sit above effects */}
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="space-y-6 flex-1">
                                            {/* Type Badge */}
                                            <div className="flex items-center justify-between">
                                                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border ${getTypeColor(vacancy.type).replace('bg-green-500/10', 'bg-white/5').replace('border-green-500/20', 'border-white/10').replace('text-green-400', 'text-[rgb(202,202,202)]')}`}>
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {vacancy.type}
                                                </span>
                                            </div>

                                            {/* Title & Meta */}
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-bold text-white group-hover:text-[rgb(255,73,37)] transition-colors leading-tight">
                                                    {vacancy.title}
                                                </h3>

                                                <div className="flex flex-wrap items-center gap-4">
                                                    {vacancy.department && (
                                                        <span className="flex items-center gap-2 text-sm text-[rgb(119,119,119)]">
                                                            <Building2 className="w-4 h-4" />
                                                            {vacancy.department}
                                                        </span>
                                                    )}
                                                    {vacancy.location && (
                                                        <span className="flex items-center gap-2 text-sm text-[rgb(119,119,119)]">
                                                            <MapPin className="w-4 h-4" />
                                                            {vacancy.location}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Description preview */}
                                            <div className="space-y-4">
                                                {vacancy.description && (
                                                    <p className="text-sm text-[rgb(160,160,160)] leading-relaxed whitespace-pre-line line-clamp-3">
                                                        {vacancy.description}
                                                    </p>
                                                )}

                                                {/* Learn More Toggle Button */}
                                                {(vacancy.description?.length > 150 || vacancy.requirements) && (
                                                    <button
                                                        onClick={() => setExpandedId(vacancy.id)}
                                                        className="text-[rgb(255,73,37)] hover:text-[rgb(255,93,57)] text-sm font-medium transition-colors hover:underline flex items-center gap-1 mt-2"
                                                    >
                                                        Learn More
                                                        <ArrowRight className="w-3.5 h-3.5" />
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        {/* Apply Button */}
                                        <div className="pt-8 mt-auto w-full">
                                            <button
                                                onClick={() => handleApply(vacancy)}
                                                className="w-full relative overflow-hidden group/btn flex items-center justify-center gap-2 px-6 py-4 bg-[rgb(255,73,37)] hover:bg-[rgb(255,93,57)] rounded-xl text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 shadow-[0_0_20px_rgba(255,73,37,0.3)] hover:shadow-[0_0_30px_rgba(255,73,37,0.5)]"
                                            >
                                                {/* Button Light sweep effect */}
                                                <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
                                                <span className="relative z-10">Apply Now</span>
                                                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover/btn:translate-x-1" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Job Details Modal - Custom component built for this view */}
            {expandedId && vacancies.find(v => v.id === expandedId) && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pb-20 sm:pb-6" role="dialog" aria-modal="true" aria-label="Job details">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setExpandedId(null)}
                        aria-hidden="true"
                    />

                    {/* Modal Content */}
                    <div className="relative w-full max-w-2xl bg-[#0A0A0B] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 h-[80vh] flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {vacancies.find(v => v.id === expandedId)?.title}
                                </h3>
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                    <span className="flex items-center gap-1.5">
                                        <Building2 className="w-4 h-4 text-gray-500" />
                                        {vacancies.find(v => v.id === expandedId)?.department}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <MapPin className="w-4 h-4 text-gray-500" />
                                        {vacancies.find(v => v.id === expandedId)?.location}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setExpandedId(null)}
                                aria-label="Close job details"
                                className="p-2 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white transition-colors self-start"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>

                        {/* Scrollable Body */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {vacancies.find(v => v.id === expandedId)?.description && (
                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">About the Role</h4>
                                    <p className="text-[rgb(160,160,160)] leading-relaxed whitespace-pre-line">
                                        {vacancies.find(v => v.id === expandedId)?.description}
                                    </p>
                                </div>
                            )}

                            {vacancies.find(v => v.id === expandedId)?.requirements && (
                                <div className="space-y-4 pt-4 border-t border-white/5 relative z-10">
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Requirements</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                                        {vacancies.find(v => v.id === expandedId)?.requirements.split('\n').filter(r => r.trim()).map((req, i) => (
                                            <li key={i} className="flex items-start gap-3 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[rgb(255,73,37)] mt-1.5 shrink-0 shadow-[0_0_8px_rgba(255,73,37,0.8)]" />
                                                <span className="text-[rgb(160,160,160)] leading-relaxed text-sm">
                                                    {req.replace(/^[-*•]\s*/, '').trim()}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Footer CTA */}
                        <div className="p-6 border-t border-white/10 bg-white/[0.02] shrink-0 flex justify-end">
                            <button
                                onClick={() => {
                                    const vacancy = vacancies.find(v => v.id === expandedId);
                                    if (vacancy) {
                                        setExpandedId(null);
                                        handleApply(vacancy);
                                    }
                                }}
                                className="relative overflow-hidden group/btn flex items-center justify-center gap-2 px-8 py-3.5 bg-[rgb(255,73,37)] hover:bg-[rgb(255,93,57)] rounded-xl text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 shadow-[0_0_20px_rgba(255,73,37,0.3)] min-w-[200px]"
                            >
                                <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
                                <span className="relative z-10">Apply For This Role</span>
                                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover/btn:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Application Modal */}
            {selectedVacancy && (
                <CareerApplicationModal
                    vacancy={selectedVacancy}
                    isOpen={showModal}
                    onClose={() => {
                        setShowModal(false);
                        setSelectedVacancy(null);
                    }}
                />
            )}
        </>
    );
}
