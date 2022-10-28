interface iSmartphone {
  credit: number;
  phoneCalls: number;
  plan: number;
  setTopUp(param: number): number;
  setCall(minutesCall: number): void;
  getCredit(): void;
  getNumberCalls(): void;
  setCallsReset(): void;
}

abstract class Smartphone implements iSmartphone {
  credit: number = 0;
  phoneCalls: number = 0;
  plan: number = 0.2;

  setTopUp(param: number): number {
    return this.credit + param;
  }
  setCall(minutesCall: number): void {
    this.credit = minutesCall * this.plan;
    this.phoneCalls++;
  }
  getCredit(): void {
    console.log(`il tuo credito residuo è: ${this.credit} Euro`);
  }
  getNumberCalls(): void {
    console.log(`Hai effettuato ${this.phoneCalls} chiamate`);
  }
  setCallsReset(): void {
    this.phoneCalls = 0;
    console.log(`Il numero delle chiamate è ora 0`);
  }
}

class iphone extends Smartphone {
  constructor(credit: number, phoneCalls: number, plan: number) {
    super();
  }
}
