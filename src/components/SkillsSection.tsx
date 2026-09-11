import { LayoutGrid } from "lucide-react";
import ScrollReveal from "./ScrollReveal"; // Import ScrollReveal

import {
  Kafka, 
  Clickhouse,
  N8n,
  Airflow,
  Qlik,
  Ollama,
  Langchain,
  HuggingFace,
  Pytorch,
  Postgresql,
  Sqlite,
  Mysql,
  Python,
  Javascript,
  Bash,
  ApacheSpark,
  Docker,
  Elasticsearch,
  Prometheus,
  Grafana,
  Aws,
  GoogleCloud,
  Kubernetes,
  RedHat,
  AwsResAmazonSimpleStorageServiceBucket,
  Oracle,
  Ibm,
  ApacheFlink,
  Tensorflow,
  Confluent,
  Databricks,
  ClaudeCode,
  Rustfs, 
  ModelContextProtocol,
  Vectorizerdotai,
  Github, 
  Gitlab, 
  Jenkins, 
  Postman,
  ApacheNifi,
  Duckdb,
  Minio,
  AzureSqlDatabase,
  Codex,
  Dbt,
 GcpBigquery,
  Snowflake,
  Fastapi,
  Nextdotjs,
  Redis,
  Openai,
  Anthropic,
  Llamaindex,
  Auth0,
} from "@thesvg/react";

export default function SkillSection() {
  return (
    <section
      id="skills"
      className="py-24 bg-gray-50 dark:bg-[#111827] transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex justify-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-bold text-base transition-colors duration-300 shadow-sm border border-blue-100 dark:border-blue-800/30">
              <LayoutGrid size={18} />
              Skills & Tech Stack
            </div>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 - Data Engineering & Streaming (Delay 100) */}
          <ScrollReveal delay={100}>
            <div className="group h-full bg-white dark:bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 cursor-default">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300"></div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Data Engineering & Streaming</h3>
              </div>
              <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">High-Throughput & Real-Time Data</p>
              <div className="h-px w-full bg-gray-100 dark:bg-slate-700/50 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300 mb-5"></div>
              
              <div className="flex flex-wrap gap-2">
                <TechTag name="Apache Kafka (Confluent)" icon={<Confluent width={16} height={16} />} />
                <TechTag name="Databricks" icon={<Databricks width={16} height={16} />} />
                <TechTag name="ClickHouse" icon={<Clickhouse width={16} height={16} />} />
                <TechTag name="Apache Flink" icon={<ApacheFlink width={16} height={16} />} />
                <TechTag name="Apache Spark" icon={<ApacheSpark width={16} height={16} />} />
                <TechTag name="Qlik Replicate" icon={<Qlik width={16} height={16} />} />
                <TechTag name="dbt" icon={<Dbt width={16} height={16} />} />
                <TechTag name="BigQuery" icon={<GcpBigquery width={16} height={16} />} />
                <TechTag name="Snowflake" icon={<Snowflake width={16} height={16} />} />
                <TechTag name="Apache Iceberg" icon={<img src="/Icons/iceberg.svg" alt="Apache Iceberg" width={16} height={16} />} />
                <TechTag name="Delta Lake" icon={<img src="/Icons/deltalake.svg" alt="Delta Lake" width={16} height={16} />} />
                <TechTag name="Debezium (CDC)" icon={<img src="/Icons/debezium.png" alt="Debezium (CDC)" width={16} height={16} />} />
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2 - Orchestration & Automation (Delay 200) */}
          <ScrollReveal delay={200}>
            <div className="group h-full bg-white dark:bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 cursor-default">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300"></div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Orchestration & Automation</h3>
              </div>
              <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">Workflow Automation</p>
              <div className="h-px w-full bg-gray-100 dark:bg-slate-700/50 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300 mb-5"></div>
              
              <div className="flex flex-wrap gap-2">
                <TechTag name="n8n" icon={<N8n width={16} height={16} />} />
                <TechTag name="Apache Airflow" icon={<Airflow width={16} height={16} />} />
                <TechTag name="Apache NiFi" icon={<ApacheNifi width={16} height={16} />} />
                <TechTag name="Pentaho" icon={<img src="/Icons/pentaho.svg" alt="Pentaho" width={16} height={16} />} />
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3 - AI, Machine Learning & Agents (Delay 300) */}
          <ScrollReveal delay={300}>
            <div className="group h-full bg-white dark:bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 cursor-default">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300"></div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">AI, LLM & Agents</h3>
              </div>
              <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">Applied Models & Retrieval</p>
              <div className="h-px w-full bg-gray-100 dark:bg-slate-700/50 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300 mb-5"></div>
              
              <div className="flex flex-wrap gap-2">
                <TechTag name="Ollama" icon={<Ollama variant="mono" width={16} height={16} />} />
                <TechTag name="LangChain" icon={<Langchain width={16} height={16} />} />
                <TechTag name="Hugging Face" icon={<HuggingFace width={16} height={16} />} />
                <TechTag name="PyTorch" icon={<Pytorch width={16} height={16} />} />
                <TechTag name="Codex" icon={<Codex width={16} height={16} />} />
                <TechTag name="ClaudeCode" icon={<ClaudeCode width={16} height={16} />} />
                <TechTag name="MCP" icon={<ModelContextProtocol variant="mono" width={16} height={16} />} />
                <TechTag name="Vector DB" icon={<Vectorizerdotai width={16} height={16} />} />
                <TechTag name="OpenAI API" icon={<Openai variant="light" width={16} height={16} className="dark:invert" />} />
                <TechTag name="Anthropic API" icon={<Anthropic variant="light" width={16} height={16} className="dark:invert" />} />
                <TechTag name="LlamaIndex" icon={<Llamaindex width={16} height={16} />} />
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4 - Databases & Storage (Delay 400) */}
          <ScrollReveal delay={400}>
            <div className="group h-full bg-white dark:bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 cursor-default">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300"></div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Databases & Storage</h3>
              </div>
              <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">Relational, OLAP & Object Storage</p>
              <div className="h-px w-full bg-gray-100 dark:bg-slate-700/50 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300 mb-5"></div>
              
              <div className="flex flex-wrap gap-2">
                <TechTag name="PostgreSQL" icon={<Postgresql width={16} height={16} />} />
                <TechTag name="DuckDB" icon={<Duckdb width={16} height={16} />} />
                <TechTag name="RustFS (S3)" icon={<Rustfs width={16} height={16} />} />
                <TechTag name="SQLite" icon={<Sqlite width={16} height={16} />} />
                <TechTag name="MySQL" icon={<Mysql variant="mono" width={16} height={16} />} />
                <TechTag name="IBM DB2" icon={<Ibm width={16} height={16} />} />
                <TechTag name="MinIO (S3)" icon={<Minio width={16} height={16} />} />
                <TechTag name="Oracle" icon={<Oracle width={16} height={16} />} />
              </div>
            </div>
          </ScrollReveal>

          {/* Card 5 - Dev Tools & Languages (Delay 500) */}
          <ScrollReveal delay={500}>
            <div className="group h-full bg-white dark:bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 cursor-default">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300"></div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Dev Tools & Languages</h3>
              </div>
              <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">Core Languages & Collaboration</p>
              <div className="h-px w-full bg-gray-100 dark:bg-slate-700/50 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300 mb-5"></div>
              
              <div className="flex flex-wrap gap-2">
                <TechTag name="Python" icon={<Python width={16} height={16} />} />
                <TechTag name="JavaScript" icon={<Javascript width={16} height={16} />} />
                <TechTag name="SQL" icon={<AzureSqlDatabase width={16} height={16} />} />
                <TechTag name="Bash / Linux Shell" icon={<Bash variant="light" width={16} height={16} />} />
                <TechTag name="Postman" icon={<Postman width={16} height={16} />} />
                <TechTag name="GitHub" icon={<Github width={16} height={16} className="dark:invert" />} />
                <TechTag name="GitLab" icon={<Gitlab width={16} height={16} />} />
                <TechTag name="FastAPI" icon={<Fastapi width={16} height={16} />} />
                <TechTag name="Next.js" icon={<Nextdotjs width={16} height={16} className="dark:invert" />} />
                <TechTag name="Redis (Caching)" icon={<Redis width={16} height={16} />} />
                {/* No dedicated icon in package for Auth — falls back to colored dot */}
                <TechTag name="Auth (JWT / OAuth2)" icon={<Auth0 width={16} height={16} />}/>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 6 - Infra, DevOps & Observability (Delay 600) */}
          <ScrollReveal delay={600}>
            <div className="group h-full bg-white dark:bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 cursor-default">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300"></div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Infra & Observability</h3>
              </div>
              <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">Cloud, Platform Ops & CI/CD</p>
              <div className="h-px w-full bg-gray-100 dark:bg-slate-700/50 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300 mb-5"></div>
              
              <div className="flex flex-wrap gap-2">
                <TechTag name="Docker" icon={<Docker width={16} height={16} />} />
                <TechTag name="Kubernetes" icon={<Kubernetes width={16} height={16} />} />
                <TechTag name="Redhat Linux Enterprise" icon={<RedHat width={16} height={16} />} />
                <TechTag name="Prometheus" icon={<Prometheus width={16} height={16} />} />
                <TechTag name="Grafana" icon={<Grafana width={16} height={16} />} />
                <TechTag name="Elasticsearch (ELK)" icon={<Elasticsearch width={16} height={16} />} />
                <TechTag name="Jenkins (CI/CD)" icon={<Jenkins width={16} height={16} />} />
                <TechTag name="AWS" icon={<Aws width={16} height={16} />} />
                <TechTag name="GCP" icon={<GoogleCloud width={16} height={16} />} />
              </div>
            </div>
          </ScrollReveal>

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
