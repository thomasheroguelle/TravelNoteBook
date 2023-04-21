import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.css']
})
export class OpinionsComponent {

  @Input() positivePoints!: string[];
  @Input() negativePoints!: string[];
  @Input() tips!: string[];

}
