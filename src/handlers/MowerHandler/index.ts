import { Mower } from "../../domain/Mower";
import { Command, MOVEMENT, ROTATION } from "../../domain/Mower/types";
import { UnexpectedCommandError } from "../../errors/UnexpectedCommandError";

export class MowerHandler {
  mower: Mower;

  constructor(_mower:Mower) {
    this.mower = _mower;
  }

  doCommand(command: Command):void {
    switch(command) {
      case MOVEMENT.MOVE_FORWARD:
        try {
          this.mower.moveForward();
        } catch (e) { // IllegalMoveError
          console.warn("Unable to move forward", e);
        }
        break;
      case ROTATION.ROTATE_LEFT: this.mower.turnLeft(); 
        break;
      case ROTATION.ROTATE_RIGHT: this.mower.turnRight(); 
        break;
      default: throw new UnexpectedCommandError(`Unexpected command`, command);
    }
  }
  
  doCommandChain(commandChain:string) {
    const chars = [...commandChain];
    chars.forEach( (c:string) => {
      this.doCommand(c as Command);
    })
  }

}