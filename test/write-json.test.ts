import { beforeEach, test, expect, afterEach } from "@jest/globals";
import mock, { restore } from "mock-fs";
import { readFile } from "read-file-safe";
import { writeJSON } from "../source/index.js";

beforeEach(async () => {
  mock({
    "/test": {}
  });
});

afterEach(async () => {
  restore();
});

test("write", async () => {
  return writeJSON("/test/file.json", { ok: true }).then(async (success) => {
    expect(success).toBe(true);
    return readFile("/test/file.json").then((text) => {
      expect(text).toBe('{\n  "ok": true\n}\n');
    });
  });
});

test("write no pretty", async () => {
  return writeJSON("/test/file.json", { ok: true }, { pretty: false }).then(async (success) => {
    expect(success).toBe(true);
    return readFile("/test/file.json").then((text) => {
      expect(text).toBe('{"ok":true}\n');
    });
  });
});

test("write no newline", async () => {
  return writeJSON("/test/file.json", { ok: true }, { appendNewline: false }).then(async (success) => {
    expect(success).toBe(true);
    return readFile("/test/file.json").then((text) => {
      expect(text).toBe('{\n  "ok": true\n}');
    });
  });
});

test("write no recursive", async () => {
  return writeJSON("/test/a/file.json", { ok: true }, { recursive: false }).then((success) => {
    expect(success).toBe(false);
  });
});
