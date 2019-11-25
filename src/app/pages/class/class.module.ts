import { CalendarComponent } from './calendar/calendar.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { HttpClientModule } from '@angular/common/http';
import { ClassViewComponent } from './class-view/class-view.component';
import { ClassEditorComponent } from './class-editor/class-editor.component';

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
        ClassViewComponent,
        ClassEditorComponent,
        CalendarComponent
    ]
})
export class ClassModule { }
