import { Component } from '@angular/core';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { ARTICLES, IArticle } from 'src/mock/mock';

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.css']
})
export class OpinionsComponent {

  constructor(private articleService : CommonServiceService) {}

  opinion = ARTICLES;
  articles : IArticle[] = ARTICLES;

  getDataByFilter() {
    this.articleService.filterArticle(this.articles);
  }

}
