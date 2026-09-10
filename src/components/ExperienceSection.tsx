import { Briefcase, Check, Info, Server } from "lucide-react";
import Image from "next/image";

import {
  RedhatIcon,
  N8nIcon,
  OllamaIcon,
  KafkaIcon,
  Python,
  Javascript,
  Postgresql,
  Sqlite,
  DockerIcon,
  BashIcon,
  SupabaseIcon,
  MicrosoftWindowsIcon,
  Ubuntu,
  FastapiIcon,
  Qlik,
  Bash,
} from "@dev.icons/react";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 bg-white dark:bg-[#0f172a] transition-colors duration-300"
    >
      {/* Wadah diperlebar menjadi max-w-7xl agar kartu Kiri-Kanan tidak memanjang ke bawah */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-semibold text-sm transition-colors duration-300">
            <Briefcase size={16} />
            Experience
          </div>
        </div>

        {/* Company Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-20">
          <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-[#0f172a] dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-xl border border-slate-800 dark:border-slate-700/50 p-4 overflow-hidden transition-colors duration-300">
            <Image 
              src="/logos/sid.png" 
              alt="SID Logo" 
              width={80} 
              height={80} 
              className="object-contain w-full h-full"
            />
          </div>

          <div>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                PT Sibernetik Integra Data
              </h3>

              <span className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-full border border-gray-200 dark:border-slate-700">
                Organization
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 font-medium text-sm md:text-base">
              Data Engineer • Backend Dev • AI Engineer
              <span className="mx-3 text-gray-300 dark:text-gray-600">|</span>
              Full-time
            </p>
          </div>
        </div>

        {/* Timeline Container (Alternating Chat Style) */}
        <div className="relative py-4 w-full">

          {/* Garis Tengah: Kiri di Mobile, Tengah di Desktop */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-slate-800 -translate-x-1/2 z-0" />

          {/* =========================================================
              Experience 1: KLHK (Kanan / Right Side di Desktop)
          ========================================================== */}
          <div className="relative flex justify-end w-full group cursor-default mb-16 md:mb-20">

            {/* Timeline Dot (Ditambahkan efek Glow dan Scale seperti di Skills) */}
            <div className="absolute left-6 md:left-1/2 top-10 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-gray-200 dark:bg-slate-700 border-4 border-white dark:border-[#0f172a] group-hover:bg-blue-500 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300 -translate-x-1/2 z-10" />

            <div className="w-full pl-16 md:pl-12 lg:pl-16 md:w-1/2">
              {/* Card Body (Ditambahkan border hover dan efek angkat ke atas) */}
              <div className="bg-white dark:bg-slate-800/40 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 dark:border-slate-700/50 shadow-sm group-hover:shadow-xl group-hover:border-blue-200 dark:group-hover:border-blue-500/50 group-hover:-translate-y-1.5 transition-all duration-300">

                {/* Header */}
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex-shrink-0 flex items-center justify-center bg-white rounded-full p-1.5 border border-gray-200 dark:border-slate-600 shadow-sm w-12 h-12">
                      <Image 
                        src="/logos/klhk.png" 
                        alt="KLHK Logo" 
                        width={36} 
                        height={36} 
                        className="object-contain rounded-full w-full h-full"
                      />
                    </div>
                    <span className="font-bold text-slate-800 dark:text-slate-100 tracking-wide">
                      KEMENTERIAN LINGKUNGAN HIDUP
                    </span>
                  </div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    May 2026 – Present
                  </div>
                </div>

                <div className="mb-5">
                  <span className="inline-flex px-2 py-0.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold rounded-full border border-emerald-100 dark:border-emerald-500/20">
                    Active Engagement
                  </span>
                </div>

                {/* Role (Ditambahkan efek teks berubah biru) */}
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  PIC Backend & AI Engineer
                </h4>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  Leading agentic AI workflows and automated environmental
                  document verification systems leveraging n8n, local LLM
                  setups, and custom backend services.
                </p>

                {/* Responsibilities */}
                <ul className="space-y-3 mb-8">
                  {[
                    "Architected and deployed agentic AI verification agents using n8n workflows and local Ollama model instances for high-throughput private document processing.",
                    "Developed robust Python (FastAPI) and JavaScript backend microservices integrating AI pipelines for structured NLP extraction and validation.",
                    "Engineered validation benchmarks and structured data management using PostgreSQL, Supabase, and SQLite ensuring audit-ready document verification accuracy on Windows and Linux servers.",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                    >
                      <Check size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  <TechTag name="Python" customIcon={<Python width={16} height={16} />} />
                  <TechTag name="JavaScript" customIcon={<Javascript width={16} height={16} />} />
                  <TechTag name="FastAPI" customIcon={<FastapiIcon width={16} height={16} />} color="#009688" />
                  <TechTag name="PostgreSQL" customIcon={<Postgresql width={16} height={16} />} />
                  <TechTag name="Supabase" customIcon={<SupabaseIcon width={16} height={16} />} color="#3ECF8E" />
                  <TechTag name="SQLite" customIcon={<Sqlite width={16} height={16} />} />
                  <TechTag name="Windows Server" customIcon={<MicrosoftWindowsIcon width={16} height={16} />} color="#0078D4" />
                  <TechTag name="Linux" customIcon={<Ubuntu width={16} height={16} />} color="#FCC624" />
                  <TechTag name="Bash" customIcon={<BashIcon width={16} height={16} />} />
                  <TechTag name="n8n" customIcon={<div className="flex items-center justify-center w-4 h-4"><N8nIcon width={16} height={16} /></div>} />
                  <TechTag name="Ollama" customIcon={<div className="flex items-center justify-center w-4 h-4"><OllamaIcon width={16} height={16} /></div>} />
                  <TechTag name="Inplatform" color="#6366f1" />
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              Experience 2: Pegadaian (Kiri / Left Side di Desktop)
          ========================================================== */}
          <div className="relative flex justify-start w-full group cursor-default">

            {/* Timeline Dot (Ditambahkan efek Glow dan Scale seperti di Skills) */}
            <div className="absolute left-6 md:left-1/2 top-10 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-gray-200 dark:bg-slate-700 border-4 border-white dark:border-[#0f172a] group-hover:bg-blue-500 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300 -translate-x-1/2 z-10" />

            <div className="w-full pl-16 md:pl-0 md:pr-12 lg:pr-16 md:w-1/2">
              {/* Card Body (Ditambahkan border hover dan efek angkat ke atas) */}
              <div className="bg-white dark:bg-slate-800/40 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 dark:border-slate-700/50 shadow-sm group-hover:shadow-xl group-hover:border-blue-200 dark:group-hover:border-blue-500/50 group-hover:-translate-y-1.5 transition-all duration-300">

                {/* Header */}
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex-shrink-0 flex items-center justify-center bg-white rounded-full p-1.5 border border-gray-200 dark:border-slate-600 shadow-sm w-12 h-12">
                      <Image 
                        src="/logos/pegadaian.png" 
                        alt="Pegadaian Logo" 
                        width={36} 
                        height={36} 
                        className="object-contain rounded-full w-full h-full"
                      />
                    </div>
                    <span className="font-bold text-slate-800 dark:text-slate-100 tracking-wide">
                      PT PEGADAIAN HEAD OFFICE
                    </span>
                  </div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    Nov 2025 – Present
                  </div>
                </div>

                <div className="mb-5">
                  <span className="inline-flex px-2 py-0.5 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full border border-blue-100 dark:border-blue-500/20">
                    Active Co-PIC
                  </span>
                </div>

                {/* Role (Ditambahkan efek teks berubah biru) */}
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  PIC Data Engineer
                </h4>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  Full dedicated PIC (Nov 2025 – Apr 2026) and continuing as
                  active Secondary / Advisory PIC managing Confluent Kafka
                  infrastructure in production.
                </p>

                {/* Responsibilities */}
                <ul className="space-y-3 mb-6">
                  {[
                    "Managed enterprise Confluent Kafka clusters in production, achieving 24/7 reliability, high throughput, and fault tolerance across Red Hat Linux servers.",
                    "Monitored continuous mission-critical financial events using Confluent Control Center for real-time cluster health telemetry.",
                    "Administered secure remote server management via SSH (PuTTY), checked service statuses directly on the server, and meticulously documented monitoring results using spreadsheets.",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                    >
                      <Check size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Advisory Information */}
                <div className="flex gap-3 p-4 mb-8 bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 rounded-xl">
                  <Info size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <span className="font-semibold text-slate-900 dark:text-white">
                      Operational Advisory:
                    </span>{" "}
                    Ahmad remains actively on call as Secondary PIC / Co-PIC to
                    provide continuous operational support and Kafka cluster
                    advisory.
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  <TechTag name="Confluent Kafka" customIcon={<KafkaIcon width={16} height={16} />} />
                  <TechTag name="Docker" customIcon={<DockerIcon width={16} height={16} />} />
                  <TechTag name="Red Hat Linux" customIcon={<div className="flex items-center justify-center w-4 h-4"><RedhatIcon width={16} height={16} /></div>} />
                  <TechTag name="Server Access" customIcon={<Server size={14} />} />
                  <TechTag name="Confluent Control Center" customIcon={<div className="flex items-center justify-center w-4 h-4"><KafkaIcon width={16} height={16} /></div>} />
                  <TechTag name="Qlik Replicate" customIcon={<div className="flex items-center justify-center w-4 h-4"><Qlik width={16} height={16} /></div>} />
                  <TechTag name="PuTTY (SSH)" customIcon={<div className="flex items-center justify-center w-4 h-4"><Bash width={16} height={16} /></div>} />
                  <TechTag name="Spreadsheets" color="#10b981" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function TechTag({
  name,
  color,
  customIcon,
}: {
  name: string;
  color?: string;
  customIcon?: React.ReactNode;
}) {
  return (
    <div className="group/tag flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-full hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 cursor-default">
      {customIcon ? (
        <div className="flex items-center justify-center w-4 h-4 text-gray-700 dark:text-gray-300 group-hover/tag:text-blue-600 dark:group-hover/tag:text-blue-400 transition-colors">
          {customIcon}
        </div>
      ) : (
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: color || "#3b82f6" }}
        />
      )}
      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover/tag:text-blue-600 dark:group-hover/tag:text-blue-400 transition-colors">
        {name}
      </span>
    </div>
  );
}