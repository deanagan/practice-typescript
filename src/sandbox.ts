

console.log('Hello World!');


function addToTotal<T>(arg: T, addTo: number): number {
    if(arg.hasOwnProperty("total")) {
        arg["total"] += addTo;
        return arg["total"];
    }
    return -1;
}

class Credit {
    total: number;

    constructor(private name: number) {}

    get Total() {
        return this.total;
    }
    set Total(credit: number) {
        this.total = credit;
    }
}

class Bonus {
    total: number;

    constructor(private name: number) {}

    get Total() {
        return this.total;
    }
    set Total(won: number) {
        this.total = won;
    }
}


const bonus = new Bonus(0);

const prize = new Credit(200);

console.log(addToTotal<Bonus>(bonus, 2))