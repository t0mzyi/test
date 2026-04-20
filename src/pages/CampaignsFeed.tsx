import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

// Mock data
const mockCampaigns = [
  {
    id: 'c1',
    title: 'Summer Skincare Launch',
    brand: 'GlowRecipe',
    cpmRate: 0.40,
    totalBudget: 18134,
    budgetUsed: 11468.46,
    status: 'Active',
  },
  {
    id: 'c2',
    title: 'Minimalist Desk Setup',
    brand: 'Grovemade',
    cpmRate: 0.55,
    totalBudget: 5000,
    budgetUsed: 5000,
    status: 'Paused',
  },
  {
    id: 'c3',
    title: 'Tech Gadget Review',
    brand: 'MarquesBrownlee',
    cpmRate: 1.20,
    totalBudget: 25000,
    budgetUsed: 12000,
    status: 'Active',
  }
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
};

// Create a motion version of react-router Link
const MotionLink = motion.create(Link);

export const CampaignsFeed = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Active Campaigns</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockCampaigns.map((campaign) => (
          <MotionLink
            to={`/campaigns/${campaign.id}`}
            key={campaign.id}
            layoutId={`card-${campaign.id}`}
            whileHover={{ scale: 1.015, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="group relative p-6 rounded-[20px] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors cursor-pointer block"
          >
            <div className="flex items-start justify-between mb-4">
              <Badge status={campaign.status} />
              <div className="text-white/40 group-hover:text-white/80 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
            
            <div className="mb-6 mb-8">
              <p className="text-sm text-white/50 mb-1">{campaign.brand}</p>
              <h3 className="text-lg font-semibold leading-tight">{campaign.title}</h3>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/50">CPM Rate</span>
                <span className="font-mono tabular-metrics font-medium text-white">{formatCurrency(campaign.cpmRate)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/50">Budget Left</span>
                <span className="font-mono tabular-metrics font-medium text-white">{formatCurrency(campaign.totalBudget - campaign.budgetUsed)}</span>
              </div>
            </div>

            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-6">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(campaign.budgetUsed / campaign.totalBudget) * 100}%` }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white h-full"
              />
            </div>
            
            <Button variant="secondary" className="w-full mt-2">
              Join Campaign
            </Button>
          </MotionLink>
        ))}
      </div>
    </motion.div>
  );
};
