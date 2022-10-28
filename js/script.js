"use strict";
var _a, _b, _c;
class Smartphone {
    constructor() {
        this.credit = 0;
        this.phoneCalls = 0;
        this.plan = 0.2;
    }
    TopUp(param) {
        this.credit = this.credit + param;
        console.log(`hai ricaricato ${param} Euro il tuo credito aggiornato è di ${this.credit} Euro`);
    }
    Call(minutesCall) {
        if (this.credit >= this.plan) {
            let callPrice = Math.round(minutesCall * this.plan);
            let newCredit = (this.credit -= callPrice);
            this.phoneCalls++;
            console.log(`Durata Chiamata: ${minutesCall} minuti, Costo: ${callPrice} Euro, Credito residuo: ${newCredit} Euro`);
        }
        else {
            console.log(`Il credito residuo è insufficiente`);
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
        console.log(`Il numero delle chiamate è ora 0`);
    }
}
class Iphone extends Smartphone {
}
class User {
    constructor(name, surname, smartphone) {
        this.name = name;
        this.surname = surname;
        this.smartphone = smartphone;
    }
}
let iphoneX = new Iphone();
let userOne = new User("Armando", "DuVal", iphoneX);
console.log(userOne);
userOne.smartphone.TopUp(5);
userOne.smartphone.TopUp(15);
(_a = userOne.smartphone) === null || _a === void 0 ? void 0 : _a.Call(5);
(_b = userOne.smartphone) === null || _b === void 0 ? void 0 : _b.Call(3.5);
(_c = userOne.smartphone) === null || _c === void 0 ? void 0 : _c.Call(15);
userOne.smartphone.NumberCalls();
userOne.smartphone.CallsReset();
userOne.smartphone.NumberCalls();
