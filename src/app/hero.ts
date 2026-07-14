export class Hero {
    constructor(
        public id: number,
        public name: string,
        public powers: { power: string, level: string }[],
        public alterEgo?: string
    ) { }
}

export class createHeroInputModel {
    constructor(
        public name: string,
        public powers: { power: string, level: string }[],
        public alterEgo?: string
    ) { }
}