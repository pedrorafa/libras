import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    public focus;
    public focus1;

    private apiHost = 'https://api-libras.herokuapp.com/auth/'

    public user: String
    public pass: String

    constructor(private http: HttpClient, private router: Router) { }

    ngOnInit() { }

    login() {
        this.http.post(this.apiHost + 'login', {
            username: this.user,
            hash: this.pass
        }).subscribe(res => {
            console.log(res)
            if (res['auth']) {
                localStorage.setItem('token', res["token"])
                console.log(localStorage.getItem('token'))
                this.router.navigate(['/class'], { state: {} })
            } 
            else
                alert("Login errado, tente novamente!")
        }, error => {
            alert("Login inválido!")
        })
    }
}
