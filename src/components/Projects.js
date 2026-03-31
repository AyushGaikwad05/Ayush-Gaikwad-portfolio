import React from 'react';
import { Terminal, Maximize2, ExternalLink } from 'lucide-react';
import { projects } from '../data/constants';

const Projects = ({ setPreviewImage }) => {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-900/10 blur-[120px] rounded-full"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Featured <span className="text-indigo-400">Projects</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Engineering solutions that combine modern web technologies with robust performance.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-slate-900/40 border border-slate-800/50 rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500 flex flex-col">
              <div
                className="aspect-video relative overflow-hidden cursor-pointer group/img"
                onClick={() => setPreviewImage(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = '<div class="w-full h-full bg-slate-900 flex items-center justify-center"><Terminal className="text-indigo-500/20 w-16 h-16" /></div>';
                  }}
                />
                <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 transform translate-y-4 group-hover/img:translate-y-0 transition-transform">
                    <Maximize2 size={24} />
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6 flex-1 flex flex-col">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-indigo-400 text-sm font-medium mb-4">{project.subtitle}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-slate-950 text-slate-400 text-xs rounded-full border border-slate-800">{t}</span>
                  ))}
                </div>

                <div className="space-y-2 flex-1">
                  <ul className="text-xs text-slate-400 space-y-2">
                    {project.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex gap-4">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-medium transition-all flex items-center justify-center">
                      Source Code
                    </a>
                  ) : (
                    <button className="flex-1 py-3 bg-slate-800 text-slate-400 rounded-xl text-sm font-medium cursor-not-allowed">
                      Private Code
                    </button>
                  )}
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="px-4 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl transition-all flex items-center justify-center text-slate-100 hover:text-white">
                      <ExternalLink size={18} />
                    </a>
                  ) : (
                    <button className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl cursor-not-allowed opacity-50 flex items-center justify-center text-slate-400">
                      <ExternalLink size={18} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
