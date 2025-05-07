import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BaseComponent} from './basics/base/base.component';
import {EverydayTypesComponent} from './basics/everyday-types/everyday-types.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BaseComponent, EverydayTypesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ts-doc';
}
