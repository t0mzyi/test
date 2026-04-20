import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export const Profile = () => {
    // Mock user stats
    const stats = {
        totalClips: '14',
        totalViews: '2,405,110',
        currentBalance: '$382.50',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto space-y-12"
        >
            <div className="flex items-end justify-between border-b border-white/10 pb-8">
                <h1 className="text-4xl font-bold tracking-tight">Your Profile</h1>
                <Button variant="outline">Edit Details</Button>
            </div>

            {/* Core Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-[24px] bg-[#0A0A0A] border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 21 5-5-5-5"/><path d="M21 16H3"/><path d="m8 3-5 5 5 5"/><path d="M3 8h18"/></svg>
                    </div>
                    <p className="text-white/50 mb-2 font-light">Total Clips</p>
                    <p className="text-4xl font-mono tabular-metrics font-semibold">{stats.totalClips}</p>
                </div>
                <div className="p-6 rounded-[24px] bg-[#0A0A0A] border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
                    </div>
                    <p className="text-white/50 mb-2 font-light">Total Views</p>
                    <p className="text-4xl font-mono tabular-metrics font-semibold">{stats.totalViews}</p>
                </div>
                <div className="p-6 rounded-[24px] bg-white text-black relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    </div>
                    <p className="text-black/60 mb-2 font-medium">Available Balance</p>
                    <p className="text-4xl font-mono tabular-metrics font-bold">{stats.currentBalance}</p>
                    <div className="mt-6">
                        <Button variant="primary" className="w-full bg-black text-white hover:bg-black/90">Withdraw</Button>
                    </div>
                </div>
            </div>

            {/* Forms section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Account Setup</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-white/50 mb-2">Display Name</label>
                            <input type="text" className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" defaultValue="John Clipper" />
                        </div>
                        <div>
                            <label className="block text-sm text-white/50 mb-2">Bio</label>
                            <textarea className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none h-28" defaultValue="I make minimal tech content and edits." />
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Connected Payouts</h3>
                    <div className="space-y-4">
                        <div className="p-4 rounded-xl border border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    P
                                </div>
                                <div>
                                    <p className="font-medium">PayPal</p>
                                    <p className="text-sm text-white/50">john@clipnic.com</p>
                                </div>
                            </div>
                            <Button variant="ghost" size="sm" className="text-white/50 hover:text-white">Unlink</Button>
                        </div>
                        <div className="p-4 rounded-xl border border-white/5 flex items-center justify-between opacity-50">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                    S
                                </div>
                                <div>
                                    <p className="font-medium">Stripe</p>
                                    <p className="text-sm text-white/50">Not Connected</p>
                                </div>
                            </div>
                            <Button variant="outline" size="sm">Connect</Button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
