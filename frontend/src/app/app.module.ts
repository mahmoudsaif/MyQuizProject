import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {RouterModule} from '@angular/router'

import {MatToolbarModule} from '@angular/material/toolbar'
import { MatSliderModule } from '@angular/material/slider'; 
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {MatInputModule} from '@angular/material/input'
import {MatListModule} from '@angular/material/list'
import {MatFormFieldModule} from '@angular/material/form-field'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {QuestionComponent} from './question.component'
import {QuestionsComponent} from './questions.component'
import {HomeComponent} from './home.component'
import { NavComponent} from './nav.component'
import { QuizComponent}from './quiz.component'
import {QuizzesComponent} from './quizzes.component'
import {RegisterComponent} from './register.component'
import {AuthService} from './auth.service'
import {AppService} from './api.service'
import {AuthInterceptor} from './auth.interceptor'

const routes = [
  {path:'',component: HomeComponent},
  {path:'question',component: QuestionComponent},
  {path:'question/:quizId',component: QuestionComponent},
  {path:'quiz',component:QuizComponent},
  {path:'register', component:RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    HomeComponent,
    NavComponent,
    QuizComponent,
    QuizzesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,FormsModule
    ,RouterModule.forRoot(routes),
    AppRoutingModule, 
    BrowserAnimationsModule,MatSliderModule,MatListModule,
    MatButtonModule,MatCardModule,MatFormFieldModule,MatInputModule
    ,HttpClientModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [AppService,AuthService,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
