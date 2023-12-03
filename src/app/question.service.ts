// src/app/question.service.ts
import { Injectable } from '@angular/core';
import { Question } from './models/question.model';
import { Answer } from './models/answer.models';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questions: Question[] = [
    {
      id: 1,
      title: 'Who wrote the Book of Revelation?',
      description: '',
      answers: [
        { id: 'A', content: 'Paul' },
        { id: 'B', content: 'John' },
        { id: 'C', content: 'Matthew' },
        { id: 'D', content: 'Luke' }
      ],
      correctAnswerId: 'B'
    },
    {
      id: 2,
      title: 'Which prophet was swallowed by a great fish?',
      description: '',
      answers: [
        { id: 'A', content: 'Isaiah' },
        { id: 'B', content: 'Jeremiah' },
        { id: 'C', content: 'Jonah' },
        { id: 'D', content: 'Ezekiel' }
      ],
      correctAnswerId: 'C'
    },
    // Add more difficult Bible questions...
    {
      id: 11,
      title: 'What is the shortest verse in the Bible?',
      description: '',
      answers: [
        { id: 'A', content: 'Jesus wept' },
        { id: 'B', content: 'For I know the plans I have for you' },
        { id: 'C', content: 'The Lord is my shepherd' },
        { id: 'D', content: 'In the beginning was the Word' }
      ],
      correctAnswerId: 'A'
    },
    {
      id: 12,
      title: 'How many books are in the New Testament?',
      description: '',
      answers: [
        { id: 'A', content: '23' },
        { id: 'B', content: '27' },
        { id: 'C', content: '29' },
        { id: 'D', content: '33' }
      ],
      correctAnswerId: 'B'
    },
    // Add more difficult Bible questions...
  ];

  getQuestions(): Question[] {
    return this.questions;
  }

  getQuestionById(id: number): Question | undefined {
    return this.questions.find(question => question.id === id);
  }

  addAnswer(questionId: number, answer: Answer): void {
    const question = this.getQuestionById(questionId);

    if (question) {
      question.answers.push(answer);
    } else {
      console.error(`Question with ID ${questionId} not found.`);
    }
  }
}
