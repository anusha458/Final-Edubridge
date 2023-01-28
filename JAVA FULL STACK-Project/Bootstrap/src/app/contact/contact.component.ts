import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../contact-service.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private ps:ContactServiceService) { }
  insertData(insert:any){
    this.ps.insertService(insert.value).subscribe();
    alert("Form Submission successful")
  }
  ngOnInit(): void {
  }
  registerForm =new FormGroup({
    name: new FormControl("",[Validators.required, Validators.minLength(8), Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("",[Validators.required, Validators.email]),
    no: new FormControl("",[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]*")]),
    msg: new FormControl("",[Validators.required])
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
    return this.registerForm.get("no") as FormControl;
  }
  get Msg(): FormControl{
    return this.registerForm.get("msg") as FormControl;
  }

}
