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
    console.log(`hai ricaricato ${param} Euro`);
  }
  Call(minutesCall: number): void {
    let callPrice = Math.round(minutesCall * this.plan);
    let newCredit = (this.credit -= callPrice);
    if (this.credit > this.plan) {
      this.phoneCalls++;
      console.log(
        `Durata Chiamata: ${minutesCall} minuti, Costo: ${callPrice} Euro, Credito residuo: ${newCredit} Euro`
      );
    } else {
      console.log(`Il credito residuo è insufficiente per chiamare`);
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
    console.log(`Hai resettato il contatore delle chiamate`);
  }
}

class Iphone extends Smartphone {}
class Samsung extends Smartphone {}
class Xiaomi extends Smartphone {}

class User {
  name: string;
  surname: string;
  smartphone: Iphone | Samsung | Xiaomi;
  constructor(name: string, surname: string, smartphone: Iphone) {
    this.name = name;
    this.surname = surname;
    this.smartphone = smartphone;
  }
}
let samsungS20 = new Samsung();
let userTwo = new User("Gigi", "Progetti", samsungS20);
console.log(userTwo);
userTwo.smartphone.TopUp(10);
userTwo.smartphone.TopUp(5);
userTwo.smartphone.Credit();
userTwo.smartphone?.Call(9);
userTwo.smartphone?.Call(12);
userTwo.smartphone?.Call(20);
userTwo.smartphone?.Call(30);
userTwo.smartphone?.Call(5);
userTwo.smartphone.Credit();
userTwo.smartphone.NumberCalls();
userTwo.smartphone.CallsReset();
userTwo.smartphone.NumberCalls();

//---------------------------------------------------------

let iphoneX = new Iphone();
let userOne = new User("Armando", "Duval", iphoneX);
console.log(userOne);

let btn5 = document.querySelector("#ric5") as HTMLButtonElement;

btn5?.addEventListener("click", () => {
  let displayCredit = document.querySelector("p") as HTMLParagraphElement;
  userOne.smartphone.TopUp(5);
  displayCredit.innerText = `Credito Residuo:${userOne.smartphone.credit} Euro`;
});

let btn10 = document.querySelector("#ric10") as HTMLButtonElement;
btn10?.addEventListener("click", () => {
  let displayCredit = document.querySelector("p") as HTMLParagraphElement;
  userOne.smartphone.TopUp(10);
  displayCredit.innerText = `Credito Residuo:${userOne.smartphone.credit} Euro`;
});

let btn15 = document.querySelector("#ric15") as HTMLButtonElement;
btn15?.addEventListener("click", () => {
  let displayCredit = document.querySelector("p") as HTMLParagraphElement;
  userOne.smartphone.TopUp(15);
  displayCredit.innerText = `Credito Residuo:${userOne.smartphone.credit} Euro `;
});
