import {Component} from '@angular/core'
import {FormBuilder, Validators} from '@angular/forms'
import {AuthService} from './auth.service'

@Component({
    selector:'register',
    templateUrl:'./register.component.html'
})

export class RegisterComponent{
    form
    constructor(private Fb:FormBuilder,
        public auth:AuthService){
        this.form = Fb.group({
            email:['',Validators.required],
            password:['',Validators.required]
        })
    }

}