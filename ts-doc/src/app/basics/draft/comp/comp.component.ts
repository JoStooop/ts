import {Component, OnInit} from '@angular/core';

type TypeTest = number | string
type TypeData = (string | number)[]
type TypeText = 'one' | 'two'
type TypeObj = { x: number, y: number }

@Component({
  selector: 'app-comp',
  imports: [],
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.scss'
})
export class CompComponent implements OnInit {
  title: string = 'comp';

  ngOnInit() {

  }
}
