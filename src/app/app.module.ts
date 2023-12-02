import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { AnswerFormComponent } from './answer-form/answer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionDetailsComponent,
    AnswerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add this line

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
