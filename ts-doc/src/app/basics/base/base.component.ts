import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent {

  public showTitleCompany(title: string, count: number) {
    return `hello ${title} ${count}`;
  }

  public showDate (date: Date = new Date()) {
    return `date: ${date.toDateString()}`
  }
}
