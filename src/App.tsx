import { BrowserRouter, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CampaignsFeed } from './pages/CampaignsFeed';
import { CampaignDetails } from './pages/CampaignDetails';
import { Profile } from './pages/Profile';
import { AdminDashboard } from './pages/AdminDashboard';
import { AdminCampaigns } from './pages/AdminCampaigns';
import { ClipperDashboard } from './pages/ClipperDashboard';
import { MySubmissions } from './pages/MySubmissions';

// Navigation Sidebar
const Sidebar = () => {
    const location = useLocation();
    
    return (
        <aside className="fixed left-0 top-0 h-screen w-64 border-r border-white/10 bg-black/60 backdrop-blur-xl z-50 flex flex-col px-6 py-8">
            <div className="font-bold tracking-tighter text-2xl mb-12">CLIPNIC.</div>
            
            <div className="mb-4 text-xs font-bold text-white/30 uppercase tracking-widest px-3">Clipper Portal</div>
            <nav className="flex flex-col gap-2 text-sm font-medium mb-10">
                <Link to="/dashboard" className={`transition-colors py-2 px-3 rounded-lg flex items-center gap-3 ${location.pathname === '/dashboard' ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white/90 hover:bg-white/5'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
                    Dashboard
                </Link>
                <Link to="/campaigns" className={`transition-colors py-2 px-3 rounded-lg flex items-center gap-3 ${location.pathname.startsWith('/campaigns') ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white/90 hover:bg-white/5'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M3 15h6"/><path d="M3 18h6"/><path d="M3 21h6"/></svg>
                    Browse Campaigns
                </Link>
                <Link to="/submissions" className={`transition-colors py-2 px-3 rounded-lg flex items-center gap-3 ${location.pathname.startsWith('/submissions') ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white/90 hover:bg-white/5'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                    My Submissions
                </Link>
                <Link to="/profile" className={`transition-colors py-2 px-3 rounded-lg flex items-center gap-3 ${location.pathname === '/profile' ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white/90 hover:bg-white/5'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    Profile
                </Link>
            </nav>

            <div className="mb-4 text-xs font-bold text-white/30 uppercase tracking-widest px-3">Admin Portal</div>
            <nav className="flex flex-col gap-2 text-sm font-medium flex-grow">
                <Link to="/admin" className={`transition-colors py-2 px-3 rounded-lg flex items-center gap-3 ${location.pathname === '/admin' ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white/90 hover:bg-white/5'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                    Dashboard
                </Link>
                <Link to="/admin/campaigns" className={`transition-colors py-2 px-3 rounded-lg flex items-center gap-3 ${location.pathname.startsWith('/admin/campaigns') ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white/90 hover:bg-white/5'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                    Campaigns Mgmt
                </Link>
            </nav>
        </aside>
    );
};

// Layout
const Layout = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans flex">
            <Sidebar />
            <main className="flex-1 ml-64 min-h-screen overflow-x-hidden">
               <div className="px-8 md:px-12 pt-16 pb-24 max-w-7xl mx-auto">
                   <AnimatePresence mode="wait">
                     <Routes>
                       <Route path="/" element={<Navigate to="/dashboard" replace />} />
                       <Route path="/dashboard" element={<ClipperDashboard />} />
                       <Route path="/campaigns" element={<CampaignsFeed />} />
                       <Route path="/campaigns/:id" element={<CampaignDetails />} />
                       <Route path="/submissions" element={<MySubmissions />} />
                       <Route path="/profile" element={<Profile />} />
                       <Route path="/admin" element={<AdminDashboard />} />
                       <Route path="/admin/campaigns" element={<AdminCampaigns />} />
                     </Routes>
                   </AnimatePresence>
               </div>
            </main>
        </div>
    );
};

function App() {
  return (
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
  )
}

export default App;
