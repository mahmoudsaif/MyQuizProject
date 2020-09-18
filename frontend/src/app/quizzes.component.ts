import  {Component} from '@angular/core'
import {AppService} from './api.service'

@Component ({
    selector: 'quizzes',
    templateUrl:'./quizzes.component.html' 
})

export class QuizzesComponent {
titile:"My Quetion"
quiz:any ={};
quizzes;

constructor(private api:AppService){
}
ngOnInit(){
    this.api.getQuizzes().subscribe(res=>{
        this.quizzes = res;
    });
}
}
