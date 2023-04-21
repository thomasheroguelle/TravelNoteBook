import { Component } from '@angular/core';
import { ARTICLES, IArticle } from 'src/mock/mock';

@Component({
  selector: 'app-last-article',
  templateUrl: './last-article.component.html',
  styleUrls: ['./last-article.component.css']
})
export class LastArticleComponent {
  
  // boucle image 
  voyageCard: IArticle[] = ARTICLES;

  imageSelected = this.voyageCard.filter((voyageCard :IArticle) => voyageCard.articleTop === true);


}

