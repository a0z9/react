const Greets1 = "Hi!", Greets2 = "Привет!";

class Greets{

    constructor(greets, name) {
        this.greets = greets;
        this.name = name;
    }

    sayGreets(){
        return `${this.greets}, ${this.name}!`;
    }

}

module.exports  = {Greets1, Greets2};
