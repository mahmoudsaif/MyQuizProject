import {Component} from '@angular/core'
import {AppService} from './api.service'

@Component({
selector:'quiz',
templateUrl:'./quiz.component.html'
})

export class QuizComponent{
quiz:any ={}
constructor(private api:AppService){}

ngOnInit(){
this.api.quizSelected.subscribe(quiz=>this.quiz=quiz)
}


}