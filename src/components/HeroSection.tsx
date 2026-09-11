"use client";

import { Database, Code2, Sparkles, ArrowDown, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  // Efek parallax ringan
  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-[#0f172a] transition-colors duration-300"
    >
      {/* =========================================
          1. KUSTOM ANIMASI CSS (Cahaya & Gradasi)
      ========================================== */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Animasi bentuk cahaya yang bergerak meliuk-liuk seperti lava lamp/aurora */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.1); }
          66% { transform: translate(-40px, 30px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        /* Animasi kilauan cahaya berjalan pada teks */
        @keyframes text-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        /* Efek pulse shadow untuk tombol */
        @keyframes shadow-pulse {
          0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
          70% { box-shadow: 0 0 0 20px rgba(59, 130, 246, 0); }
          100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }
        .animate-blob { animation: blob 10s infinite alternate ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}} />

      {/* Background Dot Matrix Pattern (Masking halus) */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] dark:opacity-[0.05] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] z-0"></div>

      {/* =========================================
          2. DYNAMIC AURORA GLOWS (Bayangan Cahaya)
      ========================================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
        {/* Glow Biru Kiri */}
        <div className="absolute top-1/4 -left-10 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
        {/* Glow Ungu Kanan Atas */}
        <div className="absolute top-1/4 -right-10 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
        {/* Glow Indigo Bawah Tengah */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/20 dark:bg-indigo-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      {/* =========================================
          3. MAIN CONTENT (Konten Utama)
      ========================================== */}
      <div 
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-8"
        style={{ transform: isMounted ? `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)` : 'none', transition: 'transform 0.1s ease-out' }}
      >
        
        {/* Availability Badge (Dilengkapi Glow Border yang berkedip halus) */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-blue-200/50 dark:border-blue-500/30 bg-white/60 dark:bg-slate-900/50 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-500 cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
          </span>
          <span className="text-xs md:text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200">
            Available for High-Impact Roles
          </span>
        </div>

        {/* Name Title (ANIMATED SHIMMERING TEXT) */}
        <div className="relative">
          {/* Cahaya di belakang teks (Text Glow) */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-2xl rounded-full opacity-0 md:opacity-50 dark:opacity-40"></div>
          
          <h1 className="relative animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150 text-6xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tight pb-2">
            {/* Teks dengan gradasi dan kilauan yang bergerak */}
            <span className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#0f172a,45%,#3b82f6,55%,#0f172a)] dark:bg-[linear-gradient(110deg,#ffffff,45%,#60a5fa,55%,#ffffff)] bg-[length:200%_auto] animate-[text-shimmer_4s_linear_infinite]">
              Ahmad Su`ud
            </span>
          </h1>
        </div>

        {/* Role Tags (Dengan efek melayang ringan) */}
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 flex flex-wrap justify-center items-center gap-5 text-gray-700 dark:text-gray-300 font-semibold text-base md:text-lg lg:text-xl transition-colors duration-300">
          <span className="group flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 transition-all cursor-default">
            <Database size={20} className="text-blue-500 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] transition-all" /> 
            Data Engineer
          </span>
          <span className="hidden sm:inline text-gray-300 dark:text-slate-700">•</span>
          <span className="group flex items-center gap-2 hover:text-emerald-600 dark:hover:text-emerald-400 hover:-translate-y-1 transition-all cursor-default">
            <Code2 size={20} className="text-emerald-500 group-hover:drop-shadow-[0_0_12px_rgba(16,185,129,0.8)] transition-all" /> 
            Backend Dev
          </span>
          <span className="hidden sm:inline text-gray-300 dark:text-slate-700">•</span>
          <span className="group flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 hover:-translate-y-1 transition-all cursor-default">
            <Sparkles size={20} className="text-purple-500 group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.8)] transition-all" /> 
            AI Engineer
          </span>
        </div>

        {/* Description */}
        <p className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium transition-colors duration-300 z-10">
          Building scalable data platforms, real-time streaming pipelines, and applied AI solutions from production grade Confluent Kafka and Apache Spark systems to LLM-powered applications.
        </p>

        {/* Action Buttons */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 flex flex-col sm:flex-row items-center gap-5 pt-6 z-20">
          {/* Primary Button dengan efek animasi denyut bayangan (Pulse Shadow) */}
          <Link 
            href="#projects"
            className="group relative flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all hover:scale-105 active:scale-95"
            style={{ animation: 'shadow-pulse 2s infinite' }}
          >
            <span>View Projects</span>
            <div className="bg-white/20 p-1 rounded-full group-hover:bg-white group-hover:text-blue-600 transition-colors">
              <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </div>
          </Link>
          
          {/* Secondary Button Glassmorphism */}
          <Link 
            href="#contact"
            className="group flex items-center gap-3 px-8 py-4 bg-white/50 dark:bg-slate-800/30 backdrop-blur-xl text-slate-900 dark:text-white border border-gray-200 dark:border-slate-700 rounded-full font-bold hover:bg-white dark:hover:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all hover:scale-105 active:scale-95"
          >
            <Mail size={18} className="text-blue-500 group-hover:scale-110 transition-transform" />
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}