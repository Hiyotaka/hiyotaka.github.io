import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`m-3 scroll-mt-24 ${className}`}>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.25 }}
        >
          <div className="border-b border-slate-300">
            <h2 className="py-1 text-2xl font-semibold text-[#006F68]">
              {title}
            </h2>
          </div>
          <div className="p-2">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
