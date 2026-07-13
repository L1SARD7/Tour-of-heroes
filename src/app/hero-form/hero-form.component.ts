import { Component, OnChanges, SimpleChange } from '@angular/core';
import { HeroService } from '../hero.service';

import { Hero } from '../hero';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.less'],
})

export class HeroFormComponent {
  
  heroForm = new FormGroup({
    name: new FormControl(),
    power: new FormControl(),
    alterEgo: new FormControl()
  });
  
  
  heroes: Hero[] = [];

  constructor(private heroService: HeroService,
    private formBuilder: FormBuilder
  ) { }
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

    // this.heroForm = this.formBuilder.group({
    //   name: [],
    //   power: [],
    //   alterEgo: []
    // })

  }

  resetForm() {
    this.heroForm.reset();
  }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  submitted = false;

  onSubmit() { this.submitted = true }

  newHero() { this.submitted = true;
        this.heroService.addHero({ name: this.heroForm.value.name, alterEgo: this.heroForm.value.alterEgo, power: this.heroForm.value.power} as Hero)
          .subscribe(hero => {
          this.heroes.push(hero);
        })
        this.submitted = false
   }

  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; 
  }
}