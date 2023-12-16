import fs from "fs";

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {} // repository: StorageRespository

  execute({
    fileContent,
    fileDestination = "outputs",
    fileName = "table.txt",
  }: Options): boolean {
    try {
      fs.mkdirSync(fileDestination, { recursive: true });
      fs.writeFileSync(`${fileDestination}/tabla-${fileName}.txt`, fileContent);
      //   console.log("File created!");
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
