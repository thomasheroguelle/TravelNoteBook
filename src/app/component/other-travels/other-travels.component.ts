import { Component, Input } from '@angular/core';
import { ARTICLES, IArticle } from 'src/mock/mock';

@Component({
  selector: 'app-other-travels',
  templateUrl: './other-travels.component.html',
  styleUrls: ['./other-travels.component.css']
})
export class OtherTravelsComponent {

  // je récupère toute ma liste de voyages
  travelsCard: IArticle[] = ARTICLES;

  // je filtre sur les dates
fitlerTravelsbyDate = this.travelsCard.filter((travelsCard: IArticle) => travelsCard.articleTop === false);

}
