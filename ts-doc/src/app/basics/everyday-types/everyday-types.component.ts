import {Component} from '@angular/core';

type Point = {
  x: number,
  y: number
}

@Component({
  selector: 'app-everyday-types',
  imports: [],
  templateUrl: './everyday-types.component.html',
  styleUrl: './everyday-types.component.scss'
})
export class EverydayTypesComponent {
  public number: number[] = [1, 2, 3, 4, 5];
  public clone: number[] = []
  public text: string = "logo";

  public showTitle(title: string): string {
    return `title ${title}`
  }

  public showNumber(number: number): number {
    return 10
  }

  public async showPromise(): Promise<string> {
    return 'promise'
  }

  public showForEach(): void {
    this.number.forEach((n: number) => {
      this.clone.push(n);
    });
  }

  public showObject(obj: { x: number, y: number }): void {
    console.log(obj.x)
    console.log(obj.y)
  }

  public showPoint(point: Point): void {
    console.log(point.x)
    console.log(point.y)
  }
}
