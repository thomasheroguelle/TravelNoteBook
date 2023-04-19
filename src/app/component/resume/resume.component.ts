import { Component, Input } from '@angular/core';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { ARTICLES, IArticle } from 'src/mock/mock';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  @Input() title! : string;
  @Input() text! : string;
 
  // boucle image 
  resume: IArticle[] = ARTICLES;

  // constructor(private articleService : CommonServiceService) {}

  // opinion = ARTICLES;
  // articles : IArticle[] = ARTICLES;

  // getDataByFilter() {
  //   this.articleService.filterArticle(this.articles);
  // }

}
