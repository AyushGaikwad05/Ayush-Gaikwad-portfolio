import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-900 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm">
        <div>© 2026 Ayush Gaikwad. CS Engineering Student.</div>
        <div className="flex gap-8">
          <a href="https://github.com/ayushgaikwad05" className="hover:text-indigo-400 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/ayush-gaikwad05" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
        </div>
        <div className="flex items-center gap-2">Build with ♥</div>
      </div>
    </footer>
  );
};

export default Footer;
