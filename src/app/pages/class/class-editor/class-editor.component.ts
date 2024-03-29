import { Router } from '@angular/router';
import { Class } from './../../../models/class';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-class-editor',
  templateUrl: './class-editor.component.html',
  styleUrls: ['./class-editor.component.scss']
})
export class ClassEditorComponent implements OnInit {

  private apiHost = 'https://api-libras.herokuapp.com/api/'

  public actualClass: Class
  public games: any

  public IdGame: any

  public focus: boolean
  public focus1: boolean
  public focus2: boolean
  public focus3: boolean

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.loadGames()
    this.actualClass = history.state
  }

  loadGames() {
    let params = new HttpParams()
      .set('x-access-token', localStorage.getItem('token'))

    this.http.get(this.apiHost + 'games', { params }).subscribe(res => {
      this.games = res
      this.onChange(!this.actualClass.idGames[0] ? null : this.actualClass.idGames[0])
    }, error => {
      alert('Sua sessão está indisponível, entre no sistema novamente por favor...')
      localStorage.clear()
      this.router.navigate(['/'])
    })
  }

  save() {
    this.actualClass.idGames = [this.IdGame];
    let strDate = '' + this.actualClass.ClassDate
    this.actualClass.ClassDate = new Date(
      Number(strDate.substr(0, 4)),
      Number(strDate.substr(5, 2)) -1,
      Number(strDate.substr(8, 2)),
      0, 0, 0, 0)
    let params = new HttpParams()
      .set('x-access-token', localStorage.getItem('token'))

    this.http.put(this.apiHost + 'class/' + this.actualClass._id, this.actualClass, { params })
      .subscribe(res => {
        console.log(res)
        alert('Aula salva!')
        this.router.navigate(['/class'], { state: {} });
      }, error => {
        alert('Sua sessão está indisponível, entre no sistema novamente por favor...')
        localStorage.clear()
        this.router.navigate(['/'])
      })
  }
  onChange(newValue) {
    this.IdGame = newValue;
  }
}
