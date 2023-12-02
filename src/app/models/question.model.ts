import { Answer } from "./answer.models";

export interface Question {
  id: number;
  title: string;
  description: string;
  answers: Answer[];
}
