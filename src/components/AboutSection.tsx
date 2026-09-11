"use client";

import { User, Database, Code2, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gray-50 dark:bg-[#111827] transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle floating orbs */}
      <div className="absolute top-10 -left-20 w-[350px] h-[350px] bg-blue-400/5 dark:bg-blue-500/5 blur-[100px] rounded-full pointer-events-none animate-float-slow"></div>
      <div className="absolute bottom-10 -right-20 w-[350px] h-[350px] bg-purple-400/5 dark:bg-purple-500/5 blur-[100px] rounded-full pointer-events-none animate-float-slow-reverse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal delay={100}>
          <div className="flex justify-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-semibold text-sm transition-colors duration-300 shadow-sm border border-blue-100 dark:border-blue-800/30">
              <User size={16} />
              About Me
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight transition-colors duration-300">
                Architecting Resilient Data Platforms, Backend Services & Applied AI
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                <p>
                  I am a Data Engineer, Backend Developer, and AI Engineer focused on building scalable data platforms,
                  real-time systems, and AI-powered applications. I currently manage Confluent Kafka infrastructure
                  in production for PT Pegadaian (Persero) Head Office and contribute to agentic AI solutions for the
                  Ministry of Environment.
                </p>
                <p>
                  My work spans data engineering, backend development, distributed systems, and applied AI, with a focus
                  on building reliable and production-ready solutions for real-world enterprise needs.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            
            {/* Card 1: Data Engineer (BLUE) */}
            <ScrollReveal delay={300}>
              <div 
                tabIndex={0}
                onTouchStart={() => {}}
                className="group relative overflow-hidden bg-white dark:bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl focus:shadow-xl hover:border-blue-200 focus:border-blue-200 dark:hover:border-blue-500/50 dark:focus:border-blue-500/50 hover:-translate-y-1.5 focus:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 cursor-pointer outline-none"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-400 to-blue-600 origin-left transform scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 group-focus:scale-x-100 group-focus:opacity-100 transition-all duration-500 ease-out" />
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 rounded-xl group-hover:scale-110 group-focus:scale-110 group-hover:bg-blue-500 group-focus:bg-blue-500 group-hover:text-white group-focus:text-white group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] group-focus:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">
                    <Database size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 group-focus:text-blue-600 dark:group-hover:text-blue-400 dark:group-focus:text-blue-400 transition-colors duration-300 leading-tight">
                    Data Engineer & Streaming
                  </h3>
                </div>

                <div className="h-px w-full bg-gray-100 dark:bg-slate-700/50 group-hover:bg-blue-100 group-focus:bg-blue-100 dark:group-hover:bg-blue-900/50 dark:group-focus:bg-blue-900/50 transition-colors duration-300 mb-4"></div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                  Operating mission-critical streaming pipelines, CDC replication, and high-throughput data platforms designed for reliable, low-latency processing with 24/7 fault tolerance.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2: Backend Dev (EMERALD) */}
            <ScrollReveal delay={400}>
              <div 
                tabIndex={0}
                onTouchStart={() => {}}
                className="group relative overflow-hidden bg-white dark:bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl focus:shadow-xl hover:border-emerald-200 focus:border-emerald-200 dark:hover:border-emerald-500/50 dark:focus:border-emerald-500/50 hover:-translate-y-1.5 focus:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 cursor-pointer outline-none"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-400 to-emerald-600 origin-left transform scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 group-focus:scale-x-100 group-focus:opacity-100 transition-all duration-500 ease-out" />
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20 rounded-xl group-hover:scale-110 group-focus:scale-110 group-hover:bg-emerald-500 group-focus:bg-emerald-500 group-hover:text-white group-focus:text-white group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] group-focus:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300">
                    <Code2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 group-focus:text-emerald-600 dark:group-hover:text-emerald-400 dark:group-focus:text-emerald-400 transition-colors duration-300 leading-tight">
                    Backend Dev & Microservices
                  </h3>
                </div>

                <div className="h-px w-full bg-gray-100 dark:bg-slate-700/50 group-hover:bg-emerald-100 group-focus:bg-emerald-100 dark:group-hover:bg-emerald-900/50 dark:group-focus:bg-emerald-900/50 transition-colors duration-300 mb-4"></div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                  Engineering scalable backend services, data ingestion APIs, asynchronous processing systems, and reliable microservices built for distributed Linux environment.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 3: AI Engineer (PURPLE) */}
            <ScrollReveal delay={500}>
              <div 
                tabIndex={0}
                onTouchStart={() => {}}
                className="group relative overflow-hidden bg-white dark:bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl focus:shadow-xl hover:border-purple-200 focus:border-purple-200 dark:hover:border-purple-500/50 dark:focus:border-purple-500/50 hover:-translate-y-1.5 focus:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 cursor-pointer outline-none"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-400 to-purple-600 origin-left transform scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 group-focus:scale-x-100 group-focus:opacity-100 transition-all duration-500 ease-out" />

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-500/20 rounded-xl group-hover:scale-110 group-focus:scale-110 group-hover:bg-purple-500 group-focus:bg-purple-500 group-hover:text-white group-focus:text-white group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] group-focus:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 group-focus:text-purple-600 dark:group-hover:text-purple-400 dark:group-focus:text-purple-400 transition-colors duration-300 leading-tight">
                    AI Engineer & Agentic Systems
                  </h3>
                </div>

                <div className="h-px w-full bg-gray-100 dark:bg-slate-700/50 group-hover:bg-purple-100 group-focus:bg-purple-100 dark:group-hover:bg-purple-900/50 dark:group-focus:bg-purple-900/50 transition-colors duration-300 mb-4"></div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                  Building agentic AI workflows, private document intelligence, structured extraction pipelines, and intelligent verification systems powered by LLMs and vector search.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
}