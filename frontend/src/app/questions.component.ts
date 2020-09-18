import  {Component} from '@angular/core'
import {AppService} from './api.service'
import {ActivatedRoute} from '@angular/router'

@Component ({
    selector: 'questions',
    templateUrl:'./questions.component.html' 
})

export class QuestionsComponent {
titile:"My Quetion"
question:any ={};
questions;

constructor(private api:AppService,private route:ActivatedRoute){
}
ngOnInit(){
    var quizId= this.route.snapshot.paramMap.get('quizId')
    this.api.getQuestions(quizId).subscribe(res=>{
        this.questions = res;
    });
}

post(question){
    this.api.postQuestion(question);
  }
}
