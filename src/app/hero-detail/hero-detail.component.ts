import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})

export class HeroDetailComponent {
  @Input() hero?: Hero
  constructor(
  private route: ActivatedRoute,
  private heroService: HeroService,
  private location: Location
) {}

ngOnInit(): void {
  this.getHero();
}

getHero(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
}

goBack(): void {
  this.location.back();
}

  deletePower(i: number) {
    if (this.hero) {
      this.hero.powers.splice(i, 1)
          this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
    }
    }

  save(): void {
    if (this.hero) {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
    };
  };
}
