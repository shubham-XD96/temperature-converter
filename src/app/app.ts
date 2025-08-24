import { Component } from '@angular/core';
import { ConverterComponent } from './converter/converter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ConverterComponent],
  templateUrl: './app.html',
})
export class AppComponent {}
