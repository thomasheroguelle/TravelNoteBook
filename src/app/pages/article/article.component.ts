import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ARTICLES, IArticle } from 'src/mock/mock';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  article!: IArticle

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getTravelsID();
  }

  getTravelsID() {
    const travelId: number = Number(this.route.snapshot.paramMap.get('id'));
    console.log("l'id est bien récupéré");

    const article = ARTICLES.find(article => article.id === travelId);

    if (article) {
      this.article = article;
      console.log("id retourné", article);
    }
    else {
      console.log("Article introuvable");
      // rediriger vers 404 
    }
  }

}
