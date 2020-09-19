import {Component} from '@angular/core'
import {FormBuilder, Validators} from '@angular/forms'
import {AuthService} from './auth.service'

@Component({
    selector:'login',
    templateUrl:'./login.component.html'
})

export class LoginComponent{
    form
    constructor(private Fb:FormBuilder,
        public auth:AuthService){
        this.form = Fb.group({
            email:['',Validators.required],
            password:['',Validators.required]
        })
    }

}