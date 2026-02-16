
import React, { useState, useEffect } from 'react';
import { chapter7Data } from './data/chapter7';
import { PageContent, BibleVerse } from './types';
import { InteractionView } from './components/InteractionView';

const App: React.FC = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedVerse, setSelectedVerse] = useState<BibleVerse | null>(null);

  const currentPage = chapter7Data.pages[currentPageIndex];

  useEffect(() => {
    setProgress(((currentPageIndex + 1) / chapter7Data.pages.length) * 100);
  }, [currentPageIndex]);

  const handleNext = () => {
    if (currentPageIndex < chapter7Data.pages.length - 1) {
      setCurrentPageIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsCompleted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleVerseClick = (verse: BibleVerse) => {
    setSelectedVerse(verse);
  };

  const closeVerseModal = () => {
    setSelectedVerse(null);
  };

  if (!hasStarted) {
    return (
      <div className="fixed inset-0 bg-[#0A0E1A] flex flex-col items-center justify-center p-8 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
           <div className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px]"></div>
           <div className="absolute bottom-[-20%] left-[-20%] w-[400px] h-[400px] bg-purple-600 rounded-full blur-[100px]"></div>
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        </div>

        <div className="relative z-10 space-y-10 max-w-sm">
          <div className="relative inline-block">
            <div className="w-28 h-28 bg-white/5 backdrop-blur-2xl rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl border border-white/10 transform -rotate-6 transition-transform hover:rotate-0 duration-500">
              <i className="fas fa-brain text-5xl text-indigo-400"></i>
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center border-4 border-[#0A0E1A] animate-bounce">
              <i className="fas fa-rocket text-white text-xs"></i>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-center gap-1">
              <span className="text-[10px] font-black text-indigo-500 tracking-[0.3em] uppercase">Módulo Interactivo</span>
            </div>
            <h1 className="text-5xl font-black text-white leading-[0.9] tracking-tighter uppercase">
              CAMINO A <br/><span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400">JERUSALÉN</span>
            </h1>
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto"></div>
            <p className="text-indigo-200/60 font-medium text-sm">Capítulo 7: Resumen Dinámico</p>
          </div>

          <p className="text-slate-400 text-xs leading-relaxed px-6 opacity-80 font-medium">
            Una experiencia pedagógica profunda basada en el texto de Stuart Briscoe. Análisis interactivo con fundamento bíblico detallado.
          </p>

          <button 
            onClick={() => setHasStarted(true)}
            className="w-full bg-white text-[#0A0E1A] py-6 rounded-3xl font-black text-sm tracking-widest shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-4 group"
          >
            COMENZAR ANÁLISIS
            <i className="fas fa-play text-[10px] group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </div>
    );
  }

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-[#0A0E1A] p-6 text-center">
        <div className="max-w-md mx-auto py-10">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 text-white rounded-[1.5rem] flex items-center justify-center text-3xl mx-auto mb-6 shadow-2xl shadow-green-500/20">
            <i className="fas fa-check-double"></i>
          </div>
          <h2 className="text-3xl font-black text-white mb-2 tracking-tighter">ANÁLISIS COMPLETADO</h2>
          <p className="text-slate-400 mb-10 text-xs font-medium uppercase tracking-widest">Resumen Ejecutivo del Capítulo 7</p>
          
          <div className="space-y-4 mb-12">
            {chapter7Data.pages.map((page, idx) => (
              <div key={page.id} className="bg-white/5 backdrop-blur-md p-6 rounded-[2rem] border border-white/5 text-left group hover:bg-white/10 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest">Página {page.id}</span>
                  <div className="flex gap-2">
                    {page.verses.map((v, vi) => (
                      <button 
                        key={vi} 
                        onClick={() => handleVerseClick(v)}
                        className="text-[8px] font-bold text-slate-500 border border-slate-700 px-1.5 py-0.5 rounded uppercase hover:bg-slate-700 hover:text-white transition-colors"
                      >
                        {v.reference}
                      </button>
                    ))}
                  </div>
                </div>
                <h4 className="text-white text-sm font-black mb-2 uppercase tracking-tight">{page.title}</h4>
                <p className="text-slate-300 text-[11px] leading-relaxed font-medium italic">
                  "{page.mainMessage}"
                </p>
              </div>
            ))}
          </div>

          <button 
            onClick={() => { setHasStarted(false); setIsCompleted(false); setCurrentPageIndex(0); }}
            className="w-full bg-indigo-600 text-white py-5 rounded-3xl font-black text-xs tracking-widest shadow-xl active:scale-95 transition-all mb-4"
          >
            REINICIAR EXPERIENCIA
          </button>
          
          <p className="text-slate-500 text-[9px] uppercase font-bold tracking-widest mt-8">
            Basado en el estudio de Stuart Briscoe
          </p>
        </div>

        {/* Modal Versículo Resumen */}
        {selectedVerse && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0A0E1A]/90 backdrop-blur-sm animate-fade-in">
             <div className="bg-white w-full max-w-xs rounded-[2.5rem] p-8 text-left shadow-2xl relative animate-pop-in">
                <button onClick={closeVerseModal} className="absolute top-6 right-6 text-slate-300 hover:text-slate-900 transition-colors">
                  <i className="fas fa-times"></i>
                </button>
                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                  <i className="fas fa-scroll text-lg"></i>
                </div>
                <h3 className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em] mb-2">Revelación Bíblica</h3>
                <h2 className="text-2xl font-black text-slate-900 mb-4">{selectedVerse.reference}</h2>
                <div className="h-0.5 w-12 bg-indigo-100 mb-6"></div>
                <p className="text-slate-600 text-sm font-medium leading-relaxed italic">"{selectedVerse.insight}"</p>
                <button 
                  onClick={closeVerseModal}
                  className="w-full mt-8 bg-[#0A0E1A] text-white py-4 rounded-2xl font-black text-[10px] tracking-widest uppercase shadow-xl"
                >
                  ENTENDIDO
                </button>
             </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col max-w-md mx-auto shadow-2xl relative">
      <header className="bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-100 p-5 pb-0">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#0A0E1A] rounded-xl flex items-center justify-center text-indigo-400 text-xs shadow-lg">
              <i className="fas fa-layer-group"></i>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-slate-800 text-[10px] uppercase tracking-tighter">Interacción {currentPageIndex + 1}</span>
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Camino a Jerusalén</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-black text-slate-400">PÁG</span>
            <span className="text-sm font-black text-indigo-600">{currentPage.id}</span>
          </div>
        </div>
        <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-1000 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-6 pb-32 space-y-8 bg-gradient-to-b from-white to-slate-50">
        <div className="animate-fade-in-up">
          <div className="flex justify-between items-end mb-2">
            <div>
              <span className="text-[9px] font-black text-indigo-600 uppercase tracking-widest block mb-1">Tema Central</span>
              <h2 className="text-3xl font-black text-slate-900 leading-[0.95] uppercase tracking-tighter">
                {currentPage.title}
              </h2>
            </div>
          </div>
          
          {/* Fundamento Bíblico Interactivo */}
          <div className="flex flex-wrap gap-2 mb-6 mt-2">
            <span className="text-[8px] font-black bg-slate-900 text-white px-2 py-1 rounded-md tracking-tighter uppercase flex items-center gap-1">
              <i className="fas fa-book-open text-[7px]"></i> Fundamento
            </span>
            {currentPage.verses.map((verse, idx) => (
              <button 
                key={idx} 
                onClick={() => handleVerseClick(verse)}
                className="text-[10px] font-black text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-1 rounded-md active:scale-95 transition-transform hover:bg-indigo-100"
              >
                {verse.reference}
              </button>
            ))}
          </div>

          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-wider mb-8 italic">{currentPage.subtitle}</p>

          <div className="space-y-6">
            <div className="bg-white p-7 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <i className="fas fa-quote-right text-7xl"></i>
              </div>
              <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-4 flex items-center gap-2">
                <i className="fas fa-lightbulb"></i> Idea Principal
              </h3>
              <p className="text-xl font-bold leading-tight text-slate-800 mb-6">"{currentPage.centralIdea}"</p>
              
              <div className="space-y-4">
                {currentPage.teachingPoints.map((pt, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0 group-hover:scale-150 transition-transform"></div>
                    <span className="text-[13px] font-semibold text-slate-600 leading-snug">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 pt-4">
              {currentPage.interactions.map((interaction, i) => (
                <InteractionView 
                  key={i} 
                  interaction={interaction} 
                  pageTitle={currentPage.title}
                />
              ))}
            </div>

            {/* Mensaje Principal de la Página */}
            <div className="mt-8 p-8 bg-indigo-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden border-4 border-white/10">
              <div className="absolute top-[-10px] left-[-10px] opacity-10">
                <i className="fas fa-star text-8xl transform -rotate-12"></i>
              </div>
              <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-300 mb-4 flex items-center gap-2 relative z-10">
                <i className="fas fa-key text-[8px]"></i> Mensaje de Poder
              </h3>
              <p className="text-lg font-black leading-tight relative z-10 italic">
                "{currentPage.mainMessage}"
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Modal Versículo */}
      {selectedVerse && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0A0E1A]/80 backdrop-blur-md animate-fade-in">
           <div className="bg-white w-full max-w-xs rounded-[2.5rem] p-8 text-left shadow-2xl relative animate-pop-in">
              <button onClick={closeVerseModal} className="absolute top-6 right-6 text-slate-300 hover:text-slate-900 transition-colors">
                <i className="fas fa-times"></i>
              </button>
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                <i className="fas fa-scroll text-lg"></i>
              </div>
              <h3 className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em] mb-2">Mensaje del Versículo</h3>
              <h2 className="text-2xl font-black text-slate-900 mb-4">{selectedVerse.reference}</h2>
              <div className="h-0.5 w-12 bg-indigo-100 mb-6"></div>
              <p className="text-slate-600 text-sm font-medium leading-relaxed italic">"{selectedVerse.insight}"</p>
              <button 
                onClick={closeVerseModal}
                className="w-full mt-8 bg-[#0A0E1A] text-white py-4 rounded-2xl font-black text-[10px] tracking-widest uppercase shadow-xl active:scale-95 transition-transform"
              >
                CERRAR
              </button>
           </div>
        </div>
      )}

      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/95 backdrop-blur-2xl border-t border-slate-100 p-6 flex justify-between items-center z-50">
        <button
          onClick={() => { setCurrentPageIndex(prev => Math.max(0, prev - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          disabled={currentPageIndex === 0}
          className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center active:scale-90 transition-all disabled:opacity-5"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        
        <div className="flex-1 flex flex-col items-center">
           <div className="flex gap-1.5 mb-2">
              {chapter7Data.pages.map((_, i) => (
                  <div key={i} className={`w-1 h-1 rounded-full transition-all duration-500 ${currentPageIndex === i ? 'bg-indigo-600 scale-150' : 'bg-slate-200'}`} />
              ))}
          </div>
          <span className="text-[8px] font-black text-slate-300 uppercase tracking-[0.3em]">Página {currentPageIndex + 1} de {chapter7Data.pages.length}</span>
        </div>

        <button
          onClick={handleNext}
          className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all active:scale-90 ${
            currentPageIndex === chapter7Data.pages.length - 1 ? 'bg-green-600 shadow-green-200' : 'bg-[#0A0E1A] shadow-indigo-900/20'
          } text-white`}
        >
          <i className={`fas ${currentPageIndex === chapter7Data.pages.length - 1 ? 'fa-check-double' : 'fa-arrow-right'}`}></i>
        </button>
      </nav>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.9) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-pop-in {
          animation: popIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        body {
          background: #0A0E1A;
          overscroll-behavior-y: contain;
        }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default App;
