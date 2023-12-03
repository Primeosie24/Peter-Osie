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
      correctAnswerId: 'B',
      cardBackgroundColor: 'Green',
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
      correctAnswerId: 'C',
      cardBackgroundColor: 'Orange',
    },
    // Add more difficult Bible questions...
    {
      id: 3,
      title: 'What is the shortest verse in the Bible?',
      description: '',
      answers: [
        { id: 'A', content: 'Jesus wept' },
        { id: 'B', content: 'For I know the plans I have for you' },
        { id: 'C', content: 'The Lord is my shepherd' },
        { id: 'D', content: 'In the beginning was the Word' }
      ],
      correctAnswerId: 'A',
      cardBackgroundColor: 'Teal',
    },
    {
      id: 4,
      title: 'How many books are in the New Testament?',
      description: '',
      answers: [
        { id: 'A', content: '23' },
        { id: 'B', content: '27' },
        { id: 'C', content: '29' },
        { id: 'D', content: '33' }
      ],
      correctAnswerId: 'B',
      cardBackgroundColor: 'sea-blue',
    },
    // Add more difficult Bible questions...
  ];

  getQuestions(): Question[] {
    return this.questions;
  }

  getQuestionById(id: number): Question | undefined {
    return this.questions.find(question => question.id === id);
  }
  getDefaultQuestion(title: string, description: string): Question {
    return {
      id: 0,
      title,
      description,
      answers: [],
      correctAnswerId: '',
      cardBackgroundColor: 'purple'
    };
  }
  addAnswer(questionId: number, answer: Answer): void {
    const question = this.getQuestionById(questionId);

    if (question) {
      question.answers.push(answer);
    } else {
      console.error(`Question with ID ${questionId} not found.`);
    }
  }
  getNextQuestion(currentQuestionId: number): Question | undefined {
    const currentIndex = this.questions.findIndex(question => question.id === currentQuestionId);

    // If the current question is found and not the last one, return the next question
    if (currentIndex !== -1 && currentIndex < this.questions.length - 1) {
      return this.questions[currentIndex + 1];
    }

    // Return undefined if there is no next question
    return undefined;
  }
}
