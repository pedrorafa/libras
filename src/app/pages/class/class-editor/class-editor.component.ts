import { Component, OnInit } from '@angular/core';
import { Class } from 'app/models/class';

@Component({
  selector: 'app-class-editor',
  templateUrl: './class-editor.component.html',
  styleUrls: ['./class-editor.component.scss']
})
export class ClassEditorComponent implements OnInit {

  constructor() { 

    console.log(history.state)
  }

  ngOnInit() {
  }

}
