import { motion } from 'framer-motion';

export const AdminDashboard = () => {
  const kpis = [
    { label: 'Active Campaigns', value: '12', change: '+2' },
    { label: 'Total Budget Allocated', value: '$143,500', change: '+$12k' },
    { label: 'Pending Payouts', value: '$8,450', change: '-$1.2k' },
    { label: 'Platform Margin', value: '15%', change: '0%' },
  ];

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
            <h1 className="text-4xl font-bold tracking-tight mb-2">Admin Dashboard</h1>
            <p className="text-white/50 text-lg">Platform metrics and health overview.</p>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => (
            <div key={idx} className="p-6 rounded-[24px] bg-[#0A0A0A] border border-white/5">
                <p className="text-sm text-white/50 mb-2 font-medium">{kpi.label}</p>
                <div className="flex items-end justify-between">
                    <p className="text-3xl font-mono tabular-metrics font-semibold">{kpi.value}</p>
                    <span className={`text-sm font-mono tabular-metrics ${kpi.change.startsWith('+') ? 'text-white' : 'text-white/40'}`}>
                        {kpi.change}
                    </span>
                </div>
            </div>
        ))}
      </div>

      {/* Placeholder Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 rounded-[24px] bg-[#0A0A0A] border border-white/5 flex flex-col h-96">
            <h3 className="text-xl font-semibold mb-6">Budget Burn Rate</h3>
            <div className="flex-1 border border-white/10 border-dashed rounded-xl flex items-center justify-center text-white/20">
                Chart Visualization
            </div>
        </div>
        <div className="p-8 rounded-[24px] bg-[#0A0A0A] border border-white/5 flex flex-col h-96">
            <h3 className="text-xl font-semibold mb-6">Top Clippers by Volume</h3>
            <div className="flex-1 border border-white/10 border-dashed rounded-xl flex items-center justify-center text-white/20">
                Leaderboard Visualization
            </div>
        </div>
      </div>
    </motion.div>
  );
};
