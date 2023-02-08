import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators,FormBuilder } from "@angular/forms";
import { first } from "rxjs";
import { ApiService } from '../api.service';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    angForm: FormGroup;

constructor(private fb:FormBuilder,private dataService: ApiService) {
this.angForm = this.fb.group({
  username:['', [Validators.required]],
  password:['', [Validators.required]],
});
}

  ngOnInit(): void {}

  login(angForm:any){
    console.log("hey");
    console.log("entered username: "+angForm.value.username);
    console.log("entered password: "+angForm.value.password);
    this.dataService.servicelogin(angForm.value.username,
      angForm.value.password)
    .pipe(first()).subscribe(
        res => {
          console.log("res:"+ res);
            alert("perfect");
        },
      
        error => {
          alert("your password or username wrong :(");
        });
}

}
