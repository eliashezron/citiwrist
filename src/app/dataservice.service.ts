import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  username:string[]=['elias', 'chris', 'adams', 'william']
  email:string[]=['abc@example.com', 'xyz@example.com','rwp@example.com']
  password:string[]=['abc@example.comA', 'xyz@example.comA', 'rwp@example.comA']

  getUserName():string[]{
    return this.username
  }

  constructor() { }

  
}
