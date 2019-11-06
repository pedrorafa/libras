import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import lettersImgData from 'assets/img/libras/alphabet/list.js'

@Component({
    selector: 'app-profile',
    templateUrl: './hangman.component.html',
    styleUrls: ['./hangman.component.scss']
})

export class HangmanComponent implements OnInit {

    constructor(private http: HttpClient) { }

    @ViewChild('canvas')
    canvas: ElementRef<HTMLCanvasElement>;

    private ctx: CanvasRenderingContext2D;
    private apiHost = 'https://api-libras.herokuapp.com/api/'

    ngOnInit() {
        //this.ctx = this.canvas.nativeElement.getContext('2d');
        this.startGame();
    }
    startGame() {
        console.log(this.apiHost + 'games?Name=hangman')
        this.http.get(this.apiHost + 'games?Name=hangman')
            .subscribe(res => {
                console.log(res)
                this.data = res[0].Data
                this.showWord();
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
