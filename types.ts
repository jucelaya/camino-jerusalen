
export enum InteractionType {
  QUIZ = 'QUIZ',
  TRAFFIC_LIGHT = 'TRAFFIC_LIGHT',
  REFLECTION = 'REFLECTION',
  TRUE_FALSE = 'TRUE_FALSE',
  MATCHING = 'MATCHING',
  WORD_PUZZLE = 'WORD_PUZZLE',
  SORTING = 'SORTING'
}

export interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export interface MatchingPair {
  id: string;
  left: string;
  right: string;
}

export interface Interaction {
  type: InteractionType;
  question: string;
  options?: QuizOption[];
  pairs?: MatchingPair[];
  correctValue?: boolean;
  instruction?: string;
  placeholder?: string;
  puzzleWord?: string;
  puzzleHint?: string;
  sortingItems?: { id: string, text: string, order: number }[];
}

export interface BibleVerse {
  reference: string;
  insight: string;
}

export interface PageContent {
  id: number;
  title: string;
  subtitle: string;
  centralIdea: string;
  teachingPoints: string[];
  mainMessage: string;
  verses: BibleVerse[]; // Actualizado de string[] a BibleVerse[]
  keyQuote?: string;
  reading?: string;
  interactions: Interaction[];
}

export interface ChapterData {
  title: string;
  pages: PageContent[];
}
