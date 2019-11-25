import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-class-view',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.loadClasses()
  }

  loadClasses() {
    let params = new HttpParams()
      .set('x-access-token', localStorage.getItem('token'))
    this.http.get(this.apiHost + 'class', { params })
      .subscribe(res => {
        this.classes = res
      })
  }
  public classes = {}
  public showEditor = false
  private apiHost = 'https://api-libras.herokuapp.com/api/'

  play(data) {
    this.router.navigate(['/' + data.idGames[0]]);
  }
}
