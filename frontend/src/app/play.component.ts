import  {Component} from '@angular/core'
import {AppService} from './api.service'
@Component ({
    selector: 'play',
    templateUrl:'./play.component.html' 
})

export class PlayComponent {
titile:"Play Quiz"
quizzes

constructor(private api:AppService){
}
    ngOnInit(){
        this.api.getAllQuizzes().subscribe(res=>{
            this.quizzes=res;
        })
    }
}
