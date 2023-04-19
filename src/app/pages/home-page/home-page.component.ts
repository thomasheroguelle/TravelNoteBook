import { Component } from '@angular/core';
import { ARTICLES, IArticle } from 'src/mock/mock';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
// article = ARTICLES;
article: IArticle = ARTICLES[0];
}
