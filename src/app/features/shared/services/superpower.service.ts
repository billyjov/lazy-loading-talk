import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SuperpowerService {
  public getSuperpowers(): string[] {
    return [
      'Flight',
      'Invisibility',
      'Super Speed',
      'Heat Vision',
      'Super Strength',
      'Accelerated Healing',
      'Power Blast',
      'Animal Affinity',
    ];
  }
}
