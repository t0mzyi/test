import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';

export const Profile = () => {
    // Mock user stats
    const stats = {
        totalClips: '14',
        totalViews: '2,405,110',
        currentBalance: '$382.50',
    };

    // Modal state
    const [isVerifyOpen, setIsVerifyOpen] = useState(false);
    const [verifyStep, setVerifyStep] = useState<1 | 2>(1);
    
    // Discord state
    const [discordUser, setDiscordUser] = useState('');
    
    // Social state
    const [selectedSocial, setSelectedSocial] = useState('');
    const [socialUser, setSocialUser] = useState('');
    const [showCode, setShowCode] = useState(false);
    const verifyCode = "CLPNIC-8XJ9K2";

    return (
        <>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
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

                    <div className="space-y-10">
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold flex items-center gap-2">
                                    Verification Status
                                </h3>
                                <div 
                                    onClick={() => { setVerifyStep(1); setShowCode(false); setIsVerifyOpen(true); }}
                                    className="cursor-pointer text-xs font-mono font-medium rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white px-3 py-1 ml-2 flex items-center gap-2"
                                >
                                    Unverified
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                </div>
                            </div>
                            <div className="p-6 rounded-[20px] bg-[#0A0A0A] border border-white/10 border-dashed flex flex-col items-center justify-center text-center">
                                <p className="text-white/40 text-sm mb-4">You must complete your platform verification before joining premium campaigns.</p>
                                <Button variant="outline" size="sm" onClick={() => { setVerifyStep(1); setShowCode(false); setIsVerifyOpen(true); }}>
                                    Start Verification
                                </Button>
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
                </div>
            </motion.div>

            {/* Verification Modal overlay */}
            <AnimatePresence>
                {isVerifyOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    >
                        <motion.div 
                            initial={{ y: 24, scale: 0.95 }}
                            animate={{ y: 0, scale: 1 }}
                            exit={{ y: 24, scale: 0.95, opacity: 0 }}
                            className="bg-[#0A0A0A] border border-white/10 rounded-[24px] p-8 max-w-md w-full relative"
                        >
                            <button 
                                onClick={() => setIsVerifyOpen(false)}
                                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </button>
                            
                            {verifyStep === 1 ? (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold">Step 1: Join Discord</h2>
                                    <p className="text-white/60 text-sm">Join our official server to stay updated on campaigns, then enter your username below to authenticate.</p>
                                    
                                    <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12v-3l5 3-5 3v-3Z"/><circle cx="12" cy="12" r="10"/></svg>
                                        Join Discord Server
                                    </Button>

                                    <div className="space-y-4 pt-4 border-t border-white/10 mt-6 text-left w-full">
                                        <div>
                                            <label className="block text-sm text-white/50 mb-2">Discord Username</label>
                                            <input 
                                                type="text" 
                                                placeholder="e.g. clipper_john#1234"
                                                value={discordUser}
                                                onChange={(e) => setDiscordUser(e.target.value)}
                                                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" 
                                            />
                                        </div>
                                        <Button 
                                            variant="primary" 
                                            className="w-full"
                                            onClick={() => setVerifyStep(2)}
                                        >
                                            Verify Discord
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold">Step 2: Add Your Socials</h2>
                                    <p className="text-white/60 text-sm">Select a platform below to authenticate your main account. This is the account where your submissions will be monitored.</p>
                                    
                                    <div>
                                        <label className="block text-sm text-white/50 mb-2">Platform</label>
                                        <select 
                                            value={selectedSocial}
                                            onChange={(e) => {
                                                setSelectedSocial(e.target.value);
                                                setShowCode(false);
                                            }}
                                            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none"
                                        >
                                            <option value="" disabled>Select a platform</option>
                                            <option value="youtube">YouTube</option>
                                            <option value="instagram">Instagram</option>
                                            <option value="tiktok">TikTok</option>
                                        </select>
                                    </div>

                                    {selectedSocial && !showCode && (
                                        <div className="space-y-4 pt-4 animate-in fade-in">
                                            <div>
                                                <label className="block text-sm text-white/50 mb-2">{selectedSocial.charAt(0).toUpperCase() + selectedSocial.slice(1)} Username</label>
                                                <input 
                                                    type="text" 
                                                    placeholder="Enter username/handle"
                                                    value={socialUser}
                                                    onChange={(e) => setSocialUser(e.target.value)}
                                                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" 
                                                />
                                            </div>
                                            <Button 
                                                variant="secondary" 
                                                className="w-full"
                                                onClick={() => setShowCode(true)}
                                            >
                                                Add Account
                                            </Button>
                                        </div>
                                    )}

                                    {showCode && (
                                        <div className="space-y-4 pt-4 border-t border-white/10 animate-in fade-in slide-in-from-bottom-2">
                                            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                                                <p className="text-sm text-white/60 mb-2">Add this code to your {selectedSocial.charAt(0).toUpperCase() + selectedSocial.slice(1)} channel description / bio:</p>
                                                <p className="font-mono text-xl tracking-widest font-bold text-white selection:bg-white selection:text-black block bg-black border border-white/20 p-3 rounded-lg">{verifyCode}</p>
                                            </div>
                                            <Button 
                                                variant="primary" 
                                                className="w-full"
                                                onClick={() => {
                                                    alert("Verification submitted! Pending review.");
                                                    setIsVerifyOpen(false);
                                                }}
                                            >
                                                Complete Verification
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
