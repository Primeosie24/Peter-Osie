// src/app/question-details/question-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../question.service';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {
  question: Question = { id: 0, title: '', description: '', answers: [] };

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    const paramMap = this.route.snapshot.paramMap;

    if (paramMap) {
      const questionId = +(paramMap.get('id') ?? null)!;

      if (questionId !== null) {
        this.question = this.questionService.getQuestionById(questionId);
      } else {
        console.error('Question ID not found in the route parameters.');
      }
    } else {
      console.error('Route snapshot paramMap is null or undefined.');
    }
  }
}
