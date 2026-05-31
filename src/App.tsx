import { Hero } from './components/Hero';
import { About } from './components/About';
import { Publications } from './components/Publications';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Awards } from './components/Awards';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'publications', 'projects', 'experience', 'awards'];
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
    { id: 'awards', label: 'Awards' },
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
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-200 selection:text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-slate-100 z-40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
              className="text-lg font-semibold tracking-tight text-slate-900 hover:text-slate-600 transition-colors"
            >
              H. Zhai
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-slate-900'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 -mr-2 text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium ${
                    activeSection === item.id
                      ? 'text-slate-900 bg-slate-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Publications />
        <Projects />
        <Experience />
        <Awards />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-8 mt-16 text-center text-sm text-slate-500">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Haoyu Zhai (翟浩宇). All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="mailto:zhaihaoyu007@gmail.com" className="hover:text-slate-900 transition-colors">Email</a>
            <a href="https://github.com/Hiyotaka" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">GitHub</a>
            <a href="https://scholar.google.com/citations?user=fB7o1RoAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">Scholar</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
