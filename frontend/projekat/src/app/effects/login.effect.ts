import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core'
import {Actions,createEffect,ofType} from '@ngrx/effects'
import { loginAction, loginActionSuccess } from '../actions/login.action';
import { map, switchMap } from 'rxjs';
@Injectable()
export class LoginEffects{
    constructor(private actions$:Actions,private http:HttpClient){}

   /* login$=createEffect(()=>
    this.actions$.pipe(
        ofType(loginAction),
        switchMap((action)=>
        this.http.post('http://localhost:3000/auth/login',{username:'pexollini',password:'princered102'},{headers:new HttpHeaders({
            'Content-Type':'application/json'
        })}).pipe(
            map((response:any)=>{
                return loginActionSuccess({token:response.token});
            })
        ))
    ));*/
}