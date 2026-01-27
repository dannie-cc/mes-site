import React from 'react';
import { Activity, Layers, Cpu, Settings, BarChart3, CheckCircle2, ArrowRight, Box, Zap, ShieldCheck } from 'lucide-react';

// --- Components ---

const Navbar = () => (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">G</div>
                    <span className="text-xl font-bold text-gray-900">GRVT MES</span>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#features" className="text-gray-600 hover:text-blue-600 transition">
                        Features
                    </a>
                    <a href="#architecture" className="text-gray-600 hover:text-blue-600 transition">
                        Architecture
                    </a>
                    <a href="#roadmap" className="text-gray-600 hover:text-blue-600 transition">
                        Roadmap
                    </a>
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
                        Get Started Free
                    </button>
                </div>
            </div>
        </div>
    </nav>
);

const Hero = () => (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 border border-blue-100">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Now Available: Phase 1 Foundation
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
                The Lightweight MES for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Agile Factories</span>
            </h1>
            <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto mb-10">
                A cloud-based Manufacturing Execution System designed for SMEs. Start production in minutes—<strong>no ERP required.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-600/20 w-full sm:w-auto flex items-center justify-center gap-2">
                    Start Manufacturing <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-lg font-bold text-lg hover:bg-gray-50 transition w-full sm:w-auto">
                    View Architecture
                </button>
            </div>

            {/* Abstract Dashboard Placeholder */}
            <div className="mt-16 relative mx-auto max-w-5xl rounded-xl bg-gray-900 shadow-2xl overflow-hidden border border-gray-800 aspect-[16/9] group">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950 opacity-50"></div>
                {/* Mock UI Elements representing the Live Dashboard  */}
                <div className="relative p-6 h-full flex flex-col">
                    <div className="flex justify-between items-center mb-8 border-b border-gray-700 pb-4">
                        <div className="text-white font-semibold flex items-center gap-2">
                            <Activity size={18} className="text-green-400" /> Live Production Monitor
                        </div>
                        <div className="flex gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 flex-1">
                        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 animate-pulse">
                            <div className="text-gray-400 text-xs uppercase mb-2">CNC Machine 01</div>
                            <div className="text-2xl text-white font-mono">RUNNING</div>
                            <div className="mt-2 text-green-400 text-sm">OEE: 92%</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                            <div className="text-gray-400 text-xs uppercase mb-2">Assembly Line A</div>
                            <div className="text-2xl text-white font-mono">IDLE</div>
                            <div className="mt-2 text-yellow-400 text-sm">Waiting for Materials</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                            <div className="text-gray-400 text-xs uppercase mb-2">Active Work Orders</div>
                            <div className="text-2xl text-white font-mono">14</div>
                            <div className="mt-2 text-blue-400 text-sm">On Schedule</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
        </div>
    </section>
);

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
);

const Features = () => (
    <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Core Capabilities</h2>
                <p className="mt-4 text-xl text-gray-500">Everything you need to execute production, strictly following ISA-95.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard icon={Settings} title="Standalone Mode" desc="No ERP? No problem. Manage products, BOMs, and work orders directly within GRVT MES. [cite: 30]" />
                <FeatureCard icon={Layers} title="BOM Management" desc="Import Excel BOMs, manage revisions, and validate data before it hits the floor. [cite: 167]" />
                <FeatureCard icon={Activity} title="Real-time Execution" desc="Track WIP, start/stop jobs, and report scrap with transactional integrity. [cite: 207]" />
                <FeatureCard icon={Zap} title="Machine Registry" desc="Register assets and monitor live status via WebSocket-driven updates. [cite: 152]" />
                <FeatureCard icon={ShieldCheck} title="Data Sovereignty" desc="GRVT owns operational data (genealogy, quality results) ensuring audit readiness. [cite: 18]" />
                <FeatureCard icon={BarChart3} title="Live Dashboard" desc="Real-time visibility into machine status, active orders, and production counters. " />
            </div>
        </div>
    </section>
);

const TechStack = () => (
    <section className="py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-lg font-semibold text-gray-500 mb-8 uppercase tracking-widest">Built on Modern Architecture [cite: 39]</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Text representation of logos for the code snippet */}
                <div className="flex items-center gap-2 text-2xl font-bold text-blue-600">
                    <div className="p-2 bg-blue-100 rounded">TS</div> TypeScript
                </div>
                <div className="flex items-center gap-2 text-2xl font-bold text-red-600">
                    <div className="p-2 bg-red-100 rounded">N</div> NestJS
                </div>
                <div className="flex items-center gap-2 text-2xl font-bold text-cyan-500">
                    <div className="p-2 bg-cyan-100 rounded">R</div> React
                </div>
                <div className="flex items-center gap-2 text-2xl font-bold text-blue-800">
                    <div className="p-2 bg-blue-100 rounded">PG</div> PostgreSQL
                </div>
                <div className="flex items-center gap-2 text-2xl font-bold text-red-500">
                    <div className="p-2 bg-red-100 rounded">Re</div> Redis
                </div>
            </div>
        </div>
    </section>
);

const Architecture = () => (
    <section id="architecture" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                        ISA-95 Compliant. <br />
                        <span className="text-blue-600">ERP Agnostic.</span>
                    </h2>
                    <p className="text-lg text-gray-500 mb-6">
                        GRVT MES operates strictly at <strong>Level 3 (MOM)</strong>. It accepts inputs from Level 4 (ERP) but doesn't depend on them.
                    </p>

                    <ul className="space-y-4 mb-8">
                        {[
                            'Modular Monolith for speed & data integrity [cite: 9]',
                            'ERP Integration is a Plugin, not a dependency [cite: 25]',
                            'Direct Machine Communication via MQTT [cite: 71]',
                            'No direct SQL access between domains [cite: 36]',
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Simplified Architecture Diagram */}
                <div className="mt-12 lg:mt-0 relative">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 relative z-10 shadow-2xl">
                        {/* Level 4 */}
                        <div className="border-2 border-dashed border-orange-200 bg-orange-50 rounded-lg p-4 mb-4 text-center">
                            <div className="text-orange-800 font-bold text-sm mb-1">LEVEL 4: ERP / Planning</div>
                            <div className="text-orange-600 text-xs">Optional Input: BOMs, Work Orders</div>
                        </div>

                        {/* Level 3 - The Core */}
                        <div className="bg-blue-600 rounded-lg p-6 text-center shadow-lg relative overflow-hidden group">
                            <div className="relative z-10">
                                <div className="text-white font-bold text-lg mb-2">LEVEL 3: GRVT MES</div>
                                <div className="grid grid-cols-2 gap-2 text-xs">
                                    <div className="bg-blue-500/50 p-2 rounded text-white">Production Execution</div>
                                    <div className="bg-blue-500/50 p-2 rounded text-white">Traceability</div>
                                    <div className="bg-blue-500/50 p-2 rounded text-white">Quality Gates</div>
                                    <div className="bg-blue-500/50 p-2 rounded text-white">Material Usage</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center my-2">
                            <ArrowRight className="rotate-90 text-gray-400" />
                        </div>

                        {/* Level 2/1/0 */}
                        <div className="bg-gray-800 rounded-lg p-4 text-center">
                            <div className="text-gray-300 font-bold text-sm mb-2">LEVEL 0-2: Shop Floor</div>
                            <div className="flex justify-center gap-4">
                                <div className="h-8 w-8 bg-gray-700 rounded flex items-center justify-center">
                                    <Cpu size={16} className="text-green-400" />
                                </div>
                                <div className="h-8 w-8 bg-gray-700 rounded flex items-center justify-center">
                                    <Box size={16} className="text-yellow-400" />
                                </div>
                                <div className="h-8 w-8 bg-gray-700 rounded flex items-center justify-center">
                                    <Activity size={16} className="text-red-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Decoration */}
                    <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-100 rounded-xl -z-10"></div>
                </div>
            </div>
        </div>
    </section>
);

const Roadmap = () => (
    <section id="roadmap" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900">Functional Roadmap</h2>
                <p className="mt-4 text-gray-500">A clear path from manual entry to full automation[cite: 117].</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
                {[
                    {
                        phase: 'Phase 1',
                        title: 'Foundation',
                        items: ['User & Factory Mgmt', 'BOM Import', 'Manual Execution', 'Dashboard'],
                        active: true,
                    },
                    {
                        phase: 'Phase 2',
                        title: 'Connectivity',
                        items: ['MQTT Events', 'Traceability', 'Material Tracking', 'Cycle Counts'],
                        active: false,
                    },
                    {
                        phase: 'Phase 3',
                        title: 'Quality',
                        items: ['Quality Gates', 'Pass/Fail Checks', 'Defect Codes', 'Hold Logic'],
                        active: false,
                    },
                    {
                        phase: 'Phase 4',
                        title: 'Scale',
                        items: ['Telemetry (ClickHouse)', 'Deep Analytics', 'Performance KPIs', 'Extensions'],
                        active: false,
                    },
                ].map((item, idx) => (
                    <div key={idx} className={`relative p-6 rounded-xl border ${item.active ? 'bg-white border-blue-200 shadow-xl' : 'bg-gray-100 border-gray-200 opacity-70'}`}>
                        <div className="text-xs font-bold tracking-wider uppercase mb-2 text-gray-500">{item.phase}</div>
                        <h3 className={`text-xl font-bold mb-4 ${item.active ? 'text-blue-600' : 'text-gray-700'}`}>{item.title}</h3>
                        <ul className="space-y-2">
                            {item.items.map((feat, i) => (
                                <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                                    <div className={`w-1.5 h-1.5 rounded-full ${item.active ? 'bg-blue-400' : 'bg-gray-400'}`}></div>
                                    {feat}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">G</div>
                    <span className="text-lg font-bold text-white">GRVT MES</span>
                </div>
                <p className="max-w-xs text-sm">A modular, cloud-based MES for the modern factory. Free to use at its core. Built for speed and integrity.</p>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4">Product</h4>
                <ul className="space-y-2 text-sm">
                    <li>
                        <a href="#" className="hover:text-blue-400">
                            Features
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-400">
                            Architecture
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-400">
                            Roadmap
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4">Connect</h4>
                <ul className="space-y-2 text-sm">
                    <li>
                        <a href="#" className="hover:text-blue-400">
                            Documentation
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-400">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-400">
                            Contact Sales
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-xs text-center">© {new Date().getFullYear()} GRVT MES. All rights reserved.</div>
    </footer>
);

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <Navbar />
            <Hero />
            <TechStack />
            <Features />
            <Architecture />
            <Roadmap />

            {/* CTA Section */}
            <section className="py-24 bg-blue-600 text-center px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Digitize Your Floor?</h2>
                <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10">Join the platform that grows with you. Free for Phase 1 features.</p>
                <button className="px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl">Create Free Account</button>
            </section>

            <Footer />
        </div>
    );
}
