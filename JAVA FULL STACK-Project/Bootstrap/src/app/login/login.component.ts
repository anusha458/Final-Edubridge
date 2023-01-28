import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private ps:LoginServiceService) { }
  insertData(insert:any){
    this.ps.insertService(insert.value).subscribe();
    alert("Login Submitted successfully")
    
  }
  ngOnInit(): void {
  }
  registerForm =new FormGroup({
    uname: new FormControl("",[Validators.required, Validators.email]),
    pwd: new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    
  });
  registerSubmited(){
    console.log(this.registerForm.get("uname"));
  }

  get Email(): FormControl{
    return this.registerForm.get("uname") as FormControl;
  }
  get Pwd(): FormControl{
    return this.registerForm.get("pwd") as FormControl;
  }
  

}
