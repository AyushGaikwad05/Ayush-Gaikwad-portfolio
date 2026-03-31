import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Let's <span className="text-indigo-400">Collaborate</span></h2>
          <p className="text-slate-400">Currently open to freelance development and internship opportunities.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400"><Mail size={24} /></div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Email Me</p>
                <p className="text-slate-200 truncate">ayushgaikwad0605@gmail.com</p>
              </div>
            </div>
            <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-violet-500/10 rounded-xl text-violet-400"><MapPin size={24} /></div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Location</p>
                <p className="text-slate-200">Sangamner, Maharashtra, India</p>
              </div>
            </div>
            <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400"></div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">GitHub</p>
                <p className="text-slate-200">@ayushgaikwad05</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="p-8 bg-slate-900/30 border border-slate-800 rounded-3xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required placeholder="Your Name" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-700 text-slate-100" />
                <input required type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-700 text-slate-100" />
              </div>
              <input required placeholder="Subject" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-700 text-slate-100" />
              <textarea required rows="5" placeholder="Tell me about your project..." className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-700 resize-none text-slate-100"></textarea>
              <button 
                disabled={formStatus === 'sending' || formStatus === 'success'}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 ${
                  formStatus === 'success' ? 'bg-emerald-600' : 'bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/20 text-white'
                }`}
              >
                {formStatus === 'sending' ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : 
                 formStatus === 'success' ? <span className="text-white">Message Sent Successfully</span> : <><Send size={18} /> <span className="text-white">Send Message</span></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
