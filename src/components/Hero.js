import React from 'react';
import { Mail, Download, ChevronRight, Globe, Smartphone, Cpu, Database, Github, Linkedin } from 'lucide-react';

const Hero = ({ scrollTo }) => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen">
      <div className="md:w-1/2 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
        <div className="space-y-4">
          <h2 className="text-xl text-indigo-400 font-medium tracking-wide">Hi, I'm <span className="text-slate-100">Ayush Gaikwad</span></h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Full Stack & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">App</span> Developer
          </h1>
          <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
            Computer Engineering student at Amrutvahini College. I build scalable web systems and cross-platform mobile apps with a focus on AI integration and modern architecture.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:ayushgaikwad0605@gmail.com"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl flex items-center gap-2 transition-all group"
          >
            <Mail size={18} />
            Get In Touch
            <ChevronRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="/files/Ayush_Gaikwad-No-img-Resume.pdf"  // make sure the extension matches exactly!
            download="Ayush_Gaikwad_Resume.pdf"
            className="px-8 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 rounded-xl flex items-center gap-2 transition-all"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>

        <div className="flex items-center gap-4 pt-4">
          <a href="https://github.com/ayushgaikwad05" target="_blank" rel="noreferrer" className="p-3 bg-slate-900/50 rounded-lg hover:text-indigo-400 border border-slate-800 transition-all flex items-center justify-center">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/ayush-gaikwad05" target="_blank" rel="noreferrer" className="p-3 bg-slate-900/50 rounded-lg hover:text-indigo-400 border border-slate-800 transition-all flex items-center justify-center">
            <Linkedin size={24} />
          </a>
        </div>

        <div className="flex flex-wrap gap-6 pt-6 opacity-70">
          <div className="flex flex-col items-center gap-2 group">
            <div className="p-3 bg-white rounded-2xl border border-slate-800 group-hover:border-indigo-500 transition-colors"><img src="/logo192.png" width={80} alt="react-logo" /></div>
            <span className="text-xs font-medium">React</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <div className="p-3 bg-white rounded-2xl border border-slate-800 group-hover:border-indigo-500 transition-colors"><img src="/flutter.png" width={65} height={40} alt="flutter-logo" /></div>
            <span className="text-xs font-medium">Flutter</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <div className="p-3 bg-white rounded-2xl border border-slate-800 group-hover:border-indigo-500 transition-colors"><img src="/nodejs.png" width={130} alt="nodejs-logo" /></div>
            <span className="text-xs font-medium">Node.js</span>
          </div>
          {/* <div className="flex flex-col items-center gap-2 group">
            <div className="p-3 bg-white rounded-2xl border border-slate-800 group-hover:border-indigo-500 transition-colors"><img src="/mongodb.png" width={35}  alt="mongodb-logo" /></div>
            <span className="text-xs font-medium">MongoDB</span>
          </div> */}
        </div>
      </div>

      <div className="md:w-1/2 mt-20 md:mt-0 relative flex justify-center animate-in fade-in zoom-in duration-1000">
        <div className="relative w-72 h-80 md:w-96 md:h-[30rem]">
          <div className="absolute -inset-4 bg-indigo-500/20 rounded-3xl blur-3xl animate-pulse"></div>
          <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-violet-600 rounded-[2.5rem] blur opacity-40"></div>

          <div className="relative w-full h-full bg-slate-900 rounded-[2rem] border-4 border-slate-800 overflow-hidden flex items-center justify-center shadow-2xl">
            <img
              src="/profile.jpg"
              alt="Ayush Gaikwad"
              className="w-full h-full object-cover object-[center_20%]"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '<div class="text-9xl">👨‍💻</div>';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
