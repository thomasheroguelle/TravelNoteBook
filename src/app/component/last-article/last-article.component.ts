import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ARTICLES, IArticle } from 'src/mock/mock';

@Component({
  selector: 'app-last-article',
  templateUrl: './last-article.component.html',
  styleUrls: ['./last-article.component.css']
})
export class LastArticleComponent {


  // boucle image 
  test: IArticle[] = ARTICLES;

 
}

