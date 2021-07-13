export enum ROTATION {
  ROTATE_LEFT = "L",
  ROTATE_RIGHT = "R",
}

export enum MOVEMENT {
  MOVE_FORWARD = "M",
}

export type Command = ROTATION | MOVEMENT;

export type CompassPoint = "N" | "E" | "S" | "W";

export interface IPosition {
  x: number;
  y: number;
}

export interface IMowerPosition extends IPosition {
  direction: CompassPoint,
}

