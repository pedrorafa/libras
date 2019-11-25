import { CalendarComponent } from './pages/class/calendar/calendar.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

import { SignupComponent } from './pages/auth/signup/signup.component';

import { StaticAlphabetComponent } from './pages/games/staticAlphabet/staticAlphabet.component';
import { HangmanComponent } from './pages/games/hangman/hangman.component';

import { ClassViewComponent } from './pages/class/class-view/class-view.component';
import { ClassEditorComponent } from './pages/class/class-editor/class-editor.component';

const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  
  // { path: 'home', component: ComponentsComponent },
  // { path: 'landing', component: LandingComponent },
  // { path: 'nucleoicons', component: NucleoiconsComponent },

  { path: 'user-profile', component: ProfileComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'calendar', component: CalendarComponent },
  { path: 'class', component: ClassViewComponent },
  { path: 'class-editor', component: ClassEditorComponent },

  { path: 'hangman', component: HangmanComponent },
  { path: 'staticAlphabet', component: StaticAlphabetComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
