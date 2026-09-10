import { LayoutGrid } from "lucide-react";

import {
  KafkaIcon, 
  Clickhouse, 
  N8nIcon,
  Airflow,
  Qlik,
  OllamaIcon,
  Langchain,
  HuggingFaceIcon,
  Pytorch,
  Postgresql,
  Sqlite,
  Mysql,
  Python,
  Javascript,
  BashIcon,
  ApacheSpark,
  DockerIcon,
  Elasticsearch,
  Prometheus,
  Grafana,
  Aws,
  GoogleCloud,
  Kubernetes,
  RedhatIcon,
  AwsS3,
  Oracle,
  Ibm,
  PytorchIcon,
  Tensorflow,
  ClaudeCode,
  McpIcon,
  Vector,
  Apache,
  Github, 
  Gitlab, 
  Jenkins, 
  PostmanIcon,
  
} from "@dev.icons/react";

export default function SkillSection() {
  return (
    <section
      id="skills"
      className="py-24 bg-gray-50 dark:bg-[#111827] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-bold text-base transition-colors duration-300 shadow-sm border border-blue-100 dark:border-blue-800/30">
            <LayoutGrid size={18} />
            Skills & Tech Stack
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Data Engineering & Streaming */}
          <div className="group bg-white dark:bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 cursor-default">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300"></div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Data Engineering & Streaming</h3>
            </div>
            <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">High-Throughput Engines</p>
            <div className="h-px w-full bg-gray-100 dark:bg-slate-700/50 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300 mb-5"></div>
            
            <div className="flex flex-wrap gap-2">
              <TechTag name="Apache Kafka (Confluent)" icon={<KafkaIcon width={16} height={16} />} />
              <TechTag name="Databricks" color="#FF3621" /> {/* Tambahan Databricks */}
              <TechTag name="ClickHouse" icon={<Clickhouse width={16} height={16} />} />
              <TechTag name="Debezium (CDC)" color="#8b5cf6" />
              <TechTag name="Apache Flink" icon={<Apache width={16} height={16} />} />
              <TechTag name="Apache Spark" icon={<ApacheSpark width={16} height={16} />} />
            </div>
          </div>

          {/* Card 2: Orchestration & Pipelines */}
          <div className="group bg-white dark:bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 cursor-default">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300"></div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Orchestration & Pipelines</h3>
            </div>
            <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">Workflow Automation</p>
            <div className="h-px w-full bg-gray-100 dark:bg-slate-700/50 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300 mb-5"></div>
            
            <div className="flex flex-wrap gap-2">
              <TechTag name="n8n" icon={<N8nIcon width={16} height={16} />} />
              <TechTag name="Apache Airflow" icon={<Airflow width={16} height={16} />} />
              <TechTag name="Jenkins (CI/CD)" icon={<Jenkins width={16} height={16} />} /> {/* Tambahan Jenkins */}
              <TechTag name="Apache NiFi" icon={<Apache width={16} height={16} />} />
              <TechTag name="Pentaho" color="#ef4444" />
              <TechTag name="Qlik Replicate" icon={<Qlik width={16} height={16} />} />
            </div>
          </div>

          {/* Card 3: AI, LLM & Agents */}
          <div className="group bg-white dark:bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 cursor-default">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300"></div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">AI, LLM & Agents</h3>
            </div>
            <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">Applied Models & Retrieval</p>
            <div className="h-px w-full bg-gray-100 dark:bg-slate-700/50 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300 mb-5"></div>
            
            <div className="flex flex-wrap gap-2">
              <TechTag name="Ollama" icon={<OllamaIcon width={16} height={16} />} />
              <TechTag name="LangChain" icon={<Langchain width={16} height={16} />} />
              <TechTag name="Hugging Face" icon={<HuggingFaceIcon width={16} height={16} />} />
              <TechTag name="PyTorch" icon={<PytorchIcon width={16} height={16} />} />
              <TechTag name="TensorFlow" icon={<Tensorflow width={16} height={16} />} />
              <TechTag name="ClaudeCode" icon={<ClaudeCode width={16} height={16} />} />
              <TechTag name="MCP" icon={<McpIcon width={16} height={16} />} />
              <TechTag name="Vector DB" icon={<Vector width={16} height={16} />} />
            </div>
          </div>

          {/* Card 4: Databases & Storage */}
          <div className="group bg-white dark:bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 cursor-default">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300"></div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Databases & Storage</h3>
            </div>
            <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">Relational, OLAP & S3</p>
            <div className="h-px w-full bg-gray-100 dark:bg-slate-700/50 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300 mb-5"></div>
            
            <div className="flex flex-wrap gap-2">
              <TechTag name="PostgreSQL" icon={<Postgresql width={16} height={16} />} />
              <TechTag name="DuckDB" color="#facc15" />
              <TechTag name="RustFS (S3)" icon={<AwsS3 width={16} height={16} />} />
              <TechTag name="Elasticsearch (ELK)" icon={<Elasticsearch width={16} height={16} />} />
              <TechTag name="SQLite" icon={<Sqlite width={16} height={16} />} />
              <TechTag name="MySQL" icon={<Mysql width={16} height={16} />} />
              <TechTag name="IBM DB2" icon={<Ibm width={16} height={16} />} />
              <TechTag name="MinIO (S3)" icon={<AwsS3 width={16} height={16} />} />
              <TechTag name="Oracle" icon={<Oracle width={16} height={16} />} />
            </div>
          </div>

          {/* Card 5: Backend & Languages */}
          <div className="group bg-white dark:bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 cursor-default">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300"></div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Backend & Languages</h3>
            </div>
            <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">Core Languages & Scripts</p>
            <div className="h-px w-full bg-gray-100 dark:bg-slate-700/50 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300 mb-5"></div>
            
            <div className="flex flex-wrap gap-2">
              <TechTag name="Python" icon={<Python width={16} height={16} />} />
              <TechTag name="JavaScript" icon={<Javascript width={16} height={16} />} />
              <TechTag name="SQL" color="#3b82f6" />
              <TechTag name="Bash / Linux Shell" icon={<BashIcon width={16} height={16} />} />
              <TechTag name="Postman" icon={<PostmanIcon width={16} height={16} />} /> {/* Tambahan Postman */}
              <TechTag name="GitHub" icon={<Github width={16} height={16} className="dark:invert" />} /> {/* Tambahan GitHub */}
              <TechTag name="GitLab" icon={<Gitlab width={16} height={16} />} /> {/* Tambahan GitLab */}
            </div>
          </div>

          {/* Card 6: Infra & Observability */}
          <div className="group bg-white dark:bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 cursor-default">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300"></div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Infra & Observability</h3>
            </div>
            <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">Cloud & Platform Ops</p>
            <div className="h-px w-full bg-gray-100 dark:bg-slate-700/50 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300 mb-5"></div>
            
            <div className="flex flex-wrap gap-2">
              <TechTag name="Docker" icon={<DockerIcon width={16} height={16} />} />
              <TechTag name="Kubernetes" icon={<Kubernetes width={16} height={16} />} />
              <TechTag name="Linux" icon={<RedhatIcon width={16} height={16} />} />
              <TechTag name="Prometheus" icon={<Prometheus width={16} height={16} />} />
              <TechTag name="Grafana" icon={<Grafana width={16} height={16} />} />
              <TechTag name="AWS" icon={<Aws width={16} height={16} />} />
              <TechTag name="GCP" icon={<GoogleCloud width={16} height={16} />} />
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
  icon,
}: {
  name: string;
  color?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="group/tag flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 transition-colors cursor-default shadow-sm hover:shadow">
      {icon ? (
        <div className="flex items-center justify-center w-4 h-4 text-gray-700 dark:text-gray-300 transition-colors">
          {icon}
        </div>
      ) : (
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: color || "#3b82f6",
          }}
        />
      )}
      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover/tag:text-blue-600 dark:group-hover/tag:text-blue-400 transition-colors">
        {name}
      </span>
    </div>
  );
}