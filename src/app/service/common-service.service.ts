import { Injectable } from '@angular/core';
import { IArticle } from 'src/mock/mock';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }

  // filtre les articles pour récupérer la donnée qu'on a besoin
  filterArticle(articles: IArticle[]): IArticle[] {
    return articles.filter(article => article.country === "Albanie");
  }
  
}
