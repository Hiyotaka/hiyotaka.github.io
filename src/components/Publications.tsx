import { Section } from './Section';

type PublicationLink = {
  label: string;
  url: string;
};

type PublicationItem = {
  title: string;
  authors: string[];
  venue?: string;
  year?: string;
  note?: string;
  status?: string;
  links: PublicationLink[];
};

export function Publications() {
  const submitted: PublicationItem[] = [];

  const published: PublicationItem[] = [
    {
      title: "Density-increment and cut-edge optimized clustering via minimum spanning forest",
      authors: ["Haoyu Zhai", "Jie. Yang*", "Haotao Guo", "Bin Wang", "Yan Ma*"],
      venue: "Neurocomputing",
      year: "2026",
      note: "[First author | JCR Q1]",
      links: [
        { label: "[Paper]", url: "https://doi.org/10.1016/j.neucom.2026.132957" },
        { label: "[code]", url: "https://github.com/Hiyotaka/SMMSF-algorithm" }
      ]
    },
    {
      title: "Discovering generalized clusters with adaptive mixture density-based clustering",
      authors: ["Zexuan Fei†", "Haoyu Zhai†", "Jie Yang*", "Bin Wang", "Yan Ma*"],
      venue: "Knowledge-based Systems",
      year: "2025",
      note: "[Co-first author | JCR Q1]",
      links: [
        { label: "[Paper]", url: "https://doi.org/10.1016/j.knosys.2025.113250" },
        { label: "[code]", url: "https://github.com/Hiyotaka/Bombing-clustering-algorithm" }
      ]
    },
    {
      title: "A Novel Outlier Detection Algorithm Based on Symmetry and Distance Ratio",
      authors: ["Haoyu Zhai", "Zexuan Fei", "Yan Ma*"],
      venue: "International Conference on Pattern Recognition",
      year: "2024",
      note: "[First author]",
      links: [
        { label: "[Paper]", url: "https://doi.org/10.1007/978-3-031-78192-6_22" },
        { label: "[code]", url: "https://github.com/Hiyotaka/SDR_Outlier" }
      ]
    }
  ];

  const renderAuthor = (author: string, idx: number, arr: string[]) => {
    const isMe = author.includes("Haoyu Zhai");
    return (
      <span key={idx}>
        <span className={isMe ? "font-semibold text-slate-900" : "text-slate-700"}>
          {author}
        </span>
        {idx < arr.length - 1 ? ", " : ""}
      </span>
    );
  };

  return (
    <Section id="publications" title="Publications">
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Published</h3>
          <ul className="space-y-6">
            {published.map((pub, idx) => (
              <li key={idx} className="text-slate-700 leading-relaxed">
                {pub.authors.map((author, i) => renderAuthor(author, i, pub.authors))}.{" "}
                <span className="font-medium text-slate-900">{pub.title}</span>.{" "}
                <span className="italic">{pub.venue}</span>, {pub.year}.{" "}
                {pub.note && <span className="text-slate-500">{pub.note}</span>}{" "}
                <span className="inline-flex gap-2 ml-1">
                  {pub.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {submitted.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Submitted / Under Review</h3>
            <ul className="space-y-6">
              {submitted.map((pub, idx) => (
                <li key={idx} className="text-slate-700 leading-relaxed">
                  {pub.authors.map((author, i) => renderAuthor(author, i, pub.authors))}.{" "}
                  <span className="font-medium text-slate-900">{pub.title}</span>.{" "}
                  {pub.status && <span className="text-slate-500">[{pub.status}]</span>}{" "}
                  <span className="inline-flex gap-2 ml-1">
                    {pub.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline"
                      >
                        {link.label}
                      </a>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}
