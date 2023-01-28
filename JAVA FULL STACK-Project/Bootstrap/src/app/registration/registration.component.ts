import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  constructor(private ps:RegistrationService) { }
insertData(insert:any){
  this.ps.insertService(insert.value).subscribe();
  alert("Registration Form  Submitted successfully")
  
}
  ngOnInit(): void {
  }
  registerForm =new FormGroup({
    name: new FormControl("",[Validators.required, Validators.minLength(8), Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("",[Validators.required, Validators.email]),
    pno: new FormControl("",[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]*")]),
    pswd: new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    cpswd: new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
  });

  registerSubmited(){
    console.log(this.registerForm.get("name"));
  }

  get Name(): FormControl{
    return this.registerForm.get("name") as FormControl;
  }
  get Email(): FormControl{
    return this.registerForm.get("email") as FormControl;
  }
  get Pno(): FormControl{
    return this.registerForm.get("pno") as FormControl;
  }
  get Pswd(): FormControl{
    return this.registerForm.get("pswd") as FormControl;
  }
  get Cpswd(): FormControl{
    return this.registerForm.get("cpswd") as FormControl;
  }

}
