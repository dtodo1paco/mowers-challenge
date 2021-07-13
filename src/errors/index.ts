
export class CustomError extends Error {
  readonly name;
  constructor(message:string, name: string) {
    super(message);
    this.name = name;
  }
}
