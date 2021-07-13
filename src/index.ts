const path = require('path');
import { inspect } from 'util';
import { Mower } from './domain/Mower';
import { MowerInputDataReaderFileAdapter } from './adapters/MowerInputDataReaderFileAdapter';
import { MowerHandler } from './handlers/MowerHandler';
import { IMowerInputCommand } from './adapters/MowerInputDataReader/types';

let filename = path.resolve(__dirname, '../inputs/case_001.txt');
if (process.argv.length > 2) {
  filename = path.resolve(__dirname, process.argv[2]);
}
const input = new MowerInputDataReaderFileAdapter(filename);
if (!input.plateauSize) throw new Error(`Unexpected plateau size in input ${inspect(input)}`);
const output = input.mowers?.map( (inputCommand: IMowerInputCommand):string => {
  const mower:Mower = new Mower(inputCommand.initialPosition, input.plateauSize!);
  const handler:MowerHandler = new MowerHandler(mower);
  try {
    handler.doCommandChain(inputCommand.moves);
  } catch (e) {
    console.error(`Unable to process commandChain "${inputCommand.moves}"`, e);
  }
  return mower.printPosition();
})

output.map( (o:string) => console.log(`${o}\r\n`));
