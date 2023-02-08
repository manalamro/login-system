import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
providedIn: 'root'
})

export class ApiService {
baseUrl : string = "http://localhost/my-project/php";

constructor(private httpClient : HttpClient) { }
public servicelogin(username:any, password:any) {
    console.log("hey from service file!");
    localStorage.setItem('username',username);
    return this.httpClient.post<any>(this.baseUrl + '/login.php',{ username, password })
        .pipe(map(user => {
            console.log("username"+ user.username);
            this.setToken(user.username);
            // return user;
        }));
}

setToken(token:string){
    localStorage.setItem('token',token);
}

}
