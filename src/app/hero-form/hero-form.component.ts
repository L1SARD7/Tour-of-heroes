import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.less']
})
export class HeroFormComponent {

    heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }
    private bootstrapLink?: HTMLLinkElement;

  ngOnInit() {
    var newDiv = document.createElement("div");
    newDiv.innerHTML = `<style>body {
    margin: 2em;
    margin-bottom: 32px;
    margin-left: 32px;
    margin-right: 32px;
    margin-top: 32px;
    }
    h1 {
    font-size: 40px;
    height: 46px;
    line-height: 1.15;
    }
    a {
    font-size: 16px;
    line-height: 1.17;
    }
    </style>`;
    document.body.appendChild(newDiv);
    this.bootstrapLink = document.createElement('link');
    this.bootstrapLink.rel = 'stylesheet';
    this.bootstrapLink.href =
      'https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css';

    document.head.appendChild(this.bootstrapLink);

  }

  ngOnDestroy() {
    this.bootstrapLink?.remove();
  }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true }

  newHero() { this.submitted = true;
        this.heroService.addHero({ name: this.model.name, alterEgo: this.model.alterEgo, power: this.model.power } as Hero)
          .subscribe(hero => {
          this.heroes.push(hero);
        })
        this.submitted = false
   }

  skyDog(): Hero {
    const myHero =  new Hero(42, 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }
}