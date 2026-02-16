
import React, { useState, useEffect } from 'react';
import { Interaction, InteractionType } from '../types';

interface Props {
  interaction: Interaction;
  pageTitle: string;
}

export const InteractionView: React.FC<Props> = ({ interaction, pageTitle }) => {
  const [reflection, setReflection] = useState('');
  const [staticInsight, setStaticInsight] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [tfAnswer, setTfAnswer] = useState<boolean | null>(null);
  const [trafficColor, setTrafficColor] = useState<string | null>(null);
  
  // States for Matching Game
  const [matchingSelections, setMatchingSelections] = useState<{left: string | null, right: string | null}>({left: null, right: null});
  const [completedPairs, setCompletedPairs] = useState<string[]>([]);
  const [wrongMatch, setWrongMatch] = useState(false);

  // States for Word Puzzle
  const [puzzleInput, setPuzzleInput] = useState<string[]>([]);
  const [isPuzzleSolved, setIsPuzzleSolved] = useState(false);

  // States for Sorting Game
  const [sortingItems, setSortingItems] = useState<{ id: string, text: string, order: number }[]>([]);
  const [isSortedCorrectly, setIsSortedCorrectly] = useState(false);

  useEffect(() => {
    if (interaction.type === InteractionType.WORD_PUZZLE && interaction.puzzleWord) {
      setPuzzleInput(new Array(interaction.puzzleWord.length).fill(''));
    }
    if (interaction.type === InteractionType.SORTING && interaction.sortingItems) {
      // Shuffle items for sorting
      setSortingItems([...interaction.sortingItems].sort(() => Math.random() - 0.5));
    }
  }, [interaction]);

  const handleReflectionSubmit = () => {
    if (!reflection.trim()) return;
    setIsLoading(true);
    // Simulating deep analysis with static local logic
    setTimeout(() => {
      const insights = [
        "Tu reflexión demuestra una profunda comprensión del discipulado. ¡Sigue adelante!",
        "Es valioso identificar estas áreas en tu vida. La gracia de Dios te fortalece.",
        "Analizar el corazón es el primer paso para la transformación real en el Reino.",
        "Excelente análisis. Recuerda que el seguimiento a Jesús es diario y radical."
      ];
      setStaticInsight(insights[Math.floor(Math.random() * insights.length)]);
      setIsLoading(false);
    }, 800);
  };

  const handlePuzzleInput = (index: number, val: string) => {
    const newVal = val.toUpperCase().slice(-1);
    const newPuzzle = [...puzzleInput];
    newPuzzle[index] = newVal;
    setPuzzleInput(newPuzzle);

    if (newPuzzle.join('') === interaction.puzzleWord) {
      setIsPuzzleSolved(true);
    }
    
    if (newVal && index < (interaction.puzzleWord?.length || 0) - 1) {
      const nextInput = document.getElementById(`puzzle-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleMatch = (type: 'left' | 'right', val: string) => {
    setWrongMatch(false);
    const newSelections = { ...matchingSelections, [type]: val };
    setMatchingSelections(newSelections);

    if (newSelections.left && newSelections.right) {
      const pair = interaction.pairs?.find(p => p.left === newSelections.left && p.right === newSelections.right);
      if (pair) {
        setCompletedPairs([...completedPairs, pair.id]);
        setMatchingSelections({left: null, right: null});
      } else {
        setWrongMatch(true);
        setTimeout(() => {
          setMatchingSelections({left: null, right: null});
          setWrongMatch(false);
        }, 600);
      }
    }
  };

  const moveItem = (index: number, direction: 'up' | 'down') => {
    const newItems = [...sortingItems];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newItems.length) return;
    
    [newItems[index], newItems[targetIndex]] = [newItems[targetIndex], newItems[index]];
    setSortingItems(newItems);

    const isCorrect = newItems.every((item, idx) => item.order === idx + 1);
    if (isCorrect) setIsSortedCorrectly(true);
  };

  const renderInteraction = () => {
    switch (interaction.type) {
      case InteractionType.WORD_PUZZLE:
        return (
          <div className="space-y-4">
            <p className="text-[10px] text-indigo-400 font-bold italic mb-2">Pista: {interaction.puzzleHint}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {puzzleInput.map((char, i) => (
                <input
                  key={i}
                  id={`puzzle-${i}`}
                  type="text"
                  value={char}
                  onChange={(e) => handlePuzzleInput(i, e.target.value)}
                  className={`w-8 h-10 text-center text-lg font-black rounded-lg border-2 transition-all ${
                    isPuzzleSolved ? 'bg-green-500 border-green-600 text-white' : 'bg-white border-slate-100 focus:border-indigo-400'
                  }`}
                  disabled={isPuzzleSolved}
                />
              ))}
            </div>
            {isPuzzleSolved && (
              <div className="text-center animate-bounce text-green-600 font-black text-xs">
                ¡LOGRADO! <i className="fas fa-trophy ml-1"></i>
              </div>
            )}
          </div>
        );

      case InteractionType.SORTING:
        return (
          <div className="space-y-3">
            <p className="text-[10px] text-slate-400 mb-2 italic">Usa las flechas para ordenar:</p>
            <div className="space-y-2">
              {sortingItems.map((item, i) => (
                <div key={item.id} className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${isSortedCorrectly ? 'bg-green-50 border-green-500 text-green-700' : 'bg-white border-slate-50'}`}>
                  <span className="text-xs font-bold flex-1">{item.text}</span>
                  {!isSortedCorrectly && (
                    <div className="flex gap-1">
                      <button onClick={() => moveItem(i, 'up')} className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center"><i className="fas fa-chevron-up text-[10px]"></i></button>
                      <button onClick={() => moveItem(i, 'down')} className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center"><i className="fas fa-chevron-down text-[10px]"></i></button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {isSortedCorrectly && <div className="text-center text-green-600 font-black text-[10px] animate-pulse">¡ORDEN CORRECTO!</div>}
          </div>
        );

      case InteractionType.QUIZ:
        return (
          <div className="grid gap-2">
            {interaction.options?.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedOption(idx)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all active:scale-95 ${
                  selectedOption === idx
                    ? opt.isCorrect
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : 'border-red-400 bg-red-50 text-red-800'
                    : 'border-slate-50 bg-white'
                }`}
              >
                <div className="flex justify-between items-center text-xs font-bold">
                  <span>{opt.text}</span>
                  {selectedOption === idx && (
                    <i className={`fas ${opt.isCorrect ? 'fa-check-circle' : 'fa-times-circle'}`}></i>
                  )}
                </div>
              </button>
            ))}
          </div>
        );

      case InteractionType.MATCHING:
        const leftItems = interaction.pairs?.map(p => p.left).filter(l => !completedPairs.includes(interaction.pairs?.find(pair => pair.left === l)?.id || '')) || [];
        const rightItems = [...(interaction.pairs?.map(p => p.right) || [])]
          .sort(() => 0.5 - Math.random())
          .filter(r => !completedPairs.includes(interaction.pairs?.find(pair => pair.right === r)?.id || ''));

        return (
          <div className={`space-y-3 transition-transform ${wrongMatch ? 'animate-shake' : ''}`}>
            {completedPairs.length === (interaction.pairs?.length || 0) ? (
              <div className="bg-green-600 text-white p-4 rounded-2xl text-center font-black text-xs animate-bounce shadow-lg">
                ¡CONCEPTOS UNIDOS! <i className="fas fa-link ml-2"></i>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  {leftItems.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleMatch('left', item)}
                      className={`w-full p-3 text-[10px] font-black uppercase rounded-xl border-2 transition-all ${
                        matchingSelections.left === item ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-100 bg-white text-slate-500'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div className="space-y-2">
                  {rightItems.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleMatch('right', item)}
                      className={`w-full p-3 text-[10px] font-black uppercase rounded-xl border-2 transition-all ${
                        matchingSelections.right === item ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-100 bg-white text-slate-500'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case InteractionType.TRAFFIC_LIGHT:
        return (
          <div className="flex justify-center gap-6 py-2">
            {[
              { color: 'red', icon: 'fa-stop-circle', label: 'Alto' },
              { color: 'yellow', icon: 'fa-exclamation-triangle', label: 'Pausa' },
              { color: 'green', icon: 'fa-play-circle', label: 'Sigo' }
            ].map((btn) => (
              <button
                key={btn.color}
                onClick={() => setTrafficColor(btn.color)}
                className={`flex flex-col items-center gap-2 transition-all ${
                  trafficColor === btn.color ? 'scale-110 opacity-100' : 'opacity-30'
                }`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg ${
                  btn.color === 'red' ? 'bg-red-500 shadow-red-200' : btn.color === 'yellow' ? 'bg-yellow-400 shadow-yellow-200' : 'bg-green-500 shadow-green-200'
                }`}>
                  <i className={`fas ${btn.icon} text-xl`}></i>
                </div>
                <span className="text-[9px] font-black uppercase text-slate-400">{btn.label}</span>
              </button>
            ))}
          </div>
        );

      case InteractionType.REFLECTION:
        return (
          <div className="space-y-4">
            <div className="relative group">
              <textarea
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
                placeholder={interaction.placeholder}
                className="w-full h-24 p-4 rounded-2xl border-2 border-slate-50 focus:border-indigo-200 focus:ring-0 outline-none transition-all resize-none bg-white shadow-inner text-sm font-medium"
              />
              <button
                disabled={isLoading || !reflection.trim()}
                onClick={handleReflectionSubmit}
                className="absolute bottom-3 right-3 w-10 h-10 bg-indigo-900 text-white rounded-xl flex items-center justify-center shadow-lg active:scale-90 disabled:opacity-30"
              >
                {isLoading ? <i className="fas fa-cog fa-spin"></i> : <i className="fas fa-check text-xs"></i>}
              </button>
            </div>
            {staticInsight && (
              <div className="bg-slate-900 p-5 rounded-2xl rounded-tr-none shadow-2xl animate-fade-in-up border border-indigo-500/30">
                <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[8px] font-black uppercase text-indigo-400 tracking-[0.2em]">SISTEMA ANALÍTICO LOCAL</span>
                </div>
                <p className="text-indigo-50 text-[11px] font-medium leading-relaxed italic">
                  <i className="fas fa-quote-left text-[8px] mr-2 text-indigo-400"></i>
                  {staticInsight}
                </p>
              </div>
            )}
          </div>
        );

      case InteractionType.TRUE_FALSE:
        return (
          <div className="flex gap-3">
            {[true, false].map((val) => (
              <button
                key={val.toString()}
                onClick={() => setTfAnswer(val)}
                className={`flex-1 py-4 rounded-2xl font-black text-xs tracking-widest transition-all ${
                  tfAnswer === val 
                    ? (interaction.correctValue === val ? 'bg-green-600 text-white shadow-green-200' : 'bg-red-600 text-white shadow-red-200')
                    : 'bg-white border-2 border-slate-50 text-slate-400'
                }`}
              >
                {val ? 'VERDADERO' : 'FALSO'}
              </button>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white/70 rounded-[2.5rem] p-6 border border-white shadow-xl backdrop-blur-md">
      <div className="flex items-center gap-2 mb-5">
         <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center">
            <i className={`fas ${interaction.type === InteractionType.WORD_PUZZLE ? 'fa-puzzle-piece' : interaction.type === InteractionType.SORTING ? 'fa-sort-amount-down' : 'fa-bolt'} text-[10px] text-indigo-500`}></i>
         </div>
         <h3 className="text-[11px] font-black text-slate-500 leading-tight uppercase tracking-wider">
           {interaction.question}
         </h3>
      </div>
      {renderInteraction()}
    </div>
  );
};
