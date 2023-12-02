// src/app/question.service.ts
import { Injectable } from '@angular/core';
import { Question } from './models/question.model';
import { Answer } from './models/answer.models';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  getQuestionById(questionId: number): Question {
    throw new Error('Method not implemented.');
  }
  addAnswer(questionId: number, answer: Answer) {
    throw new Error('Method not implemented.');
  }
  private questions: Question[] = [];

  getQuestions(): Question[] {
    return this.questions;
  }

  addQuestion(question: Question): void {
    this.questions.push(question);
  }
}
