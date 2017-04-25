import { Component, OnInit } from '@angular/core';
import {Hero} from "../model/hero";
import {HeroService} from '../service/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  //template:`<>`
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  ngOnInit(){
    //初始化heroes
    this.getHeroes();
  }
  title = 'heroes works!';
  heroes : Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService){
    //在构造函数中初始化heroes，不推荐
    // this.heroes = this.heroService.getHeroes();
  }
  getHeroes(){
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  get diagnostic() { return JSON.stringify(this.heroes); }

}
