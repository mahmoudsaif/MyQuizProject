import { Component } from '@angular/core';
import {QuestionComponent} from './question.component'

@Component({
  selector: 'app-root',
  template: '<nav></nav><router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My App';
}
