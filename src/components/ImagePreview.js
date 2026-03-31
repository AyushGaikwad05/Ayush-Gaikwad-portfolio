import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const ImagePreview = ({ previewImage, setPreviewImage }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setPreviewImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [setPreviewImage]);

  if (!previewImage) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" 
        onClick={() => setPreviewImage(null)}
      ></div>
      <div className="relative max-w-5xl w-full max-h-full overflow-hidden bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl animate-in zoom-in duration-300 flex flex-col items-center justify-center">
        <button 
          onClick={() => setPreviewImage(null)}
          className="absolute top-4 right-4 z-10 p-2 bg-slate-950/50 hover:bg-rose-500 text-white rounded-full transition-all border border-slate-800"
        >
          <X size={20} />
        </button>
        <img 
          src={previewImage} 
          alt="Project Preview" 
          className="w-full h-auto object-contain max-h-[85vh]"
        />
        <div className="p-4 bg-slate-900 border-t border-slate-800 text-center w-full">
          <p className="text-slate-400 text-sm font-medium">Project Snapshot</p>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
