import { Component } from '@angular/core';
import { ARTICLES } from 'src/mock/mock';

@Component({
  selector: 'app-last-article',
  templateUrl: './last-article.component.html',
  styleUrls: ['./last-article.component.css']
})
export class LastArticleComponent {

  test = ARTICLES; 

}
