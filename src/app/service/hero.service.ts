import { Injectable } from '@angular/core';
import {Hero} from '../model/hero';
import {HEROES} from './mock-heroes';


@Injectable()
export class HeroService {
    getHeroes() {
    	//console.log(HEROES);
    	return Promise.resolve(HEROES);
    }
    getHero(id: number): Promise<Hero> {
    	return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
    }
    getHeroesSlowly(): Promise<Hero[]> {
		  return new Promise(resolve => {
		    // Simulate server latency with 2 second delay
		    setTimeout(() => resolve(HEROES), 2000);
		  });
	}
}
