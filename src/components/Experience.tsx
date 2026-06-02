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
                360 Group, Beijing
                <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
                  <li>Built an embedding-based code/malware similarity retrieval pipeline with preprocessing, chunking, embedding generation, Milvus indexing, ANN search, and file-level aggregation.</li>
                  <li>Validated retrieval over about 17.6K files / 3.5M chunk embeddings; the validated route was later scaled to about 40M chunk embeddings by the APT research team.</li>
                  <li>Build multi-tool LLM agent workflows for malware/security triage across sandboxed execution, binary/PE inspection, Office/PDF analysis, and report generation.</li>
                  <li>Diagnose reliability failures in the agent pipeline and improve end-to-end behavior through model selection and prompt design.</li>
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
              Participated as a core contributor, focusing on graph-based clustering, outlier detection, and pattern recognition for image and tabular data.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-1 text-slate-600">
              <li>Designed symmetry-distance outlier scoring and a minimum-spanning-forest split/merge clustering framework.</li>
              <li>Evaluated SMMSF on 12 two-dimensional and 15 real-world datasets against 9 comparison algorithms using AC, PR, RE, and F1.</li>
              <li>Evaluated the outlier detector on 4 synthetic and 16 UCI datasets against 5 mainstream detectors, then verified clustering gains after denoising.</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
