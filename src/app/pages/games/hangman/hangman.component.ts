import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import lettersImgData from 'assets/img/libras/alphabet/list.js'

@Component({
    selector: 'app-profile',
    templateUrl: './hangman.component.html',
    styleUrls: ['./hangman.component.scss']
})

export class HangmanComponent implements OnInit {

    constructor(private http: HttpClient, private router: Router) { }

    @ViewChild('canvas')
    canvas: ElementRef<HTMLCanvasElement>;

    private ctx: CanvasRenderingContext2D;
    private apiHost = 'https://api-libras.herokuapp.com/api/'

    ngOnInit() {
        this.startGame();
    }
    startGame() {
        let params = new HttpParams()
            .set('x-access-token', localStorage.getItem('token'))

        this.http.get(this.apiHost + 'games?Name=hangman', { params })
            .subscribe(res => {
                console.log(res)
                this.data = res[0].Data
                this.showWord();
            }, error => {
                alert('Sua sessão está indisponível, entre no sistema novamente por favor...')
                localStorage.clear()
                this.router.navigate(['/'])
            })
    }

    showWord(): void {
        let str = this.data.word.toUpperCase()
        this.word = ''
        for (var i = 0; i < str.length; i++)
            if (this.selectedLetters.find(letter => letter.value === str[i]))
                this.word += str[i] + ' '
            else
                this.word += '_ '

        if (this.word.search('_') < 0)
            this.getScore()
    }

    loseLife(): void {
        //this.ctx.fillRect(10, 10, 10, 10)
        this.data.lifes--;
        if (this.data.lifes === 0)
            this.getScore()
    }

    letterWasSelected(letter) {
        if (this.data.lifes > 0)
            return this.selectedLetters.find(item => letter === item.value)
    }

    selectLetter(letter) {
        if (!this.letterWasSelected(letter.value)) {
            this.selectedLetters.push(letter)
            this.showWord()
        }
        if (this.data.word.toUpperCase().search(letter.value) < 0)
            this.loseLife()
    }

    getScore() {
        this.word = 'A palavra era ' + this.word + ' !!! =D'

        this.data.score = 'Sua pontuação: ' +
            Math.round(this.data.word.length / this.selectedLetters.length * 100)

        let params = new HttpParams()
            .set('x-access-token', localStorage.getItem('token'))

        // this.http.post('users',{})
    }

    public lettersImg = lettersImgData
    public selectedLetters = []
    public word = ''
    public data = {
        word: '',
        tips: [],
        lifes: 0,
        score: undefined
    }
}
