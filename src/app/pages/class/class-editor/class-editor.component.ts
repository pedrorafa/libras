import { Class } from './../../../models/class';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-class-editor',
  templateUrl: './class-editor.component.html',
  styleUrls: ['./class-editor.component.scss']
})
export class ClassEditorComponent implements OnInit {

  private apiHost = 'https://api-libras.herokuapp.com/api/'

  public actualClass: Class
  public games: any

  public IdGame: String

  public focus: boolean
  public focus1: boolean
  public focus2: boolean


  constructor(private http: HttpClient) { }

  loadGames() {
    this.http.get(this.apiHost + 'games').subscribe(res => {
      this.games = res
      this.onChange({ _id: !this.actualClass.idGames[0] ? null : this.actualClass.idGames[0] })
    })
  }

  save() {
    this.actualClass.idGames = [this.IdGame];

    this.http.put(this.apiHost + 'class/' + this.actualClass._id, this.actualClass)
      .subscribe(res => {
        console.log(res)
        alert('Aula salva!')
      })
  }
  onChange(newValue) {
    this.IdGame = newValue;

  }

  ngOnInit() {
    this.loadGames()
    this.actualClass = history.state

    console.log(this.actualClass)
  }
}
