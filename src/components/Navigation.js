import React from 'react';

const Navigation = ({ activeSection, scrollTo }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div
          className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent cursor-pointer"
          onClick={() => scrollTo('home')}
        >
          Ayush Gaikwad
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['home', 'projects', 'skills', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`capitalize transition-colors ${activeSection === item ? 'text-indigo-400 font-medium' : 'text-slate-400 hover:text-slate-100'}`}
            >
              {item}
            </button>
          ))}
          <a href='https://calendly.com/ayushgaikwad060/30min'>
            <button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full transition-all shadow-lg shadow-indigo-500/20">
              Meet Me
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
