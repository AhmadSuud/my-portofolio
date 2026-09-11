import { Database, Code2, Sparkles, ArrowDown, Mail } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-[#0f172a] transition-colors duration-300"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Decorative Blur Orbs (Ambient Glow) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 dark:bg-blue-500/5 blur-[120px] rounded-full pointer-events-none transition-colors duration-700"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-8">
        
        {/* Availability Badge */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-slate-700/50 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm shadow-sm hover:border-blue-200 dark:hover:border-blue-500/50 transition-colors duration-300 cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for High-Impact Engineering Roles</span>
        </div>

        {/* Name Title */}
        <div className="relative">
          <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300 drop-shadow-sm">
            Ahmad Su`ud
          </h1>
        </div>

        {/* Role Tags */}
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 flex flex-wrap justify-center items-center gap-4 text-gray-600 dark:text-gray-400 font-medium text-base md:text-lg transition-colors duration-300">
          <span className="group flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default">
            <Database size={18} className="text-blue-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all" /> 
            Data Engineer
          </span>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
          <span className="group flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-default">
            <Code2 size={18} className="text-indigo-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.6)] transition-all" /> 
            Backend Engineer
          </span>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
          <span className="group flex items-center gap-1.5 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-default">
            <Sparkles size={18} className="text-purple-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] transition-all" /> 
            AI Engineer
          </span>
        </div>

        {/* Description */}
        <p className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 max-w-2xl text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed transition-colors duration-300">
          Building scalable data platforms, real-time streaming pipelines, and applied AI solutions from production grade Confluent Kafka and Apache Spark systems to LLM-powered applications.
        </p>

        {/* Action Buttons */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 flex flex-col sm:flex-row items-center gap-4 pt-4">
          <Link 
            href="#projects"
            className="group flex items-center gap-2 px-8 py-3.5 bg-[#0f172a] dark:bg-white text-white dark:text-slate-900 rounded-2xl font-semibold hover:bg-blue-600 dark:hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/25 dark:shadow-none"
          >
            View Projects
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </Link>
          
          <Link 
            href="#contact"
            className="group flex items-center gap-2 px-8 py-3.5 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm text-slate-900 dark:text-white border border-gray-200 dark:border-slate-700/50 rounded-2xl font-medium hover:bg-gray-50 dark:hover:bg-slate-800 hover:border-blue-200 dark:hover:border-blue-500/50 transition-all hover:scale-105 active:scale-95"
          >
            <Mail size={18} className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}