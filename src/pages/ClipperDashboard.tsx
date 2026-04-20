import { motion } from 'framer-motion';

export const ClipperDashboard = () => {
    const stats = {
        campaignsParticipated: '2',
        totalSubmissions: '14',
        approved: '11',
        totalEarnings: '$382.50'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12"
        >
            <div className="flex items-end justify-between border-b border-white/10 pb-8">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight mb-2">Welcome Back.</h1>
                    <p className="text-white/50 text-lg">Your activity at a glance.</p>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-8 rounded-[24px] bg-[#0A0A0A] border border-white/5 flex flex-col justify-between h-48">
                    <p className="text-white/50 text-sm font-medium uppercase tracking-widest">Active Campaigns</p>
                    <p className="text-5xl font-mono tabular-metrics font-semibold">{stats.campaignsParticipated}</p>
                </div>
                <div className="p-8 rounded-[24px] bg-[#0A0A0A] border border-white/5 flex flex-col justify-between h-48">
                    <p className="text-white/50 text-sm font-medium uppercase tracking-widest">Total Clips</p>
                    <p className="text-5xl font-mono tabular-metrics font-semibold">{stats.totalSubmissions}</p>
                </div>
                <div className="p-8 rounded-[24px] bg-[#0A0A0A] border border-white/5 flex flex-col justify-between h-48">
                    <p className="text-white/50 text-sm font-medium uppercase tracking-widest">Approved</p>
                    <p className="text-5xl font-mono tabular-metrics font-semibold">{stats.approved}</p>
                </div>
                <div className="p-8 rounded-[24px] bg-white text-black flex flex-col justify-between h-48">
                    <p className="text-black/60 text-sm font-medium uppercase tracking-widest">Earnings</p>
                    <p className="text-5xl font-mono tabular-metrics font-bold">{stats.totalEarnings}</p>
                </div>
            </div>

            {/* Quick Actions / Activity Stub */}
            <div className="p-8 rounded-[24px] bg-[#0A0A0A] border border-white/5">
                <h3 className="text-xl font-semibold mb-2">Recent Activity</h3>
                <p className="text-white/40">No recent submissions to display.</p>
            </div>
        </motion.div>
    );
};
