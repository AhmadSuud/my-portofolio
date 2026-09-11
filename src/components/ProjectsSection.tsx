"use client";

import { 
  FolderGit2, 
  Activity, 
  Zap, 
  Mail, 
  ChevronRight,
  MessageCircle, 
  MessageSquare,
  ShieldAlert 
} from "lucide-react";

import ScrollReveal from "./ScrollReveal";

import {
  Python,
  Fastapi,
  Kafka,
  Postgresql,
  Docker,
  ApacheFlink,
  Duckdb,
  Aws,
  AzureSqlDatabase,
  Ibm,
  Qlik,
  Confluent,
  AwsResAmazonRdsOptimizedWrites,
  Sqlalchemy,
  AwsResAmazonCloudwatchEventEventBased,
  AzureTable,
  Sqlite,
  GcpConnectors,
} from "@thesvg/react";
import React from "react";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-[#0f172a] transition-colors duration-300 overflow-hidden relative"
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes data-flow-x {
          0% { transform: translateX(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        @keyframes data-flow-y {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        .animate-data-flow-x { animation: data-flow-x 1.5s infinite linear; }
        .animate-data-flow-y { animation: data-flow-y 1.5s infinite linear; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal delay={100}>
          <div className="flex justify-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-bold text-base transition-colors duration-300 shadow-sm border border-blue-100 dark:border-blue-800/30">
              <FolderGit2 size={18} />
              Featured Projects
            </div>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-12">
          
          {/* =========================================
              Project 01: Notification Engine (BLUE)
          ========================================== */}
          <ScrollReveal delay={200}>
            <div className="group relative overflow-hidden bg-white dark:bg-slate-800/40 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300">
              
              {/* ACCENT BAR: Animasi dari Kiri ke Kanan saat Hover */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-400 to-blue-600 origin-left transform scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-500 ease-out" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
                
                <div className="lg:col-span-5 xl:col-span-6 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 text-xs font-bold rounded-lg border border-blue-100 dark:border-blue-800/50">
                      01
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
                      <Activity size={14} className="text-blue-500" /> Notifications
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Event-Driven Multi-Channel Notification Engine
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-5">
                    Distributed Systems & Event-Driven Architecture
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                    Developed an event-driven notification platform for managing, processing, and distributing notifications across multiple delivery channels. The system consists of a Service API, a Broadcaster Engine for publishing events, and a Notification Engine for consumption and delivery.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <TechTag name="Python" icon={<Python width={14} height={14} />} />
                    <TechTag name="FastAPI" icon={<Fastapi width={14} height={14} />} />
                    <TechTag name="Confluent Kafka" icon={<Kafka width={14} height={14} />} />
                    <TechTag name="PostgreSQL" icon={<Postgresql width={14} height={14} />} />
                    <TechTag name="Docker" icon={<Docker width={14} height={14} />} />
                    <TechTag name="SQLAlchemy" icon={<Sqlalchemy variant="mono" width={14} height={14} />} />
                  </div>
                </div>

                {/* VISUALISASI PIPELINE */}
                <div className="lg:col-span-7 xl:col-span-6 h-full flex items-center">
                  <AnimatedPipelineCanvas 
                    groups={[
                      { items: [{ label: "API / Data", icon: <Fastapi width={14} height={14} /> }] },
                      { items: [{ label: "Kafka", icon: <Kafka width={14} height={14} /> }] },
                      { items: [{ label: "Notif Engine", icon: <Python width={14} height={14} /> }] },
                      { items: [{ label: "Topics", icon: <Kafka width={14} height={14} /> }] },
                      { items: [{ label: "Broadcaster", icon: <Python width={14} height={14} /> }] },
                      { 
                        title: "Channels",
                        items: [
                          { label: "WA", icon: <MessageCircle size={12} className="text-emerald-400" /> },
                          { label: "Email", icon: <Mail size={12} className="text-blue-400" /> },
                          { label: "SMS", icon: <MessageSquare size={12} className="text-amber-400" /> },
                        ] 
                      },
                    ]}
                  />
                </div>

              </div>
            </div>
          </ScrollReveal>

          {/* =========================================
              Project 02: Real-Time Banking Risk (PURPLE)
          ========================================== */}
          <ScrollReveal delay={300}>
            <div className="group relative overflow-hidden bg-white dark:bg-slate-800/40 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:border-purple-200 dark:hover:border-purple-500/50 hover:-translate-y-1.5 transition-all duration-300">
              
              {/* ACCENT BAR: Animasi dari Kiri ke Kanan saat Hover */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-400 to-purple-600 origin-left transform scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-500 ease-out" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
                
                <div className="lg:col-span-5 xl:col-span-6 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="px-2.5 py-1 bg-purple-50 dark:bg-purple-900/40 text-purple-700 dark:text-purple-400 text-xs font-bold rounded-lg border border-purple-100 dark:border-purple-800/50">
                      02
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
                      <Zap size={14} className="text-purple-500" /> Banking & LLM
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    Real-Time Banking Risk Monitoring
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 text-sm font-semibold mb-5">
                    High-Throughput Streaming & AI Integration
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                    Built a high-throughput real-time streaming solution during Confluent’s Data Streaming World Tour. Developed an event-driven pipeline for banking risk monitoring using Kafka, Flink SQL, DuckDB for real-time analytics, and Amazon Bedrock for LLM decision-making.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <TechTag name="Confluent Cloud" icon={<Confluent width={14} height={14} />} />
                    <TechTag name="Flink SQL" icon={<ApacheFlink width={14} height={14} />} />
                    <TechTag name="Tableflow" icon={<AzureTable width={14} height={14} />} />
                    <TechTag name="DuckDB" icon={<Duckdb width={14} height={14} />} />
                    <TechTag name="Bedrock" icon={<Aws width={14} height={14} />} />
                  </div>
                </div>

                {/* VISUALISASI PIPELINE */}
                <div className="lg:col-span-7 xl:col-span-6 h-full flex items-center">
                  <AnimatedPipelineCanvas 
                    groups={[
                      { items: [{ label: "API/DATA", icon: <Fastapi width={14} height={14} /> }] },
                      { items: [{ label: "Kafka", icon: <Kafka width={14} height={14} /> }] },
                      { items: [{ label: "Flink SQL", icon: <ApacheFlink width={14} height={14} /> }] },
                      { items: [{ label: "DuckDB", icon: <Duckdb width={14} height={14} /> }] },
                      { items: [{ label: "Bedrock LLM", icon: <Aws width={14} height={14} /> }] },
                      { items: [{ label: "Decision", icon: <ShieldAlert size={12} className="text-red-400" /> }] },
                    ]}
                  />
                </div>

              </div>
            </div>
          </ScrollReveal>

          {/* =========================================
              Project 03: Bidirectional DB Sync (EMERALD)
          ========================================== */}
          <ScrollReveal delay={400}>
            <div className="group relative overflow-hidden bg-white dark:bg-slate-800/40 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:border-emerald-200 dark:hover:border-emerald-500/50 hover:-translate-y-1.5 transition-all duration-300">
              
              {/* ACCENT BAR: Animasi dari Kiri ke Kanan saat Hover */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-400 to-emerald-600 origin-left transform scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-500 ease-out" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
                
                <div className="lg:col-span-5 xl:col-span-6 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-lg border border-emerald-100 dark:border-emerald-800/50">
                      03
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
                      <Activity size={14} className="text-emerald-500" /> DB Sync
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    Bidirectional Database Synchronization
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-5">
                    Heterogeneous Database Engineering
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                    Engineered a near real-time bidirectional data sync pipeline between IBM DB2 and PostgreSQL. Implemented a Last-Write-Wins (LWW) strategy for conflict resolution using Qlik Replicate for CDC and Kafka for event streaming.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <TechTag name="IBM DB2" icon={<Ibm width={14} height={14} />} />
                    <TechTag name="PostgreSQL" icon={<Postgresql width={14} height={14} />} />
                    <TechTag name="Qlik CDC" icon={<Qlik width={14} height={14} />} />
                    <TechTag name="Confluent Kafka" icon={<Kafka width={14} height={14} />} />
                    <TechTag name="LWW Resolv" icon={<AwsResAmazonRdsOptimizedWrites width={14} height={14} />} />
                  </div>
                </div>

                {/* VISUALISASI PIPELINE */}
                <div className="lg:col-span-7 xl:col-span-6 h-full flex items-center">
                  <AnimatedPipelineCanvas 
                    groups={[
                      { 
                        title: "Source",
                        items: [
                          { label: "IBM DB2", icon: <Ibm width={14} height={14} /> },
                          { label: "PostgreSQL", icon: <Postgresql width={14} height={14} /> }
                        ] 
                      },
                      { items: [{ label: "Qlik CDC", icon: <Qlik width={14} height={14} /> }] },
                      { items: [{ label: "Kafka", icon: <Kafka width={14} height={14} /> }] },
                      { items: [{ label: "LWW Resolve", icon: <AwsResAmazonRdsOptimizedWrites width={14} height={14} /> }] },
                      { items: [{ label: "Sync Topic", icon: <Kafka width={14} height={14} /> }] },
                      {items: [{ label: "Connector", icon: <GcpConnectors width={14} height={14} /> }] },
                      { 
                        title: "Sink",
                        items: [
                          { label: "PostgreSQL", icon: <Postgresql width={14} height={14} /> },
                          { label: "IBM DB2", icon: <Ibm width={14} height={14} /> }
                        ] 
                      },
                    ]}
                  />
                </div>

              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

type NodeItem = { label: string; icon: React.ReactNode };
type NodeGroup = { title?: string; items: NodeItem[] };

function AnimatedPipelineCanvas({ groups }: { groups: NodeGroup[] }) {
  return (
    <div className="relative w-full min-h-[300px] md:min-h-[180px] lg:min-h-[220px] rounded-2xl bg-slate-900 dark:bg-[#0b1121] border border-slate-800 shadow-inner flex items-center overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:16px_16px] opacity-30"></div>
      
      {/* Glow Ambient di tengah */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-blue-500/20 blur-[60px] rounded-full pointer-events-none"></div>

      {/* Kontainer Pembungkus: Kunci agar sisi kiri tidak terpotong saat layar sempit (Web) */}
      <div className="relative z-10 w-full overflow-x-auto hide-scrollbar px-2 py-6">
        
        {/* Kontainer Flow: Flexbox dengan margin auto untuk centering pintar */}
        <div className="flex flex-col md:flex-row items-center w-full md:w-max m-auto justify-center gap-0 lg:gap-0">
          
          {groups.map((group, gIdx) => (
            <React.Fragment key={gIdx}>
              
              {/* Box Grup Node */}
              <div className={`relative flex flex-col items-center justify-center p-1.5 md:p-1.5 lg:p-2 bg-slate-800/40 border border-slate-700/60 rounded-xl md:rounded-2xl shrink-0 ${group.items.length > 1 ? 'border-dashed shadow-sm mt-3 md:mt-0' : 'border-transparent'}`}>
                
                {/* Judul Cabang (Opsional) */}
                {group.title && (
                  <span className="absolute -top-3 md:-top-3 bg-slate-900 px-2 py-0.5 text-[8px] md:text-[7px] lg:text-[8px] text-blue-400 font-bold tracking-wider uppercase rounded-full border border-slate-700 whitespace-nowrap z-20">
                    {group.title}
                  </span>
                )}
                
                {/* Susunan Cabang */}
                <div className={`flex items-center justify-center gap-2 lg:gap-2 ${group.items.length > 1 ? 'flex-row md:flex-col' : 'flex-col'}`}>
                  {group.items.map((node, nIdx) => (
                    <div key={nIdx} className="flex flex-col items-center gap-1 z-10">
                      {/* Kotak Ikon yang sangat kompak untuk Web */}
                      <div className="w-11 h-11 md:w-7 md:h-7 lg:w-9 lg:h-9 bg-slate-800 border border-slate-600 rounded-xl md:rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                        {node.icon}
                      </div>
                      {/* Teks label kecil tapi tajam */}
                      <span className="text-[9px] md:text-[6.5px] lg:text-[7.5px] font-semibold text-slate-300 text-center leading-tight whitespace-nowrap">
                        {node.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Garis Penghubung antar Grup & Animasi Cahaya */}
              {gIdx < groups.length - 1 && (
                <>
                  {/* Tali Versi Desktop (Menyambung Ke Kanan) */}
                  <div className="hidden md:flex items-center shrink-0 -mx-0.5 lg:mx-0">
                    <div className="relative w-3 lg:w-4 xl:w-5 h-[2px] bg-slate-700 overflow-hidden rounded-full">
                      <div 
                        className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-data-flow-x"
                        style={{ animationDelay: `${gIdx * 0.25}s` }} 
                      />
                    </div>
                    <ChevronRight size={10} className="text-slate-500 -ml-1 flex-shrink-0" />
                  </div>

                  {/* Tali Versi Mobile/HP (Menyambung Ke Bawah) */}
                  <div className="md:hidden flex flex-col items-center my-1.5 shrink-0">
                    <div className="relative h-5 w-[2px] bg-slate-700 overflow-hidden rounded-full">
                      <div 
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-data-flow-y"
                        style={{ animationDelay: `${gIdx * 0.25}s` }} 
                      />
                    </div>
                    <ChevronRight size={10} className="text-slate-500 -mt-1 rotate-90 flex-shrink-0" />
                  </div>
                </>
              )}

            </React.Fragment>
          ))}

        </div>
      </div>
    </div>
  );
}

function TechTag({
  name,
  icon,
}: {
  name: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="group/tag flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 transition-colors cursor-default shadow-sm hover:shadow">
      {icon && (
        <div className="flex items-center justify-center text-gray-700 dark:text-gray-300 transition-colors">
          {icon}
        </div>
      )}
      <span className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 group-hover/tag:text-blue-600 dark:group-hover/tag:text-blue-400 transition-colors">
        {name}
      </span>
    </div>
  );
}