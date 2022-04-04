import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-leaf',
  templateUrl: './svg-leaf.component.svg',
  styleUrls: ['./svg-leaf.component.scss'],
})
export class SvgLeafComponent implements OnInit {
  leafvalue: number = 0;
  colorvalue: string = '#21CC5A';

  constructor() {}
  @Input('leafvalue') set setvalue(value: number) {
    this.leafvalue = value;
    if (this.leafvalue > 50) {
      this.colorvalue = '#21CC5A';
    } else if (this.leafvalue < 50 && this.leafvalue > 0) {
      this.colorvalue = '#FF0000';
    } else if (this.leafvalue === 0) {
      this.colorvalue = '#FFFFFF';
    }
  }

  ngOnInit(): void {}
}
