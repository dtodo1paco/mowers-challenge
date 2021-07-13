import { Mower } from "..";
import { IllegalMoveError } from "../../../errors/IllegalMoveError";
import { randomOneOf } from "../../../__tests__/utils/random";
import { INITIAL_POSITION, PLATEAU_SIZE } from "./data.fake";

describe(`Mower class`, () => {
  // Mower randomly oriented
  const MOWER:Mower = new Mower(INITIAL_POSITION, PLATEAU_SIZE);

  describe(`should initialize properly`, () => {
    expect(MOWER.getPosition()).toStrictEqual(INITIAL_POSITION);
  });
  describe(`should print position`, () => {
    expect(MOWER.printPosition()).toMatch(`${INITIAL_POSITION.x} ${INITIAL_POSITION.y} ${INITIAL_POSITION.direction}`);
  });
  it('should not move beyond boundary X', function () {
    const OUT:number = 2;
    // Mower X oriented
    const MOWER_X:Mower = new Mower({
      ...INITIAL_POSITION, 
      direction: randomOneOf(["E","W"]),
    }, PLATEAU_SIZE);
    for(let i = INITIAL_POSITION.x; i < PLATEAU_SIZE.x + OUT; i++) {
      try {
        MOWER_X.moveForward();
      } catch(e) {
        expect(e).toBeInstanceOf(IllegalMoveError);
      }
    }
  })
  it('should not move beyond boundary Y', function () {
    const OUT:number = 2;
      // Mower Y oriented
    const MOWER_Y:Mower = new Mower({
      ...INITIAL_POSITION, 
      direction: randomOneOf(["N","S"]),
    }, PLATEAU_SIZE);
    for(let i = INITIAL_POSITION.y; i < PLATEAU_SIZE.y + OUT; i++) {
      try {
        MOWER_Y.moveForward();
      } catch(e) {
        expect(e).toBeInstanceOf(IllegalMoveError);
      }
    }
  })

  describe('movements should change direction', function () {
    it('should turn right. N -> E', function () {
      const mower:Mower = new Mower({...INITIAL_POSITION, direction: 'N'}, PLATEAU_SIZE);
      mower.turnRight();
      expect(mower.getPosition().direction).toBe("E");
    });

    it('should turn left. E -> N', function () {
      const mower:Mower = new Mower({...INITIAL_POSITION, direction: 'E'}, PLATEAU_SIZE);
      mower.turnLeft();
      expect(mower.getPosition().direction).toBe("N");
    });
    it(`should turn 180º. N -> S`, function () {
      const mower:Mower = new Mower({...INITIAL_POSITION, direction: 'N'}, PLATEAU_SIZE);
      [1,2].forEach(() => mower.turnLeft());
      expect(mower.getPosition().direction).toBe("S");
    });
    it(`should turn 360º. W -> W`, function () {
      const mower:Mower = new Mower({...INITIAL_POSITION, direction: 'W'}, PLATEAU_SIZE);
      [1,2,3,4].forEach(() => mower.turnRight());
      expect(mower.getPosition().direction).toBe("W");
    });
  });

});