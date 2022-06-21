export interface Strategy {
  name: string;
  network: string;
  params: Record<string, unknown>;
}

export interface SingleChoiceVote {
  choice: number;
  balance: number;
  scores: number[];
}
