import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export const MySubmissions = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12"
        >
            <div className="border-b border-white/10 pb-8">
                <h1 className="text-4xl font-bold tracking-tight mb-2">My Submissions</h1>
                <p className="text-white/50 text-lg">Track all your content submissions and their performance</p>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-6 rounded-[20px] bg-[#0A0A0A] border border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                    <p className="text-xs text-white/40 mb-2 uppercase tracking-wider font-semibold">Total Submissions</p>
                    <p className="text-3xl font-mono tabular-metrics">0</p>
                </div>
                <div className="p-6 rounded-[20px] bg-[#0A0A0A] border border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                    <p className="text-xs text-white/40 mb-2 uppercase tracking-wider font-semibold">Approved</p>
                    <p className="text-3xl font-mono tabular-metrics">0</p>
                </div>
                <div className="p-6 rounded-[20px] bg-[#0A0A0A] border border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                    <p className="text-xs text-white/40 mb-2 uppercase tracking-wider font-semibold">Total Views</p>
                    <p className="text-3xl font-mono tabular-metrics">0</p>
                </div>
                <div className="p-6 rounded-[20px] bg-white text-black shadow-[0_4px_20px_rgba(255,255,255,0.08)]">
                    <p className="text-xs text-black/50 mb-2 uppercase tracking-wider font-semibold">Total Earnings</p>
                    <p className="text-3xl font-mono tabular-metrics font-bold">$0.00</p>
                </div>
            </div>

            {/* Filters Area */}
            <div className="p-6 rounded-[20px] bg-[#0A0A0A] border border-white/5">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <input 
                        type="text" 
                        placeholder="Search submissions..." 
                        className="w-full md:w-auto flex-1 bg-black border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/30"
                    />
                    <div className="flex w-full md:w-auto items-center gap-4">
                        <select className="bg-black border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none min-w-[140px] appearance-none text-white/70">
                            <option>All Campaigns</option>
                        </select>
                        <select className="bg-black border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none min-w-[140px] appearance-none text-white/70">
                            <option>All Platforms</option>
                            <option>YouTube</option>
                            <option>TikTok</option>
                            <option>Instagram</option>
                        </select>
                        <select className="bg-black border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none min-w-[140px] appearance-none text-white/70">
                            <option>All Status</option>
                            <option>Pending</option>
                            <option>Approved</option>
                            <option>Rejected</option>
                        </select>
                        <select className="bg-black border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none min-w-[140px] appearance-none text-white/70">
                            <option>Newest First</option>
                            <option>Oldest First</option>
                            <option>Highest Views</option>
                        </select>
                    </div>
                </div>

                <div className="mt-12 text-center py-12 border-t border-white/5">
                    <div className="text-white/20 mb-4 inline-block">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
                    </div>
                    <h3 className="text-lg font-medium text-white/80 mb-2">No submissions found</h3>
                    <p className="text-sm text-white/40 mb-6">You haven't submitted any clips yet. Join a campaign to start earning.</p>
                    <Button variant="outline">Browse Campaigns</Button>
                </div>
            </div>
        </motion.div>
    );
};
