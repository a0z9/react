const Greets1 = "Hi!", Greets2 = "Привет!";

export class Greets{

    constructor(greets, name) {
        this.greets = greets;
        this.name = name;
    }

    sayGreets(){
        return `${this.greets}, ${this.name}!`;
    }

}

export {Greets1, Greets2}
