import { Section } from './Section';

export function Awards() {
  const awards = [
    { title: "Outstanding Graduate Award", organization: "Shanghai Normal University", year: "2025" },
    { title: "Third-Prize Scholarship", organization: "Shanghai Normal University", year: "2024, 2023, 2022" },
    { title: "Third Prize, Jiangsu Collegiate Mechanical Design Competition", organization: "Jiangsu Province", year: "2019" },
    { title: "First-Prize Scholarship", organization: "NUAA Jincheng College", year: "2020" },
    { title: "Second-Prize Scholarship", organization: "NUAA Jincheng College", year: "2019, 2018, 2017" }
  ];

  return (
    <Section id="awards" title="Awards">
      <ul className="space-y-3 text-slate-700">
        {awards.map((award, idx) => (
          <li key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
            <span>
              <span className="font-medium text-slate-900">{award.title}</span>
              <span className="text-slate-500">, {award.organization}</span>
            </span>
            <span className="text-sm text-slate-500 whitespace-nowrap">{award.year}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
