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
      title: "MAGA: LLM Agent for Malware and Security Analysis",
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
      title: "Runtime Detection of Unreliable LLM Tool-Use Trajectories",
      period: "PhD Research Proposal",
      summary:
        "A proposed research direction on detecting unreliable tool-use trajectories during agent execution rather than only evaluating final answers.",
      points: [
        "Models agent trajectories as trace graphs over tasks, tool calls, observations, intermediate claims, and evidence dependencies.",
        "Studies cross-tool contradiction, unsupported claims, argument propagation errors, abnormal tool sequences, and OOD trajectory patterns.",
        "Develops runtime monitors that can detect, localize, and mitigate unreliable behavior before final answers or external actions."
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
