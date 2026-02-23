import { motion } from 'motion/react';
import { Github, Mail, MapPin, Building2 } from 'lucide-react';
import profilePhoto from '../assets/photo.png';

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-12 sm:pb-16">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <img 
              src={profilePhoto}
              alt="Haoyu Zhai" 
              className="w-32 h-32 rounded-full object-cover border border-slate-200"
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/seed/avatar/400/400";
              }}
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Haoyu Zhai <span className="text-slate-500 font-normal text-2xl ml-2">翟浩宇</span>
            </h1>
            <p className="text-lg text-slate-700 mb-4">
              AI Algorithm Engineer
            </p>
            
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>Qihoo 360 Technology Co., Ltd.</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Beijing, China</span>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <a href="mailto:zhaihaoyu007@gmail.com" className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
                <a href="https://github.com/Hiyotaka" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-slate-700 leading-relaxed"
        >
          <p>
            I am currently an Algorithm Engineer at Qihoo 360 Technology Co., Ltd., where I engage in algorithm design and applied research in machine learning and artificial intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
