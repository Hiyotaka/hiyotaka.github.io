import { Section } from './Section';

export function Experience() {
  return (
    <Section id="experience" title="Experience & Research">
      <div className="space-y-10">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Working Experience</h3>
          <ul className="space-y-6 text-slate-700">
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <div>
                <span className="font-medium text-slate-900">AI Algorithm Engineer</span>
                <br />
                Qihoo 360 Technology Co., Ltd., Beijing, China
                <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
                  <li>Work on LLM-agent and retrieval-based pipelines for practical security and code analysis tasks.</li>
                  <li>Develop tool-orchestration workflows that emphasize traceability, reproducibility, and reliable intermediate evidence.</li>
                  <li>Build and evaluate applied AI systems across agent execution, service integration, and analysis automation.</li>
                </ul>
              </div>
              <span className="text-sm text-slate-500 whitespace-nowrap">Jul 2025 – Present</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <div>
                <span className="font-medium text-slate-900">R&D Intern</span>
                <br />
                GritWorld (Shanghai) Information Technology Co., Ltd., Shanghai, China
              </div>
              <span className="text-sm text-slate-500 whitespace-nowrap">Jun 2024 – Aug 2024</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Research Programs</h3>
          <div className="text-slate-700">
            <h4 className="font-medium text-slate-900 mb-1">
              National Natural Science Foundation of China (NSFC) Project
            </h4>
            <p className="italic text-sm mb-3">
              Title: Research on Holstein Cattle Image Recognition Based on Spectral Graph Theory and Elastic Net Sparse Representation
            </p>
            <p className="mb-3 leading-relaxed">
              Participated as a core member, focusing on algorithmic aspects of clustering analysis, anomaly detection, and pattern recognition applied to large-scale image data.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-1 text-slate-600">
              <li>Designed and optimized graph-based clustering and density-based methods.</li>
              <li>Extended the scope from cattle image recognition to general data mining, novelty detection, and pattern recognition tasks.</li>
              <li>Led extensions that resulted in multiple publications in international journals and conferences.</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
