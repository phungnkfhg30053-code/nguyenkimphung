export interface ClimateTopic {
  id: string;
  title: string;
  badge: string;
  summary: string;
  details: string[];
  icon: string;
  image: string;
  stat?: {
    value: string;
    label: string;
  };
}

export interface HauGiangDistrict {
  id: string;
  name: string;
  type: "Thành phố" | "Thị xã" | "Huyện";
  area: string;
  population: string;
  climateRisks: string[];
  vulnerabilityLevel: "Rất cao" | "Cao" | "Trung bình";
  salinityRisk: string; // e.g., "3 - 8‰ vào tháng 3-5"
  erosionHotspots: string;
  adaptationModels: string[];
  highlight: string;
  coordinates: { x: number; y: number }; // Relative position on schematic map
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: [string, string, string, string];
  correctAnswer: number; // 0, 1, 2, 3
  explanation: string;
  difficulty: "dễ" | "trung bình" | "khó";
  prize: string;
}

export interface TrueFalseQuestion {
  id: number;
  statement: string;
  isTrue: boolean;
  explanation: string;
  topic: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  source?: string;
}
