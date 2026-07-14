export class Hero {
    constructor(
        public id: number,
        public name: string,
        public power: string,
        public alterEgo?: string
    ) { }
}

export class createHeroInputModel {
    constructor(
        public name: string,
        public powers: string[],
        public alterEgo?: string
    ) { }
}