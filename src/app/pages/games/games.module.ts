import { StaticAlphabetComponent } from './staticAlphabet/staticAlphabet.component';
import { RouterModule } from '@angular/router';
import { HangmanComponent } from './hangman/hangman.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        HttpClientModule
    ],
    declarations: [
        HangmanComponent,
        StaticAlphabetComponent
    ]
})
export class GamesModule { }
