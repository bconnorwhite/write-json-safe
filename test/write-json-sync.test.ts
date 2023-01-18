import { beforeEach, test, expect, afterEach } from "@jest/globals";
import mock, { restore } from "mock-fs";
import { readFile } from "read-file-safe";
import { writeJSONSync } from "../source/index.js";

beforeEach(async () => {
  mock({
    "/test": {}
  });
});

afterEach(async () => {
  restore();
});

test("write", async () => {
  expect(writeJSONSync("/test/file.json", { ok: true })).toBe(true);
  return readFile("/test/file.json").then((text) => {
    expect(text).toBe('{\n  "ok": true\n}\n');
  });
});

test("write no pretty", async () => {
  expect(writeJSONSync("/test/file.json", { ok: true }, { pretty: false })).toBe(true);
  return readFile("/test/file.json").then((text) => {
    expect(text).toBe('{"ok":true}\n');
  });
});

test("write no newline", async () => {
  expect(writeJSONSync("/test/file.json", { ok: true }, { appendNewline: false })).toBe(true);
  return readFile("/test/file.json").then((text) => {
    expect(text).toBe('{\n  "ok": true\n}');
  });
});

test("write no recursive", async () => {
  expect(writeJSONSync("/test/a/file.json", { ok: true }, { recursive: false })).toBe(false);
});
