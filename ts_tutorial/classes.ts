class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log("beep");
  }
}
