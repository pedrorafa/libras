import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './hangman.component.html',
    styleUrls: ['./hangman.component.scss']
})

export class HangmanComponent implements OnInit {

    constructor() { }

    ngOnInit() {}

    private data = {
        words:[],
        missLetters:[],
        discoverLetters:[]
    }

    
}
