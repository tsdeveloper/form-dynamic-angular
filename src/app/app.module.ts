import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form/dynamic-form-question/dynamic-form-question.component';
import {QuestionControlService} from './_service/question/question-control.service';
import {QuestionService} from './_service/question/question.service';

@NgModule({
  declarations: [
    AppComponent,

    DynamicFormComponent,
    DynamicFormQuestionComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [QuestionControlService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
