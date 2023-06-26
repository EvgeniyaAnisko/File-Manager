import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { ERROR_MESSAGE_OPERATION } from "../utils/constant.js";

export const calculateHash = async (args) => {
  const pathToFile = path.resolve(args.path, args.args);
  try {
    const data = await readFile(pathToFile);
    const hash = createHash("sha256").update(data);
    const hashHex = hash.digest("hex");
    console.log(hashHex);
  } catch {
    console.error(ERROR_MESSAGE_OPERATION);
  }
};
