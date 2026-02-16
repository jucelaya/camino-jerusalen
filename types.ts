
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
  puzzleWord?: string; // For WORD_PUZZLE
  puzzleHint?: string;
  sortingItems?: { id: string, text: string, order: number }[]; // For SORTING
}

export interface PageContent {
  id: number;
  title: string;
  subtitle: string;
  centralIdea: string;
  teachingPoints: string[];
  keyQuote?: string;
  reading?: string;
  interactions: Interaction[];
}

export interface ChapterData {
  title: string;
  pages: PageContent[];
}
