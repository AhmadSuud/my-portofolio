import { User, Database, Code2, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-[#111827] transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal delay={100}>
          <div className="flex justify-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-semibold text-sm transition-colors duration-300">
              <User size={16} />
              About Me
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* About Text */}
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

          {/* Role Cards */}
          <div className="space-y-4">
            
            {/* Card 1: Data Engineer */}
            <ScrollReveal delay={300}>
              <div className="group flex gap-5 p-6 bg-white dark:bg-slate-800/40 border border-gray-100 dark:border-slate-700/50 shadow-sm rounded-2xl hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 cursor-default">
                
                {/* ICON BOX: Glassmorphism effect */}
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 rounded-xl group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">
                  <Database size={24} />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Data Engineer & Streaming
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pt-1 transition-colors duration-300">
                    Operating mission-critical streaming pipelines, CDC replication, and high-throughput data platforms designed for reliable, low-latency processing with 24/7 fault tolerance.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Backend Dev */}
            <ScrollReveal delay={400}>
              <div className="group flex gap-5 p-6 bg-white dark:bg-slate-800/40 border border-gray-100 dark:border-slate-700/50 shadow-sm rounded-2xl hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-500/50 hover:-translate-y-1.5 transition-all duration-300 cursor-default">
                
                {/* ICON BOX: Glassmorphism effect Indigo */}
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20 rounded-xl group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300">
                  <Code2 size={24} />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    Backend Dev & Microservices
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pt-1 transition-colors duration-300">
                    Engineering scalable backend services, data ingestion APIs, asynchronous processing systems, and reliable microservices built for distributed Linux environment
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: AI Engineer */}
            <ScrollReveal delay={500}>
              <div className="group flex gap-5 p-6 bg-white dark:bg-slate-800/40 border border-gray-100 dark:border-slate-700/50 shadow-sm rounded-2xl hover:shadow-xl hover:border-purple-200 dark:hover:border-purple-500/50 hover:-translate-y-1.5 transition-all duration-300 cursor-default">
                
                {/* ICON BOX: Glassmorphism effect Purple */}
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-500/20 rounded-xl group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300">
                  <Sparkles size={24} />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    AI Engineer & Agentic Systems
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pt-1 transition-colors duration-300">
                    Building agentic AI workflows, private document intelligence, structured extraction pipelines, and intelligent verification systems powered by LLMs and vector search.
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
}