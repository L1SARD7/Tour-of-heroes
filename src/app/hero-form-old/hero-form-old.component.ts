import { Component } from "@angular/core";
import { HeroService } from "../hero.service";

import { createHeroInputModel, Hero } from "../hero";
@Component({
  selector: "app-hero-form-old",
  templateUrl: "./hero-form-old.component.html",
  styleUrls: ["./hero-form-old.component.less"],
})
export class HeroFormOldComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}
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
    this.bootstrapLink = document.createElement("link");
    this.bootstrapLink.rel = "stylesheet";
    this.bootstrapLink.href = "https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css";

    document.head.appendChild(this.bootstrapLink);
  }

  ngOnDestroy() {
    this.bootstrapLink?.remove();
  }

  powers = ["Really Smart", "Super Flexible", "Super Hot", "Weather Changer"];

  model = new Hero(
    18,
    "Dr. IQ",
    [{ power: this.powers[0], level: "beginner" }],
    "Chuck Overstreet",
  );

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.submitted = true;
    this.heroService
      .addHero({
        name: this.model.name,
        powers: [{ power: this.model.powers[0].power, level: "beginner" }],
        alterEgo: this.model.alterEgo,
      } as createHeroInputModel)
      .subscribe((hero) => {
        this.heroes.push(hero);
      });
    this.submitted = false;
  }

  showFormControls(form: any) {
    return form && form.controls.name && form.controls.name.value;
  }
}
