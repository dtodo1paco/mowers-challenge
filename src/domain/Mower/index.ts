import { inspect } from "util";
import { IllegalMoveError } from "../../errors/IllegalMoveError";
import { COMPASS_POINTS, MOVEMENTS_CLOCKWISE } from "./constants";
import { CompassPoint, IMowerPosition, IPosition, ROTATION } from "./types";

export class Mower {

  position: IMowerPosition;
  topRight: IPosition;

  constructor(initialPos: IMowerPosition, topRight: IPosition) {
    this.position = {...initialPos};
    this.topRight = topRight;
  }

  getPosition (): IMowerPosition {
    return this.position;
  }

  printPosition (): string {
    return `${this.position.x} ${this.position.y} ${this.position.direction}`;
  }

  turnLeft(): void {
    this.position.direction = this._rotate(ROTATION.ROTATE_LEFT);
  }
  turnRight(): void {
    this.position.direction = this._rotate(ROTATION.ROTATE_RIGHT);
  }

  moveForward():void {
    let newX:number = this.position.x;
    let newY:number = this.position.y;
    switch(this.position.direction) {
      case COMPASS_POINTS.E:
        newX = this.position.x + 1; break;
      case COMPASS_POINTS.W:
        newX = this.position.x - 1; break;
      case COMPASS_POINTS.N:
        newY = this.position.y + 1; break;
      case COMPASS_POINTS.S:
        newY = this.position.y - 1; break;
    }
    if (this._isValidMove(newX, newY)) {
      if (this.position.x !== newX) this.position.x = newX;
      if (this.position.y !== newY) this.position.y = newY;
    } else {
      throw new IllegalMoveError(`Out of boundaries: ${inspect(this.topRight)}`, this.position);
    }
  }

  /**
   * Rotate the Mower Left or Right according to MOVEMENTS_CLOCKWISE array
   * @param direction the compass point to go to
   */
  private _rotate(direction:ROTATION):CompassPoint {
    const currentIndex = MOVEMENTS_CLOCKWISE.indexOf(this.position.direction);
    const nextIndex:number = direction === ROTATION.ROTATE_LEFT 
      // rotate left
      ? currentIndex > 0
        ? currentIndex - 1              // next in left is the previous
        : MOVEMENTS_CLOCKWISE.length -1 // next in left is the last one
      // rotate right
      : currentIndex === MOVEMENTS_CLOCKWISE.length - 1
        ? 0                             // next in right is the first one
        : currentIndex + 1;             // next in right is the next
    return MOVEMENTS_CLOCKWISE[nextIndex] as CompassPoint;
  }

  private _isValidMove(x:number, y:number):boolean {
    return x >= 0 && x <= this.topRight.x 
      && y >= 0 && y <= this.topRight.y
  }

}