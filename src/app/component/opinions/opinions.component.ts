import { Component } from '@angular/core';
import { ARTICLES } from 'src/mock/mock';

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.css']
})
export class OpinionsComponent {

  opinion = ARTICLES
}
