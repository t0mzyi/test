import { motion } from 'framer-motion';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

export const CampaignDetails = () => {
  // Mock data representing exact metrics
  const stats = {
    status: 'Active',
    cpmRate: '$0.40',
    totalBudget: '$18,134',
    budgetUsed: '$11,468.46 (63%)',
    viewProgress: '28,805,919 / 45,335,000 (64%)',
    minViewsForPayout: '10,000 views',
    timeLeft: '10 days',
  };

  const progressPercentage = 64;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-4xl mx-auto space-y-12"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Summer Skincare Launch</h1>
            <Badge status={stats.status} />
          </div>
          <p className="text-lg text-white/50">GlowRecipe</p>
        </div>
        <div className="text-left md:text-right">
          <p className="text-sm text-white/40 mb-1 uppercase tracking-widest">CPM Rate</p>
          <p className="text-3xl font-mono tabular-metrics font-semibold">{stats.cpmRate}</p>
        </div>
      </div>

      {/* Metrics Layout grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-8">
            <div className="p-8 rounded-[24px] bg-[#0A0A0A] border border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <h3 className="text-xl font-semibold mb-6">Financial Overview</h3>
                <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-white/5">
                        <span className="text-white/50">Total Budget</span>
                        <span className="font-mono tabular-metrics text-lg">{stats.totalBudget}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-white/50">Budget Used</span>
                        <span className="font-mono tabular-metrics text-lg">{stats.budgetUsed}</span>
                    </div>
                </div>
            </div>

            <div className="p-8 rounded-[24px] bg-[#0A0A0A] border border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <div className="flex justify-between items-end mb-6">
                    <h3 className="text-xl font-semibold">View Progress</h3>
                    <span className="text-sm font-mono text-white/60">{stats.timeLeft} left</span>
                </div>
                
                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden mb-4">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercentage}%` }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="bg-white h-full"
                    />
                </div>
                
                <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-mono tabular-metrics text-white/80">{stats.viewProgress}</span>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <span className="text-white/50">Min. Views for Payout</span>
                    <span className="font-mono tabular-metrics">{stats.minViewsForPayout}</span>
                </div>
            </div>
        </div>

        {/* Action & Rules Zone */}
        <div className="space-y-8">
            <div className="p-8 rounded-[24px] border border-white/10 bg-black relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-2xl font-bold mb-4 relative z-10">Participate</h3>
                <p className="text-white/60 mb-8 relative z-10 leading-relaxed font-light">
                    Join this campaign by submitting your short-form links. We support YouTube Shorts, TikToks, and Instagram Reels. Payouts are calculated algorithmically based on verifiable views.
                </p>
                <Button variant="primary" size="lg" className="w-full relative z-10 text-lg py-4">
                    Join Campaign
                </Button>
            </div>

            <div className="p-8 rounded-[24px] bg-[#0A0A0A] border border-white/5">
                <h3 className="text-lg font-semibold mb-6">Rules & Guidelines</h3>
                <ul className="space-y-4 text-white/60 font-light leading-relaxed">
                    <li className="flex gap-3">
                        <span className="p-1 rounded-md bg-white/10 text-white h-fit w-fit">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                        </span>
                        Original content only. Stolen clips will result in permanent ban.
                    </li>
                    <li className="flex gap-3">
                        <span className="p-1 rounded-md bg-white/10 text-white h-fit w-fit">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                        </span>
                        Do not use bot views. Our system flags suspicious view velocity.
                    </li>
                    <li className="flex gap-3">
                        <span className="p-1 rounded-md bg-white/10 text-white h-fit w-fit">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                        </span>
                        Payouts are locked in upon campaign expiry or budget exhaustion.
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </motion.div>
  );
};
