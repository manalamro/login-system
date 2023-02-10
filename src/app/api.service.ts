import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
providedIn: 'root'
})

export class ApiService {
baseUrl : string = "http://localhost/my-project/php/login.php";

constructor(private httpClient : HttpClient) { }

public servicelogin(username:any, password:any) {
    // console.log("hey from service file!");
    // localStorage.setItem('username',username);
   
    return this.httpClient.post('http://localhost/my-project/php/login.php',{username, password},{responseType: 'text'} )
        .pipe(map(user => {
            return user;
        }));
} 



}
