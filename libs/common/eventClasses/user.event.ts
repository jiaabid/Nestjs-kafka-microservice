export class UserCreateEvent {
    constructor(
      public readonly email: string,
      public readonly password: string,
      public readonly name: number,
    ) {}
  
    toString() {
      return JSON.stringify({
        email: this.email,
        password: this.password,
        name: this.name,
      });
    }
  }
  