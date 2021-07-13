import { MowerHandler } from "..";
import { Mower } from "../../../domain/Mower";
import { Command, ROTATION } from "../../../domain/Mower/types";
import { UnexpectedCommandError } from "../../../errors/UnexpectedCommandError";
import { randomInt, randomOneOf } from "../../../__tests__/utils/random";
import { INITIAL_POSITION, PLATEAU_SIZE } from "./fake.data";

describe(`MowerHandler class`, () => {
  it(`should initialize properly`, () => {
    const mower = new Mower(INITIAL_POSITION, PLATEAU_SIZE);
    const mowerHandler:MowerHandler = new MowerHandler(mower);
    expect(mowerHandler.mower).toStrictEqual(mower);
  });

  it(`should handle out of boundaries movement X`, () => {
    const OUT:number = 2;
    const mower:Mower = new Mower({
      ...INITIAL_POSITION, 
      direction: 'E'
    }, PLATEAU_SIZE);

    const mowerHandler:MowerHandler = new MowerHandler(mower);
    let commandToGetOutOfBounds:string = "";
    for(let i = INITIAL_POSITION.x; i < PLATEAU_SIZE.x + OUT; i++) {
      commandToGetOutOfBounds = commandToGetOutOfBounds + "M"
    }
    mowerHandler.doCommandChain(commandToGetOutOfBounds);
    expect(mower.getPosition().x).toBe(PLATEAU_SIZE.x);
  });
  
  it(`should accept valid rotate commands and not change position`, () => {
    const mower = new Mower(INITIAL_POSITION, PLATEAU_SIZE);
    const mowerHandler:MowerHandler = new MowerHandler(mower);
    const rotations: number = randomInt(6, 3);
    for (let i=0; i < rotations; i++) {
      const direction:ROTATION = randomOneOf(["R","L"]);
      mowerHandler.doCommand(direction as Command);
    }
    expect(mower.getPosition().x).toBe(INITIAL_POSITION.x);
    expect(mower.getPosition().y).toBe(INITIAL_POSITION.y);
  });
  it(`should reject non valid commands and not change position or direction`, () => {
    const mower = new Mower(INITIAL_POSITION, PLATEAU_SIZE);
    const mowerHandler:MowerHandler = new MowerHandler(mower);
    const invalidCommands:string = "invalid-commands";
    [...invalidCommands].forEach( (c:string) => {
      try {
        mowerHandler.doCommand(c as Command);
      } catch (e) {
        expect(e).toBeInstanceOf(UnexpectedCommandError);
      }
    })
    expect(mower.getPosition()).toStrictEqual(INITIAL_POSITION);
  });
});