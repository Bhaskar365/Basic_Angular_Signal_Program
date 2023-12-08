import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent {

  constructor(public serv:SharedServiceService) {}

  Increment() {
      this.serv.counterValue.update(val => val + 1);
  }

  Decrement() {
    this.serv.counterValue.update(val => val - 1);
  }

  Reset() {
    this.serv.counterValue.set(0);
  }

}
