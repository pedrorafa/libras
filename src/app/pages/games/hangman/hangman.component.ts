import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import lettersImgData from 'assets/img/libras/alphabet/list.js'

@Component({
    selector: 'app-profile',
    templateUrl: './hangman.component.html',
    styleUrls: ['./hangman.component.scss']
})

export class HangmanComponent implements OnInit {

    constructor(private http: HttpClient) { }

    ngOnInit() {

    }

    letterWasSelected(letter){
        return this.data.selectedLetters.find(item => letter === item) 
    }

    selectLetter(letter) {
        if (!this.letterWasSelected(letter)) {
            console.log(letter)
            this.data.selectedLetters.push(letter)
        }else{

        }
    } 

    private lettersImg = lettersImgData
    private data = {
        words: [],
        selectedLetters: []
    }
}
