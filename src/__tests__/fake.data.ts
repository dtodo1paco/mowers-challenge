import { MowerInputDataReader } from "../adapters/MowerInputDataReader";
import { IMowerInputCommand } from "../adapters/MowerInputDataReader/types";
import { COMMANDS } from "../domain/Mower/constants";
import { createInitialMowerPosition, createRandomPlateau } from "./utils/fake.data";
import { randomInt, randomOneOf } from "./utils/random";

const PLATEAU_SIZE = createRandomPlateau();


const MOWERS:IMowerInputCommand[] = [];
for(let i=0; i < randomInt(5,1); i++) {
  let MOVES:string = "";
  for(let i=0; i < randomInt(10,3); i++) {
    MOVES = MOVES + randomOneOf(Object.keys(COMMANDS));
  }
  const inputCommand:IMowerInputCommand = {
    initialPosition: createInitialMowerPosition(PLATEAU_SIZE),
    moves: MOVES,
  }
  MOWERS.push(inputCommand);
}

export const INPUT:MowerInputDataReader = {
  plateauSize: PLATEAU_SIZE,
  mowers: MOWERS,
}
