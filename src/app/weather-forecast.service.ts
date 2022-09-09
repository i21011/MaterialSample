import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(private httpClient: HttpClient) { }

  load(){
    return this.httpClient.get<Weather[]>('/api/weatherforecast');
  }
}

export interface Weather {
	date: string;
	temperatureC: number;
	temperatureF: number;
	summary: string;
}