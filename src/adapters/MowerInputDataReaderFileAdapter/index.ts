import { readFileInLines } from "../../helpers/files";
import { CompassPoint } from "../../domain/Mower/types";
import { MowerInputDataReader } from "../MowerInputDataReader";
import { IMowerInputCommand } from "../MowerInputDataReader/types";
import { isEmpty } from "../../helpers/string";
import { ParseError } from "../../errors/ParseError";

/**
 * File adapter for MowerInputDataReader to read data from file
 */
export class MowerInputDataReaderFileAdapter extends MowerInputDataReader {
  static LINES_PER_MOWER:number = 2;
  static INFO_SEPARATOR:string = ' ';
  data: string[];

  constructor(_filename: string) {
    super();
    this.data = readFileInLines(_filename);
    this.init();
  }

  private init() {
    this.mowers = [];
    try {
      // PLATEAU
      const [x, y] = this.data[0].split(MowerInputDataReaderFileAdapter.INFO_SEPARATOR)
        .map((c:string) => parseInt(c));
      this.plateauSize = { x, y };

      // MOWERS
      let dataIndex:number = 1; // line 0 has already been processed
      while (dataIndex < this.data.length && !isEmpty(this.data[dataIndex])) {
        const indexInitialPos:number = dataIndex;
        const indexMoves:number = dataIndex + 1;
        const [ initX, initY, initDirection ] = this.data[indexInitialPos].split(' ')
        const newMowerConf:IMowerInputCommand = {
          initialPosition: {
            x: parseInt(initX),
            y: parseInt(initY),
            direction: initDirection as CompassPoint,
          },
          moves: this.data[indexMoves],
        };
        this.mowers.push(newMowerConf);
        dataIndex = dataIndex + MowerInputDataReaderFileAdapter.LINES_PER_MOWER;
      }
    } catch (e) {
      console.error(`Unable to parse input data`, e);
      throw new ParseError(`Unable to parse input data`, this.data, e);
    }
  }
  
}