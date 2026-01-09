export interface TestSummary {
  id: string;
  title: string;
  description?: string;
  completed?: boolean;
  score?: number;
}

export interface SavedPaper {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
  type?: string;
  createdAt?: string;
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
}

