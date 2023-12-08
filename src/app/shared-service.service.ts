import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  counterValue = signal(0);
  userArray = signal([{ id: 1, name: 'User1' }, { id: 2, name: 'User2' }]);

}
