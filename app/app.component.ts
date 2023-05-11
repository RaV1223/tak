import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ViewEncapsulation} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
  
})
export class AppComponent {
  title = 'appname';
}
