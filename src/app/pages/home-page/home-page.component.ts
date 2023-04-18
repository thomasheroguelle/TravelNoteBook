import { Component } from '@angular/core';
import { ARTICLES, Article } from 'src/mock/mock';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  test = ARTICLES; 

}
