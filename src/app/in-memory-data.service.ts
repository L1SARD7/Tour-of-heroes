import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
    {id: 11, name: 'Dr Ni1ce', power: 'Super Strength', alterEgo: 'Dr. Nice'},
    {id: 12, name: 'Narco', power: 'Super Flexibility', alterEgo: 'Narco'},
    {id: 13, name: 'Bombasto', power: 'Super Blast', alterEgo: 'Bombasto'},
    {id: 14, name: 'Celeritas', power: 'Super Speed', alterEgo: 'Celeritas'},
    {id: 15, name: 'Magneta', power: 'Super Magnetism', alterEgo: 'Magneta'},
    {id: 16, name: 'RubberMan', power: 'Super Rubberiness', alterEgo: 'RubberMan'},
    {id: 17, name: 'Dynama', power: 'Super Strength', alterEgo: 'Dynama'},
    {id: 18, name: 'Dr IQ', power: 'Really Smart', alterEgo: 'Dr. IQ'},
    {id: 19, name: 'Magma', power: 'Super Hot', alterEgo: 'Magma'},
    {id: 20, name: 'Tornado', power: 'Weather Changer', alterEgo: 'Tornado'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}