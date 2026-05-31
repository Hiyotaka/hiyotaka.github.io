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
        "An LLM-based autonomous analysis system for security triage, combining tool orchestration, sandboxed execution, and structured evidence collection.",
      points: [
        "Designed a ReAct-style workflow for iterative planning, tool use, observation, and report generation.",
        "Integrated Docker isolation, file triage, binary/PE inspection, Office/PDF analysis, and batch dispatch workflows.",
        "Built FastAPI-based service interfaces and a web UI for repeatable security analysis experiments."
      ]
    },
    {
      title: "Reliable Tool-Chain Execution in LLM Agent Systems",
      period: "PhD Research Proposal",
      summary:
        "A proposed research direction on detecting unreliable LLM-agent behavior during multi-step tool use rather than only evaluating final answers.",
      points: [
        "Models agent trajectories as structured execution traces across actions, observations, tools, and intermediate evidence.",
        "Studies cross-tool consistency signals for identifying contradictions and unsupported conclusions.",
        "Connects online novelty/OOD detection with runtime monitoring for safer agent deployment."
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
