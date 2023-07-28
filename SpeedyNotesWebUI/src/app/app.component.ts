import {Component} from '@angular/core';
import {Note} from "./model/note";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  notes:Note[]  = [
    {title:"hoal",subTitle:"",content:""},
    {title:"hoal",subTitle:"",content:""}
  ]

}
