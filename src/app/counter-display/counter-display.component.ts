import { Component , effect} from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [],
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.css'
})
export class CounterDisplayComponent {

  constructor(public serv:SharedServiceService) {
    effect(()=>
    {
        if(serv.counterValue()<0) {
          alert('Reached negative value');
        } 
        console.log(serv.counterValue())
    });
  }

 


}
