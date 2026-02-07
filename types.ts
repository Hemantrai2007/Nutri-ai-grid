
export interface Ingredient {
  name: string;
  impact: 'Neutral' | 'Harmful' | 'Healthy';
  details: string;
}

export interface MealSwap {
  level: 'Good' | 'Better' | 'Best';
  item: string;
  calories: number;
  protein: string;
  reason: string;
}

export interface AnalysisResult {
  dishName: string;
  healthScore: number;
  ingredients: Ingredient[];
  swaps: MealSwap[];
  concerns: string[];
}

export interface HistoryItem {
  id: string;
  timestamp: number;
  image: string; // Base64 image
  result: AnalysisResult;
}

export interface Vendor {
  id: string;
  name: string;
  rating: number;
  specialty: string;
  distance: string;
  tags: string[];
}
