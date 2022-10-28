"use strict";
var _a, _b, _c, _d, _e;
class Smartphone {
    constructor() {
        this.credit = 0;
        this.phoneCalls = 0;
        this.plan = 0.2;
    }
    TopUp(param) {
        this.credit = this.credit + param;
        console.log(`hai ricaricato ${param} Euro`);
    }
    Call(minutesCall) {
        let callPrice = Math.round(minutesCall * this.plan);
        let newCredit = (this.credit -= callPrice);
        if (this.credit > this.plan) {
            this.phoneCalls++;
            console.log(`Durata Chiamata: ${minutesCall} minuti, Costo: ${callPrice} Euro, Credito residuo: ${newCredit} Euro`);
        }
        else {
            console.log(`Il credito residuo è insufficiente per chiamare`);
        }
    }
    Credit() {
        console.log(`il tuo credito residuo è: ${this.credit} Euro`);
    }
    NumberCalls() {
        console.log(`Hai effettuato ${this.phoneCalls} chiamate`);
    }
    CallsReset() {
        this.phoneCalls = 0;
        console.log(`Hai resettato il contatore delle chiamate`);
    }
}
class Iphone extends Smartphone {
}
class Samsung extends Smartphone {
}
class Xiaomi extends Smartphone {
}
class User {
    constructor(name, surname, smartphone) {
        this.name = name;
        this.surname = surname;
        this.smartphone = smartphone;
    }
}
let iphoneX = new Iphone();
let userOne = new User("Armando", "Duval", iphoneX);
console.log(userOne);
let samsungS20 = new Samsung();
let userTwo = new User("Gigi", "Progetti", samsungS20);
console.log(userTwo);
userTwo.smartphone.TopUp(10);
userTwo.smartphone.TopUp(5);
userTwo.smartphone.Credit();
(_a = userTwo.smartphone) === null || _a === void 0 ? void 0 : _a.Call(9);
(_b = userTwo.smartphone) === null || _b === void 0 ? void 0 : _b.Call(12);
(_c = userTwo.smartphone) === null || _c === void 0 ? void 0 : _c.Call(20);
(_d = userTwo.smartphone) === null || _d === void 0 ? void 0 : _d.Call(30);
(_e = userTwo.smartphone) === null || _e === void 0 ? void 0 : _e.Call(5);
userTwo.smartphone.Credit();
userTwo.smartphone.NumberCalls();
userTwo.smartphone.CallsReset();
userTwo.smartphone.NumberCalls();
let btn5 = document.querySelector("#ric5");
btn5 === null || btn5 === void 0 ? void 0 : btn5.addEventListener("click", () => {
    let displayCredit = document.querySelector("p");
    userOne.smartphone.TopUp(5);
    displayCredit.innerText = `Credito Residuo:${userOne.smartphone.credit} Euro`;
});
let btn10 = document.querySelector("#ric10");
btn10 === null || btn10 === void 0 ? void 0 : btn10.addEventListener("click", () => {
    let displayCredit = document.querySelector("p");
    userOne.smartphone.TopUp(10);
    displayCredit.innerText = `Credito Residuo:${userOne.smartphone.credit} Euro`;
});
let btn15 = document.querySelector("#ric15");
btn15 === null || btn15 === void 0 ? void 0 : btn15.addEventListener("click", () => {
    let displayCredit = document.querySelector("p");
    userOne.smartphone.TopUp(15);
    displayCredit.innerText = `Credito Residuo:${userOne.smartphone.credit} Euro `;
});
