import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    this.http.get(this.apiHost + 'class')
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
