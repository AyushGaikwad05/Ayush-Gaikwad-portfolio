import React from 'react';
import { Award } from 'lucide-react';
import { skillCategories } from '../data/constants';

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Technical <span className="text-indigo-400">Skills</span></h2>
        <p className="text-slate-400">A comprehensive toolkit for building exceptional mobile and web experiences.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {["Computer Engineering Student", "Full-Stack Developer", "Flutter Expert", "AI Enthusiast", "Open for Internships"].map((tag) => (
          <span key={tag} className="px-4 py-1.5 bg-slate-900/50 border border-slate-800 rounded-full text-xs font-medium text-slate-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="p-8 bg-slate-900/30 border border-slate-800 rounded-3xl space-y-8">
            <div className="flex items-center gap-4">
              <div className="text-2xl p-3 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-center">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>

            <div className="space-y-6">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-300">{skill.name}</span>
                    <span className="text-indigo-400">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800/50">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Achievements Bar */}
      {/* <div className="mt-12 p-8 bg-indigo-600/5 border border-indigo-500/20 rounded-3xl flex flex-col md:flex-row items-center gap-8 justify-around">
          <div className="flex items-center gap-4">
              <Award className="text-indigo-400 w-10 h-10" />
              <div>
                  <h4 className="font-bold text-slate-200">1st Prize AI Visionaries</h4>
                  <p className="text-sm text-slate-500">Optimized ML Classification model</p>
              </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-slate-800" />
          <div className="flex items-center gap-4">
              <Award className="text-violet-400 w-10 h-10" />
              <div>
                  <h4 className="font-bold text-slate-200">1st Prize MySangamner PBL</h4>
                  <p className="text-sm text-slate-500">Innovative Community Solutions</p>
              </div>
          </div>
      </div> */}
    </section>
  );
};

export default Skills;
