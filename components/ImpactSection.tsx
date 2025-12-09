'use client';
import Image from 'next/image';
import { FadeIn } from './animations/FadeIn';
import { MapPin, TrendingUp, Users, Building2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const GROWTH_DATA = [
  { year: '2020', beneficiaries: 120 },
  { year: '2021', beneficiaries: 450 },
  { year: '2022', beneficiaries: 1100 },
  { year: '2023', beneficiaries: 1800 },
  { year: '2024', beneficiaries: 2500 },
];

const IMPACT_METRICS = [
  { value: "2,500+", label: "Youth Leaders Trained", icon: Users, color: "text-teal", bg: "bg-teal/10" },
  { value: "36", label: "States Covered", icon: MapPin, color: "text-gold", bg: "bg-gold/10" },
  { value: "120", label: "Civic Startups", icon: Building2, color: "text-navy", bg: "bg-navy/10" },
  { value: "40%", label: "Female Participation", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-100" },
];

export const ImpactSection = () => {
  return (
    <section className="bg-white py-24 px-6 border-t border-gray-100 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Narrative & Stats */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <FadeIn>
              <h2 className="font-serif text-4xl font-bold text-navy mb-6">
                Measurable Impact <br/>
                <span className="text-teal">Across the Nation</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Since our inception, we've been dedicated to scaling our reach. 
                From a small cohort in Abuja to a nationwide movement, our data 
                reflects our commitment to building the next generation of Nigerian leaders.
              </p>
            </FadeIn>

            <div className="grid grid-cols-2 gap-6">
              {IMPACT_METRICS.map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <FadeIn key={idx} delay={idx * 0.1} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className={`w-10 h-10 ${metric.bg} ${metric.color} rounded-full flex items-center justify-center mb-4`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-3xl font-bold text-navy mb-1">{metric.value}</div>
                    <div className="text-sm font-medium text-gray-500">{metric.label}</div>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visualizations */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Chart Card */}
            <FadeIn delay={0.2} className="bg-navy rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl">
               {/* Background Texture */}
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <TrendingUp className="w-32 h-32 text-white" />
               </div>
               
               <h3 className="text-xl font-bold mb-6 relative z-10">Annual Beneficiary Growth</h3>
               <div className="h-[200px] w-full relative z-10">
                 <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={GROWTH_DATA}>
                     <defs>
                       <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="5%" stopColor="#00A4B4" stopOpacity={0.8}/>
                         <stop offset="95%" stopColor="#00A4B4" stopOpacity={0}/>
                       </linearGradient>
                     </defs>
                     <Tooltip 
                        contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none' }}
                        itemStyle={{ color: '#0A1A44', fontWeight: 'bold' }}
                     />
                     <Area 
                        type="monotone" 
                        dataKey="beneficiaries" 
                        stroke="#00A4B4" 
                        strokeWidth={3}
                        fillOpacity={1} 
                        fill="url(#colorValue)" 
                     />
                   </AreaChart>
                 </ResponsiveContainer>
               </div>
            </FadeIn>

            {/* Map Card */}
            <FadeIn delay={0.4} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative">
               <div className="flex items-center justify-between mb-6">
                 <div>
                    <h3 className="text-xl font-bold text-navy">National Reach</h3>
                    <p className="text-sm text-gray-500">Active hubs in all 6 geopolitical zones</p>
                 </div>
                 <span className="bg-gold/20 text-navy text-xs font-bold px-3 py-1 rounded-full border border-gold/50">
                    Pan-Nigeria
                 </span>
               </div>
               
               <div className="relative w-full aspect-[2/1] max-w-lg mx-auto">
                  <Image 
                    src="/nigeria_map.svg" 
                    alt="Nigeria Map" 
                    fill
                    className="object-contain opacity-80"
                  />
               
                  {/* Animated Pins */}
                  {[
                    { top: '25%', left: '30%', delay: '0' },   // NW
                    { top: '25%', left: '70%', delay: '100' }, // NE
                    { top: '48%', left: '45%', delay: '200' }, // NC
                    { top: '65%', left: '25%', delay: '300' }, // SW
                    { top: '70%', left: '48%', delay: '500' }, // SE
                    { top: '77%', left: '40%', delay: '700' }, // SS
                  ].map((pos, i) => (
                    <div 
                        key={i}
                        className={`absolute text-gold animate-bounce`}
                        style={{ top: pos.top, left: pos.left, animationDelay: `${pos.delay}ms` }}
                    >
                        <MapPin className="h-6 w-6 fill-current drop-shadow-md" />
                    </div>
                  ))}
               </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
};
