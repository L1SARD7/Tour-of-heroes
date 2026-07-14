import { Component, OnChanges, SimpleChange } from '@angular/core';
import { HeroService } from '../hero.service';

import { createHeroInputModel, Hero } from '../hero';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.less'],
})
export class HeroFormComponent {
    
    heroForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      alterEgo: ['', [Validators.required]],
      powers: this.formBuilder.array([])
    })
    
    constructor(
      private heroService: HeroService,
      private formBuilder: FormBuilder,
    ) {}
  
    heroes: Hero[] = [];
  private bootstrapLink?: HTMLLinkElement;

  ngOnInit() {
    var newDiv = document.createElement('div');
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
    this.bootstrapLink.href = 'https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css';

    document.head.appendChild(this.bootstrapLink);
  }

  resetForm() {
    this.heroForm.reset();
  }

  avalaiblePowers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  powerLevels = ['beginner', 'medium', 'high']
  isValid = true;
  submitted = false;
  onSubmit() {
    console.log(this.heroForm.controls);
    if (this.heroForm.valid) {
      this.isValid = true;
      this.submitted = true;
    } else {
      this.isValid = false;
    }
  }

  get powers() {
    return this.heroForm.get('powers') as FormArray;
  }

  addPower() {
  let powerForm = this.formBuilder.group({
    power: ['', [Validators.required]],
    level: ['beginner', [Validators.required]]
  })
  this.powers.push(powerForm);
}

  deletePower(index: number) {
    this.powers.removeAt(index);
  }

  newHero() {
    this.submitted = true;
    this.heroService
      .addHero({
        name: this.heroForm.value.name,
        alterEgo: this.heroForm.value.alterEgo,
        powers: this.heroForm.controls.powers.value || [],
      } as createHeroInputModel)
      .subscribe((hero) => {
        this.heroes.push(hero);
      });
    this.submitted = false;
  }

  showFormControls(form: any) {
    return form && form.controls.name && form.controls.name.value;
  }

  ngOnDestroy() {
    document.head.removeChild(this.bootstrapLink!);
  }
}
