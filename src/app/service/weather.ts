import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


export interface LocationResponse {
  address: string;
  timezone: string;
  days: {
    datetime: string;
    tempmax: number;
    tempmin: number;
    temp: number;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiUrl = environment.weatherApi.url;
  apiKey = environment.weatherApi.key;

  constructor(private httpClient: HttpClient) { }

  // effectue une requete HTTP GET vers l'API dans apiUrl. HttpClient permet ces requetes. la methode retourne un objet Observable qui emet des données sous la forme d'une instance de classe LocationResponse
  getWeatherData(): Observable<LocationResponse> {
    return this.httpClient.get<LocationResponse>(this.apiUrl);
  }
}


