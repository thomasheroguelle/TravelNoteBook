import { Component, Input } from '@angular/core';
import { IGalerie } from 'src/mock/mock';

@Component({
  selector: 'app-little-more',
  templateUrl: './little-more.component.html',
  styleUrls: ['./little-more.component.css']
})
export class LittleMoreComponent {

  @Input() galerie! : IGalerie[];

}
