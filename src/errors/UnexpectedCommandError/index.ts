import { CustomError } from "../index";

export class UnexpectedCommandError extends CustomError {
  readonly command: string
  constructor(message: string, command: string) {
    super(message, 'UnexpectedCommandError');
    this.command = command;
  }

  toString() {
    return `Unexpected command: ${this.command}`;
  }
}