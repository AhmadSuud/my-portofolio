"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, ArrowUp } from "lucide-react";
import { Github, Linkedin, Instagram } from "@thesvg/react";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer 
        id="contact" 
        className="py-10 bg-slate-900 dark:bg-[#020617] border-t border-slate-800 transition-colors duration-300 relative"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          
          {/* Header Teks */}
          <ScrollReveal delay={100}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 transition-colors duration-300">
              Let's Build Something Together
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl text-sm leading-relaxed">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
          </ScrollReveal>

          {/* Email & Phone Contact Info */}
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 w-full sm:w-auto">
              <a 
                href="mailto:asuud2904@gmail.com" 
                className="group flex items-center justify-center gap-3 px-6 py-3 bg-slate-800/80 border border-slate-700 rounded-2xl hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900/30 text-blue-400 group-hover:scale-110 transition-transform">
                  <Mail size={16} />
                </div>
                <span className="text-sm font-semibold text-slate-300 group-hover:text-blue-400 transition-colors">
                  asuud2904@gmail.com
                </span>
              </a>

              <a 
                href="https://wa.me/6287755765950" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-center gap-3 px-6 py-3 bg-slate-800/80 border border-slate-700 rounded-2xl hover:border-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-900/30 text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone size={16} />
                </div>
                <span className="text-sm font-semibold text-slate-300 group-hover:text-emerald-400 transition-colors">
                  +62 877 5576 5950
                </span>
              </a>
            </div>
          </ScrollReveal>

          {/* Bagian Bawah: Digabung dalam satu bungkus ScrollReveal agar pasti muncul */}
          <ScrollReveal delay={300}>
            <div className="flex flex-col items-center w-full">
              {/* Social Media Links */}
              <div className="flex gap-4 mb-8">
                <a 
                  href="https://github.com/AhmadSuud" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-11 h-11 bg-slate-800/80 border border-slate-700 rounded-full hover:-translate-y-1 hover:border-gray-400 hover:shadow-[0_0_15px_rgba(156,163,175,0.2)] transition-all duration-300 group"
                  aria-label="GitHub"
                >
                  <Github width={20} height={20} className="invert opacity-80 group-hover:opacity-100 transition-opacity" />
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/ahmad-suud" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-11 h-11 bg-slate-800/80 border border-slate-700 rounded-full hover:-translate-y-1 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin width={18} height={18} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                </a>
                
                <a 
                  href="https://instagram.com/suudahmad__" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-11 h-11 bg-slate-800/80 border border-slate-700 rounded-full hover:-translate-y-1 hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram width={20} height={20} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              {/* Copyright Bar */}
              <div className="w-full pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-center items-center gap-4">
                <p className="text-slate-500 text-sm font-medium">
                  © {new Date().getFullYear()} Ahmad Su`ud. All rights reserved.
                </p>
              </div>
            </div>
          </ScrollReveal>
          
        </div>
      </footer>

      {/* Pop-up Button: Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-3.5 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300 ${
          showScrollTop 
            ? "opacity-100 translate-y-0 visible" 
            : "opacity-0 translate-y-10 invisible"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} />
      </button>
    </>
  );
}