import { Component, Input } from '@angular/core';
import { ARTICLES, IArticle } from 'src/mock/mock';

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
