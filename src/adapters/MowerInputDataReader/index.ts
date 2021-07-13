import { IPosition } from "../../domain/Mower/types";
import { IMowerInputCommand } from "./types";

/**
 * Abstract class to extend with adapters to read input data for processor
 */
export abstract class MowerInputDataReader {
  plateauSize: IPosition;
  mowers: IMowerInputCommand[];

  constructor() {
    this.plateauSize = {x: 0, y: 0};
    this.mowers = [];
  }
 
}