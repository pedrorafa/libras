import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.scss']
})
export class ClassViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.classes.push({
      idGames:[],
      Level: 1,
      Duration: 10,
      createAt: new Date()
    })
  }
  public classes = []
}
