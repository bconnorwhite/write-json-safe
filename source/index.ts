import { writeFile, writeFileSync, Options as WriteFileOptions } from "write-file-safe";
import stringify, { JSONObject } from "stringify-json-object";

export type Options = {
  /**
   * Output formatted JSON. Default: `true`
   */
  pretty?: boolean;
} & WriteFileOptions;

export async function writeJSON(path: string, content?: JSONObject, options?: Options) {
  return writeFile(path, stringify(content, options?.pretty ?? true), {
    recursive: options?.recursive,
    appendNewline: options?.appendNewline
  });
}

export function writeJSONSync(path: string, content?: JSONObject, options?: Options) {
  return writeFileSync(path, stringify(content, options?.pretty ?? true), {
    recursive: options?.recursive,
    appendNewline: options?.appendNewline
  });
}

export type {
  JSONObject
};
