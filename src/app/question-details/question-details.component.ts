// src/app/question-details/question-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../question.service';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss']
})
export class QuestionDetailsComponent implements OnInit {
  question: Question = { id: 0, title: '', description: '', answers: [], correctAnswerId: '' };
  selectedAnswerId: string | null = null;


  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    const paramMap = this.route.snapshot.paramMap;
    const questionIdString = paramMap?.get('id');
    const questionId = questionIdString ? +questionIdString : NaN;

    if (!isNaN(questionId)) {
      const foundQuestion = this.questionService.getQuestionById(questionId);
      this.question = foundQuestion || this.getDefaultQuestion('Not Found', 'Question not found');
    } else {
      this.question = this.getDefaultQuestion('Invalid ID', 'Invalid question ID');
    }
  }

  private getDefaultQuestion(title: string, description: string): Question {
    return {
      id: 0,
      title,
      description,
      answers: [],
      correctAnswerId: ''
    };
  }
  onAnswerSelected(answerId: string): void {
    this.selectedAnswerId = answerId;
  }

  submitAnswer(): void {
    if (this.selectedAnswerId === this.question.correctAnswerId) {
      alert('Correct Answer!');
    } else {
      alert('Incorrect Answer!');
    }

    // Reset selected answer after submission
    this.selectedAnswerId = null;
  }
}
