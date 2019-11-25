import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.scss']
})
export class ClassViewComponent implements OnInit {

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

  editClass(data) {
    this.router.navigate(['/class-editor'], { state: data });

  }
  addClass() {
    this.router.navigate(['/class-editor'], { state: {} });
  }
}
