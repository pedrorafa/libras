import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.scss']
})
export class ClassViewComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadClasses()
  }

  loadClasses() {
    this.http.get(this.apiHost + 'class')
      .subscribe(res => {
        console.log(res)
        this.classes = res
      })
  }
  public classes = {}
  private apiHost = 'https://api-libras.herokuapp.com/api/'

  editClass() {
    console.log("Editar " + this.classes[0]._id)

  }
  addClass() {
    console.log("Adicionar nova classe")
  }
}
