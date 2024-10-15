import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, } from '@angular/forms';
import { WeatherService } from '../services/weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {

  constructor(private builder: FormBuilder, private weatherService: WeatherService) { }

  locationsForm = this.builder.group({
    city: ['', Validators.required] 
  });

  weatherData: any;
  locations: any;
  selectedLocation: any;

  ObterRegioes() {

    let city = String(this.locationsForm.get('city')?.value);

    this.weatherService.getLatLon(city).subscribe(data => {

      this.locations = data;

      console.log(data);
    });
  }

  obterClima(location: any) {

    this.selectedLocation = location;

    this.weatherService.getWeather(location.lat, location.lon).subscribe(data => {
      this.weatherData = data;

      console.log(data);
    })
  }

}
