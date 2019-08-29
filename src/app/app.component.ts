import { Component } from '@angular/core';
import { QuestionService } from './_service/question/question.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-dynamic';
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
    
  }
}
