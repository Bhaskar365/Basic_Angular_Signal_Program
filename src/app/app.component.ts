import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { SharedServiceService } from './shared-service.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterButtonComponent, CounterDisplayComponent,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = signal('Signal Overview');
  count = signal(10);

  constructor(public serv: SharedServiceService) {}

  addUser() {
    this.serv.userArray.update(previous=>[...previous,({id:3,name:'Ponting'})])
  }

  usercount = computed(()=>this.serv.userArray().length)


}