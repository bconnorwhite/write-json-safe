import { writeFile, writeFileSync } from "write-file-safe";
import stringify, { JSONObject } from "stringify-json-object";

export {
  JSONObject
}

export async function writeJSON(path: string, content?: JSONObject, pretty = true) {
  return writeFile(path, stringify(content, pretty));
}

export function writeJSONSync(path: string, content?: JSONObject, pretty = true) {
  return writeFileSync(path, stringify(content, pretty));
}

