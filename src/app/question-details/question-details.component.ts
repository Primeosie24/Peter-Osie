import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss']
})
export class QuestionDetailsComponent implements OnInit {
  question: Question = {
    id: 0,
    title: '',
    description: '',
    answers: [],
    correctAnswerId: '',
    cardBackgroundColor: ''
  };
  selectedAnswerId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    const paramMap = this.route.snapshot.paramMap;
    const questionIdString = paramMap?.get('id');

    if (questionIdString) {
      const questionId = +questionIdString;

      if (!isNaN(questionId)) {
        const foundQuestion = this.questionService.getQuestionById(questionId);
        this.question = foundQuestion || this.questionService.getDefaultQuestion('Not Found', 'Question not found');
      } else {
        this.question = this.questionService.getDefaultQuestion('Invalid ID', 'Invalid question ID');
      }
    } else {
      // If no 'id' parameter is present in the route, set the question to the first question in the array
      const firstQuestion = this.questionService.getQuestions()[0];

      if (firstQuestion) {
        // Set the ID of the question to the ID of the first question in the array
        this.question = { ...firstQuestion };
      } else {
        console.error('No questions available.');
      }
    }
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

  loadNextQuestion(): void {
    const nextQuestion = this.questionService.getNextQuestion(this.question.id);

    if (nextQuestion) {
      console.log('Next Question ID:', nextQuestion.id);

      this.router.navigate(['/question', nextQuestion.id]);
    } else {
      console.warn('No next question available.');
    }
  }
}
