import { User, Database, Code2, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-[#111827] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-semibold text-sm transition-colors duration-300">
            <User size={16} />
            About Me
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* About Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight transition-colors duration-300">
              Architecting Resilient Data Platforms, Backend Services & Applied AI
            </h2>

            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
              <p>
                I am a Data Engineer, Backend Developer, and AI Engineer with
                hands-on experience designing and operating enterprise-grade
                data platforms and real-time streaming systems. Currently
                managing Confluent Kafka streaming infrastructure in production
                for PT Pegadaian (Persero) Head Office, and engineering
                agentic AI verification pipelines for the Ministry of
                Environment.
              </p>

              <p>
                I bridge high-throughput data processing, robust backend
                microservices, and applied AI systems across distributed Linux
                architectures. My goal is turning complex streaming data and
                LLMs into rock-solid, production-grade enterprise software.
              </p>
            </div>
          </div>

          {/* Role Cards */}
          <div className="space-y-4">
            
            {/* Card 1: Data Engineer */}
            <div className="group flex gap-5 p-6 bg-white dark:bg-slate-800/40 border border-gray-100 dark:border-slate-700/50 shadow-sm rounded-2xl hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 cursor-default">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl shadow-md group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-300">
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

            {/* Card 2: Backend Dev */}
            <div className="group flex gap-5 p-6 bg-white dark:bg-slate-800/40 border border-gray-100 dark:border-slate-700/50 shadow-sm rounded-2xl hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 cursor-default">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl shadow-md group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-300">
                <Code2 size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  Backend Dev & Microservices
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pt-1 transition-colors duration-300">
                  Engineering scalable backend services, data ingestion APIs, asynchronous processing systems, and reliable microservices built for distributed Linux environment
                </p>
              </div>
            </div>

            {/* Card 3: AI Engineer */}
            <div className="group flex gap-5 p-6 bg-white dark:bg-slate-800/40 border border-gray-100 dark:border-slate-700/50 shadow-sm rounded-2xl hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 cursor-default">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl shadow-md group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-300">
                <Sparkles size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  AI Engineer & Agentic Systems
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pt-1 transition-colors duration-300">
                  Building agentic AI workflows, private document intelligence, structured extraction pipelines, and intelligent verification systems powered by LLMs and vector search.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}