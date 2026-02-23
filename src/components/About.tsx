import { Section } from './Section';

export function About() {
  return (
    <Section id="about" title="Education & Interests">
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Education</h3>
          <ul className="space-y-4 text-slate-700">
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <div>
                <span className="font-medium text-slate-900">Master of Engineering, Computer Science and Technology</span>
                <br />
                Shanghai Normal University
              </div>
              <span className="text-sm text-slate-500 whitespace-nowrap">Sep 2022 — Jun 2025</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <div>
                <span className="font-medium text-slate-900">Bachelor of Engineering, Transportation</span>
                <br />
                Nanjing University of Aeronautics and Astronautics, Jincheng College
              </div>
              <span className="text-sm text-slate-500 whitespace-nowrap">Sep 2017 — Jun 2021</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Research Interests</h3>
          <p className="text-slate-700 leading-relaxed">
            Clustering, Artificial Intelligence, Deep Learning, Machine Learning, Data Mining, Computer Vision.
          </p>
        </div>
      </div>
    </Section>
  );
}
