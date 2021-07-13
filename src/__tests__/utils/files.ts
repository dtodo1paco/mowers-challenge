import { MowerInputDataReader } from "../../adapters/MowerInputDataReader";
import { IMowerInputCommand } from "../../adapters/MowerInputDataReader/types";
import { randomId } from "./random";

const fs = require('fs');

export const dumpToFile = (input: MowerInputDataReader, prefix?: string, suffix?: string) => {
  const fileName = `${prefix}${randomId(10)}${suffix}`;
  let content = `${input.plateauSize.x} ${input.plateauSize.y}\n`
  input.mowers.forEach( (mowerInputCommand: IMowerInputCommand) => {
    content = content + `${mowerInputCommand.initialPosition.x} ${mowerInputCommand.initialPosition.y} ${mowerInputCommand.initialPosition.direction}\n`;
    content = content + `${mowerInputCommand.moves}\n`
  })
  try {
    fs.writeFileSync(fileName, content);
  } catch (e) {
    console.error("Unable to create Test file for testing", e);
  }
  return fileName;
}

export const deleteFile = (filename: string) => {
  try {
    fs.unlinkSync(filename)
  } catch(err) {
    console.error(err)
  }
}