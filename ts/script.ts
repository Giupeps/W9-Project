interface iSmartphone {
  credit: number;
  phoneCalls: number;
  plan: number;
  TopUp(param: number): void;
  Call(minutesCall: number): void;
  Credit(): void;
  NumberCalls(): void;
  CallsReset(): void;
}

abstract class Smartphone implements iSmartphone {
  credit: number = 0;
  phoneCalls: number = 0;
  plan: number = 0.2;

  TopUp(param: number): void {
    this.credit = this.credit + param;
    console.log(
      `hai ricaricato ${param} Euro il tuo credito aggiornato è di ${this.credit} Euro`
    );
  }
  Call(minutesCall: number): void {
    if (this.credit >= this.plan) {
      let callPrice = Math.round(minutesCall * this.plan);
      let newCredit = (this.credit -= callPrice);
      this.phoneCalls++;
      console.log(
        `Durata Chiamata: ${minutesCall} minuti, Costo: ${callPrice} Euro, Credito residuo: ${newCredit} Euro`
      );
    } else {
      console.log(`Il credito residuo è insufficiente`);
    }
  }
  Credit(): void {
    console.log(`il tuo credito residuo è: ${this.credit} Euro`);
  }
  NumberCalls(): void {
    console.log(`Hai effettuato ${this.phoneCalls} chiamate`);
  }
  CallsReset(): void {
    this.phoneCalls = 0;
    console.log(`Il numero delle chiamate è ora 0`);
  }
}

class Iphone extends Smartphone {}

class User {
  name: string;
  surname: string;
  smartphone: Iphone;
  constructor(name: string, surname: string, smartphone: Iphone) {
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

userOne.smartphone?.Call(5);
userOne.smartphone?.Call(3.5);
userOne.smartphone?.Call(15);
userOne.smartphone.NumberCalls();
userOne.smartphone.CallsReset();
userOne.smartphone.NumberCalls();
