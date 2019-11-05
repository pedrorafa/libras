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
      _id: "dsafsasdgaswdfgdasd",
      idGames:[],
      Title:"Jogo da forca",
      Description: "Jogo da forca em libras para memorização do alfabeto e interação entre os alunos",
      Level: 1,
      Duration: 10,
      createAt: new Date()
    })
  }
  public classes = []
  private apiHost = 'https://api-libras.herokuapp.com/api/'
  
  editClass(){
    console.log("Editar "+this.classes[0]._id)
    fetch(this.apiHost + 'games').then(res => console.log(res))

  }
  addClass(){
    console.log("Adicionar nova classe")
  }
}
