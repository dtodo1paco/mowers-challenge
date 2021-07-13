export const COMMANDS = {
  L:"L",
  R:"R",
  M:"M",
}

export const COMPASS_POINTS = {
  N: "N",
  E: "E",
  S: "S",
  W: "W",
}

// helper to find what does "rotate to left/right" mean
export const MOVEMENTS_CLOCKWISE = [
  COMPASS_POINTS.N,
  COMPASS_POINTS.E,
  COMPASS_POINTS.S,
  COMPASS_POINTS.W,
]