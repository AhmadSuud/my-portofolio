"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ 
  children, 
  delay = 0 
}: { 
  children: React.ReactNode;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Jika elemen masuk ke layar, ubah jadi true, lalu HENTIKAN observasi
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current); // <--- Kunci agar tidak hilang saat scroll ke atas
          }
        }
      },
      {
        rootMargin: "0px 0px -50px 0px", // Memicu animasi saat 50px masuk layar
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      {children}
    </div>
  );
}