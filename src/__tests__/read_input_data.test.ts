import { MowerInputDataReader } from "../adapters/MowerInputDataReader";
import { IMowerInputCommand } from "../adapters/MowerInputDataReader/types";
import { MowerInputDataReaderFileAdapter } from "../adapters/MowerInputDataReaderFileAdapter";
import { ParseError } from "../errors/ParseError";
import { INPUT } from "./fake.data";
import { deleteFile, dumpToFile } from "./utils/files";

describe(`Read input data`, () => {

  describe(`From input file`, () => {
    let filename:string = 'UNSET';
    let inputFromFile:MowerInputDataReader;

    beforeAll( () => {
      filename = dumpToFile(INPUT, "test_", ".txt");
    })
    
    it(`should throw exception for non existing file`, () => {
      expect(() => {
        new MowerInputDataReaderFileAdapter('non-existing-file');
      }).toThrow(ParseError);
    });
    it(`should throw exception for unexpected file format`, () => {
      const path = require('path');
      const thisFileName = path.resolve(__filename);
      try {
        new MowerInputDataReaderFileAdapter(thisFileName);
      } catch (e) {
        expect(e).toBeInstanceOf(ParseError);
      }
    });
    it(`should parse file`, () => {
      inputFromFile = new MowerInputDataReaderFileAdapter(filename);
      expect(inputFromFile).toBeDefined();
      expect(inputFromFile).toEqual(
        expect.objectContaining({
          plateauSize: INPUT.plateauSize,
          mowers: expect.arrayContaining([
            expect.objectContaining({
              initialPosition: expect.objectContaining({
                x: expect.any(Number),
                y: expect.any(Number),
                direction: expect.any(String),
              }),
              moves: expect.any(String),
            })
          ]),
        })
      );
    });
    it('should have read the right plateau size', () => {
      expect(inputFromFile.plateauSize.x).toBe(INPUT.plateauSize.x);
      expect(inputFromFile.plateauSize.y).toBe(INPUT.plateauSize.y);
    });
    it('should have read the right amount of mowers', () => {
      expect(inputFromFile.mowers.length).toBe(INPUT.mowers.length);
    });
    it('should have read the right data for each mower', () => {
      inputFromFile.mowers.map( (inputCommand:IMowerInputCommand, i: number) => {
        expect(inputCommand.initialPosition).toStrictEqual(
          INPUT.mowers[i].initialPosition
        )
        expect(inputCommand.moves).toBe(INPUT.mowers[i].moves);
      })
    });
    afterAll( () => {
      deleteFile(filename);
    })
  });

})