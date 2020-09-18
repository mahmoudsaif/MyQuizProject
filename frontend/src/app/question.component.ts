import  {Component} from '@angular/core'
import {AppService} from './api.service'
import {ActivatedRoute} from '@angular/router'

@Component ({
    selector: 'question',
    templateUrl:'./question.component.html' 
})

export class QuestionComponent {
titile:"My Quetion"
question:any ={};
quizId:any;

constructor(private api:AppService,
  private route:ActivatedRoute){
}
ngOnInit(){
  this.quizId = this.route.snapshot.paramMap.get('quizId');
  this.api.questionSelected.subscribe(question=>question=question);
}

post(question){
    question.quizId = this.quizId;
    //console.log(question);
    this.api.postQuestion(question);
  }
}
