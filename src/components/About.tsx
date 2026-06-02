import { Section } from './Section';

export function About() {
  return (
    <Section id="about" title="Education & Interests">
      <div>
        <div>
          <h3 className="mb-2 text-xl font-semibold text-[#006F68]">Education</h3>
          <ul className="space-y-4">
            <li>
              <div>
                <span className="font-semibold text-slate-950">Master of Engineering, Computer Science and Technology</span>
                <br />
                Shanghai Normal University
                <br />
                Supervisor: <a href="https://mayanshnu.github.io/" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">Prof. Yan Ma</a>
                <br />
                Thesis: Research on a Split-Merge Clustering Algorithm Based on Minimum Spanning Forests
                <br />
                Award: Outstanding Graduate Award, Shanghai Normal University, 2025 (top 5%)
              </div>
              <span className="text-slate-600">Sep 2022 - Jun 2025</span>
            </li>
            <li>
              <div>
                <span className="font-semibold text-slate-950">Bachelor of Engineering, Transportation</span>
                <br />
                Nanjing University of Aeronautics and Astronautics, Jincheng College
              </div>
              <span className="text-slate-600">Sep 2017 - Jun 2021</span>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="mb-2 text-xl font-semibold text-[#006F68]">Research Interests</h3>
          <ul className="ml-5 list-disc space-y-1">
            <li>Trustworthy Machine Learning and reliable AI systems.</li>
            <li>Security of retrieval-augmented and multi-tool LLM systems.</li>
            <li>Out-of-distribution / novelty detection, clustering, and anomaly detection.</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="mb-2 text-xl font-semibold text-[#006F68]">Current Research Direction</h3>
          <p className="leading-relaxed">
            I am exploring poisoned and out-of-distribution evidence detection in
            RAG and multi-tool LLM systems, especially how cross-source
            consistency, evidence support, and online novelty/OOD detection can
            identify unreliable evidence before final decisions are corrupted.
          </p>
        </div>
      </div>
    </Section>
  );
}
