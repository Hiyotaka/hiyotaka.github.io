import { Section } from './Section';

type ProjectItem = {
  title: string;
  period: string;
  summary: string;
  points: string[];
};

export function Projects() {
  const projects: ProjectItem[] = [
    {
      title: "Embedding-Based Code / Malware Similarity Retrieval",
      period: "2025 - Present",
      summary:
        "A Milvus-based retrieval pipeline for matching malware samples and reused code fragments through code chunk embeddings and file-level aggregation.",
      points: [
        "Preprocesses code files into chunks, generates embeddings with GraphCodeBERT and Qwen3-Embedding-0.6B, and indexes vectors with HNSW plus cosine similarity.",
        "Aggregates chunk-level hits into file-level evidence using Reciprocal Rank Fusion for deduplication, same-origin sample association, and partial reused-snippet detection.",
        "Validated the route on about 17.6K files / 3.5M chunk embeddings before later scale-up by the APT research team."
      ]
    },
    {
      title: "Multi-Tool LLM Agent for Malware and Security Analysis",
      period: "2025 - Present",
      summary:
        "A multi-tool LLM agent platform for malware and security triage, combining tool orchestration, sandboxed execution, structured traces, and report generation.",
      points: [
        "Orchestrates Python, Node.js, shell execution, file operations, binary/PE inspection, and Office/PDF analysis inside per-task Docker sandboxes.",
        "Implements batch multi-agent dispatch plus a FastAPI web UI for file upload, task submission, live status tracking, checklist progress, and Markdown report rendering.",
        "Records structured action-observation traces for reliability analysis, cross-tool consistency checks, and runtime failure detection."
      ]
    },
    {
      title: "Poisoned and OOD Evidence Detection for RAG and Multi-Tool LLM Systems",
      period: "PhD Research Proposal",
      summary:
        "A proposed research direction on detecting poisoned or out-of-distribution evidence before it corrupts final answers or external actions.",
      points: [
        "Models RAG and agent runs as evidence graphs over queries, retrieved passages, tool calls, observations, intermediate claims, and support/contradiction dependencies.",
        "Focuses on cross-source contradiction, unsupported claims, anomalous retrieval distributions, abnormal tool sequences, and OOD partial traces.",
        "Develops runtime monitors that can re-retrieve, down-weight sources, request verifying tools, or escalate before decisions are corrupted."
      ]
    }
  ];

  return (
    <Section id="projects" title="Projects & Research Direction">
      <div className="space-y-8">
        {projects.map((project) => (
          <article key={project.title} className="text-slate-700 leading-relaxed">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
              <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
              <span className="text-sm text-slate-500 whitespace-nowrap">{project.period}</span>
            </div>
            <p className="mb-3">{project.summary}</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
