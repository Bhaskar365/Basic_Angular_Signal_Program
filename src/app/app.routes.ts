import { Routes } from '@angular/router';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';

export const routes: Routes = [
    { path:'counter', component:CounterButtonComponent },
    { path: 'display', component: CounterDisplayComponent }
];
