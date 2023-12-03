import { Answer } from "./answer.models";

export interface Question {
cardBackgroundColor: any;
  id: number;
  title: string;
  description: string;
  answers: Answer[];
  correctAnswerId: any; // Add correctAnswerId property

}
