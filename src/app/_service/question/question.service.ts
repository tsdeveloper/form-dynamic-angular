import { Injectable }       from '@angular/core';
import { QuestionBase } from '../../model/question/question-base';
import { DropdownType } from '../../model/forms/type/dropdown-type';
import { TextboxType } from '../../model/forms/type/textbox-type';




@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownType({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxType({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxType({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new TextboxType({
        key: 'address',
        label: 'Address',
        order: 2
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
