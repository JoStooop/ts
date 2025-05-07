import { Component } from '@angular/core';
import {CompComponent} from './basics/draft/comp/comp.component';

@Component({
  selector: 'app-root',
  imports: [CompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
