// src/app/answer-form/answer-form.component.ts
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuestionService } from '../question.service';
import { Answer } from '../models/answer.models';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.scss']
})
export class AnswerFormComponent {
  @Input() questionId: number = 0;

  constructor(private questionService: QuestionService) { }

  submitAnswer(form: NgForm): void {
    const content = form.value.content;
    const answer: Answer = { id: Date.now(), content };
    this.questionService.addAnswer(this.questionId, answer);
    form.reset();
  }
}
