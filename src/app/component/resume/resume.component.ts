import { Component } from '@angular/core';
import { ARTICLES, IArticle } from 'src/mock/mock';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
 
  // boucle image 
  resume: IArticle[] = ARTICLES;
}
