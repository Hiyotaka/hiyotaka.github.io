import { Hero } from './components/Hero';
import { About } from './components/About';
import { Publications } from './components/Publications';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { useState, useEffect } from 'react';
import { FileText, Github, GraduationCap, Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import profilePhoto from './assets/photo.png';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'publications', 'projects', 'experience'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'publications', label: 'Publications' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
  ];

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:block md:w-72 md:overflow-y-auto md:border-r md:border-slate-200 md:bg-white md:p-6">
        <img
          src={profilePhoto}
          alt="Haoyu Zhai"
          className="mx-auto mb-4 w-40 border border-slate-200"
        />
        <h1 className="text-center text-2xl font-semibold">Haoyu Zhai</h1>
        <p className="text-center text-xl text-slate-700">翟浩宇</p>
        <hr className="my-5" />
        <p className="my-1">AI Algorithm Engineer</p>
        <p className="my-1">360 Group, Beijing</p>
        <p className="my-1">M.Eng., Shanghai Normal University</p>
        <hr className="my-5" />
        <div className="space-y-3 text-sm">
          <p className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4" /> Beijing, China</p>
          <p className="flex gap-2"><Mail className="mt-0.5 h-4 w-4" /> <a className="text-[#006F68] hover:underline" href="mailto:zhaihaoyu007@gmail.com">zhaihaoyu007@gmail.com</a></p>
          <p className="flex gap-2"><Phone className="mt-0.5 h-4 w-4" /> +86 130 0252 3469</p>
          <p className="flex gap-2"><Github className="mt-0.5 h-4 w-4" /> <a className="text-[#006F68] hover:underline" href="https://github.com/Hiyotaka" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          <p className="flex gap-2"><GraduationCap className="mt-0.5 h-4 w-4" /> <a className="text-[#006F68] hover:underline" href="https://scholar.google.com/citations?user=fB7o1RoAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a></p>
          <p className="flex gap-2"><FileText className="mt-0.5 h-4 w-4" /> <a className="text-[#006F68] hover:underline" href="./Haoyu_Zhai_CV.pdf" target="_blank" rel="noopener noreferrer">CV</a></p>
        </div>
      </aside>

      <div className="md:ml-72">
        <nav className="sticky top-0 z-40 border-b border-slate-200 bg-white">
          <div className="flex min-h-16 items-center justify-between px-4 md:px-8">
            <div className="md:hidden">
              <p className="text-lg font-semibold">Haoyu Zhai</p>
              <p className="text-sm text-slate-600">翟浩宇</p>
            </div>
            <div className="hidden md:flex md:items-center md:gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`rounded px-3 py-2 text-sm transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#006F68] text-white'
                      : 'text-slate-800 hover:bg-[#006F68] hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button 
              className="md:hidden p-2 text-slate-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="border-t border-slate-200 px-4 py-2 md:hidden">
              {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`block w-full rounded px-3 py-2 text-left text-sm ${
                      activeSection === item.id
                        ? 'bg-[#006F68] text-white'
                        : 'text-slate-800 hover:bg-[#006F68] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
            </div>
          )}
        </nav>

        <main className="px-4 py-4 md:px-8">
          <Hero />
          <About />
          <Publications />
          <Projects />
          <Experience />
        </main>

        <footer className="border-t border-slate-200 px-4 py-4 text-sm text-slate-600 md:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>Last updated: June 2026.</p>
            <p>&copy; {new Date().getFullYear()} Haoyu Zhai (翟浩宇)</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
