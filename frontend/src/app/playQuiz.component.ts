import  {Component} from '@angular/core'
import {AppService} from './api.service'
import { ActivatedRoute } from '@angular/router';
@Component ({
    selector: 'PlayQuiz',
    templateUrl:'./PlayQuiz.component.html' 
})

export class PlayQuizComponent {
questions
quizId


constructor(private api:AppService,
    private route:ActivatedRoute){
}
    ngOnInit(){
        this.quizId = this.route.snapshot.paramMap.get('quizId')

        this.api.getQuestions(this.quizId)
        .subscribe(res=>{
            this.questions=res;
            this.questions.forEach(q => {
                q.answers=[
                    q.correctAnswer,
                    q.answer1,q.answer2,
                    q.answer3
                ]
            });
        })
    }

    finish(){
      var correct=0;
      this.questions.forEach(q => {
          if(q.correctAnswer==q.selectAnswer)
          correct++
      });
      console.log(correct);
    }
    step=0;
    setStep(index:number){
        this.step=index
    }
    nextStep(){
        this.step++;
    }
    prevStep(){
        this.step--;
    }
}
