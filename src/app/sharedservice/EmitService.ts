import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitService {

   emitter=new EventEmitter<number>();

  constructor() {
  }

  
}