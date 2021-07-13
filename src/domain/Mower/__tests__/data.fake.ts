import { createInitialMowerPosition, createRandomPlateau } from "../../../__tests__/utils/fake.data";

export const PLATEAU_SIZE = createRandomPlateau();
export const INITIAL_POSITION = createInitialMowerPosition(PLATEAU_SIZE);
