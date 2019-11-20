import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    focus;
    focus1;

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
            localStorage.setItem('token', res["token"])
            this.router.navigate(['/class'], { state: {} })
        })
    }
}
