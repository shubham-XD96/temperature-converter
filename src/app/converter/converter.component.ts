import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
  inputValue: number | null = null;
  inputUnit: string = 'Celsius';
  outputUnit: string = 'Fahrenheit';
  result: number | null = null;

  convertTemperature() {
    if (this.inputValue === null) {
      this.result = null;
      return;
    }

    let value = this.inputValue;
    let celsius: number;

    // Convert input to Celsius
    switch (this.inputUnit) {
      case 'Celsius':
        celsius = value;
        break;
      case 'Fahrenheit':
        celsius = (value - 32) * 5 / 9;
        break;
      case 'Kelvin':
        celsius = value - 273.15;
        break;
      default:
        celsius = value;
    }

    // Convert Celsius to output
    switch (this.outputUnit) {
      case 'Celsius':
        this.result = celsius;
        break;
      case 'Fahrenheit':
        this.result = (celsius * 9 / 5) + 32;
        break;
      case 'Kelvin':
        this.result = celsius + 273.15;
        break;
      default:
        this.result = celsius;
    }
  }
}
