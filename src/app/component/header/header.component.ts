import { Component } from '@angular/core';
import { LocationResponse, WeatherService } from 'src/app/service/weather';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  weatherData!: LocationResponse;
  address! : string;

  constructor(private weatherService: WeatherService) { }

  // retourne un Observable. la methode subscribe est appelée sur l'objet Observable pour recuperer les données. Elles sont ensuite stockées dans la variable weatherData et address 
  ngOnInit() {
    this.weatherService.getWeatherData().subscribe(data => {
      this.weatherData = data;
      this.address = data.address;
      console.log("test", this.weatherData);
    });
  }


// la méthode recupere la date actuelle sous forme de string au format ISO(yyyy/mm/dd), ngIf affiche la temperature correspondante a la date actuelle 
  getCurrentDate(): string {
    return new Date().toISOString().split('T')[0];
  }

}
