import { COMPASS_POINTS } from "../../domain/Mower/constants";
import { IMowerPosition, IPosition } from "../../domain/Mower/types";
import { randomInt, randomOneOf } from "./random";

export const createRandomPlateau = ():IPosition => ({
  x: randomInt(15,3),
  y: randomInt(15,3),
});

export const createInitialMowerPosition = (plateauSize: IPosition):IMowerPosition => ({
  direction: randomOneOf(Object.keys(COMPASS_POINTS)),
  x: randomInt(plateauSize.x - 1),
  y: randomInt(plateauSize.y - 1),
})
