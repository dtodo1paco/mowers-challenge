import { CustomError } from "../index";

export class ParseError extends CustomError {
  readonly src:Error;
  readonly data:string[];
  constructor(message: string, data: string[], src: Error) {
    super(message, 'ParseError');
    this.data = data;
    this.src = src;
  }

  toString() {
    return `Error [${this.src.name}:${this.src.message}] parsing data: ${this.data} `;
  }
}