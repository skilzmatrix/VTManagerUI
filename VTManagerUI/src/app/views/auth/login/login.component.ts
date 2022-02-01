import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {HttpClient} from "@angular/common/http";
import {baseUrl} from "../../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean | undefined;
  formGroup: FormGroup | any;
  constructor(
    private authService:AuthService,
    private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username:'',
      password:''
    })
  }
  submit():void{
    this.http.post(`${baseUrl}users/login`,this.formGroup.getRawValue(),{
      withCredentials:false
    }).subscribe(() =>this.router.navigate(['/']));
  }



}
