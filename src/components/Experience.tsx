import { Section } from './Section';

export function Experience() {
  return (
    <Section id="experience" title="Experience & Research">
      <div className="space-y-10">
        <div>
          <h3 className="mb-2 text-xl font-semibold text-[#006F68]">Working Experience</h3>
          <ul className="space-y-6">
            <li>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <span className="font-semibold">AI Algorithm Engineer</span>
                  <br />
                  360 Group, Beijing
                </div>
                <span className="text-slate-600">Jul 2025 - Present</span>
              </div>
              <ul className="ml-5 mt-2 list-disc space-y-1">
                <li>Built an embedding-based code/malware similarity retrieval pipeline with preprocessing, chunking, embedding generation, Milvus indexing, ANN search, and file-level aggregation.</li>
                <li>Validated retrieval over about 17.6K files / 3.5M chunk embeddings; the validated route was later scaled to about 40M chunk embeddings by the APT research team.</li>
                <li>Build multi-tool LLM agent workflows for malware/security triage across sandboxed execution, binary/PE inspection, Office/PDF analysis, and report generation.</li>
                <li>Diagnose reliability failures in the agent pipeline and improve end-to-end behavior through model selection and prompt design.</li>
              </ul>
            </li>
            <li className="flex flex-col gap-1 sm:flex-row sm:justify-between">
              <div>
                <span className="font-semibold">R&D Intern</span>
                <br />
                GritWorld (Shanghai) Information Technology Co., Ltd., Shanghai, China
              </div>
              <span className="text-slate-600">Jun 2024 - Aug 2024</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-[#006F68]">Research Program</h3>
          <div>
            <h4 className="font-semibold">
              National Natural Science Foundation of China (NSFC) Project
            </h4>
            <p className="mb-3 italic text-slate-700">
              Title: Research on Holstein Cattle Image Recognition Based on Spectral Graph Theory and Elastic Net Sparse Representation
            </p>
            <p className="mb-3 leading-relaxed">
              Participated as a core contributor, focusing on graph-based clustering, outlier detection, and pattern recognition for image and tabular data.
            </p>
            <ul className="ml-5 list-disc space-y-1">
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
