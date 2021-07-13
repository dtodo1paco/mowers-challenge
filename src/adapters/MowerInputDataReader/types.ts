import { IMowerPosition } from "../../domain/Mower/types";

export interface IMowerInputCommand {
  initialPosition: IMowerPosition;
  moves: string;
}