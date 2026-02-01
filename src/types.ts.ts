export enum ESGStatus {
  LEADER = 'Leader',
  AVERAGE = 'Average',
  TRANSITION = 'Transition',
  DEVELOPING = 'Developing',
  PENDING = 'Pending'
}

export interface QuestionnaireOption {
  text: string;
  points: number;
}

export interface QuestionnaireQuestion {
  id: string;
  areaCode: string;
  areaName: string;
  level: string;
  question: string;
  options: QuestionnaireOption[];
}

export interface QuestionnaireBlock {
  id: string;
  title: string;
  weight: number;
  color: string;
  questions: QuestionnaireQuestion[];
}

export interface Supplier {
  id: string;
  name: string;
  nif: string;
  score: number;
  status: ESGStatus;
  questionnaireLevel: string;
  lastUpdated: string;
  certificationExpirationDate: string;
  certificationMethod: string;
  address: string;
  sector: string;
  country: string;
  paymentDetails: {
    amount: number;
    currency: string;
    date: string;
    iban: string;
  };
  evidences?: {
    id: string;
    name: string;
    uploadDate: string;
    type: string;
    size: string;
  }[];
}

export interface Contract {
  id: string;
  proposalId: string;
  contractDate: string;
  clientId: string;
  clientName: string;
  clientNif: string;
  clientAddress: string;
  clientSector: string;
  clientNace: string;
  manager: string;
  country: string;
  amount: number;
  currency: string;
  expirationDate: string;
  status: string;
  suppliers: Supplier[];
  spreadBonus: boolean;
  purpose: string;
  taxonomy?: {
    level1: string;
    level2: string;
    level3: string;
  };
  clientPerformance?: any;
}

export interface Request {
  id: string;
  clientName: string;
  type: string;
  date: string;
  amount: number;
  status: string;
}
