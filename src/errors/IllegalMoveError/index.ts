import { IMowerPosition } from "../../domain/Mower/types";
import { CustomError } from "../index";

export class IllegalMoveError extends CustomError {
  readonly position;
  constructor(message: string, position: IMowerPosition) {
    super(message, 'IllegalMoveError');
    this.position = position;
  }

  toString() {
    return `Illegal move from (${this.position.x},${this.position.y}) to direction: ${this.position.direction}`;
  }
}