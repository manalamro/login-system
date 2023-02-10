import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators,FormBuilder } from "@angular/forms";
import { first } from "rxjs";
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    angForm: FormGroup;
    
constructor(private fb:FormBuilder,private httpClient: HttpClient,private dataService:ApiService) {
this.angForm = this.fb.group({
  username:['', [Validators.required]],
  password:['', [Validators.required]],
});
}

  ngOnInit(): void {}


  login(angForm:any){
  
    this.dataService.servicelogin(angForm.value.username,
      angForm.value.password).subscribe(
        response => {
          console.log(response);
          alert(response);
        },
        error => console.log(error)
        )}

}


