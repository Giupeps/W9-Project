"use strict";
class Smartphone {
    constructor() {
        this.credit = 0;
        this.phoneCalls = 0;
        this.plan = 0.2;
    }
    setTopUp(param) {
        return this.credit + param;
    }
    setCall(minutesCall) {
        this.credit = minutesCall * this.plan;
        this.phoneCalls++;
    }
    getCredit() {
        console.log(`il tuo credito residuo è: ${this.credit} Euro`);
    }
    getNumberCalls() {
        console.log(`Hai effettuato ${this.phoneCalls} chiamate`);
    }
    setCallsReset() {
        this.phoneCalls = 0;
        console.log(`Il numero delle chiamate è ora 0`);
    }
}
class iphone extends Smartphone {
    constructor(credit, phoneCalls, plan) {
        super();
    }
}
