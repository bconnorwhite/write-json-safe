<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>write-json-safe</h1>
  <a href="https://npmjs.com/package/write-json-safe">
    <img alt="NPM" src="https://img.shields.io/npm/v/write-json-safe.svg">
  </a>
  <a href="https://github.com/bconnorwhite/write-json-safe">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/write-json-safe.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/write-json-safe?branch=master">
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/write-json-safe.svg?branch=master">
  </a>
</div>

<br />

<blockquote align="center">Write formatted JSON to a file.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/write-json-safe">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/write-json-safe?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

## Installation

```sh
yarn add write-json-safe
```

```sh
npm install write-json-safe
```

```sh
pnpm add write-json-safe
```

## Usage

```ts
import { writeJSON, writeJSONSync, Options, OptionalJSONValue } from "write-json-safe";

function writeJSON(path: string, content?: OptionalJSONValue, options?: Options): Promise<boolean>;

function writeJSONSync(path: string, content?: OptionalJSONValue, options?: Options): boolean;

type Options = {
  /**
   * Output formatted JSON. Default: `true`
   */
  pretty?: boolean;
  /**
   * Recursively create parent directories if needed. Default: `true`
   */
  recursive?: boolean;
  /**
   * Ensure file ends with a newline. Default: `true`
   */
  appendNewline?: boolean;
  /**
   * Write even if file already exists. Default: `true`
   */
  overwrite?: boolean;
};
```

<!--BEGIN FOOTER-->

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/write-json-safe?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/write-json-safe.svg"></a></h2>

- [stringify-json-object](https://www.npmjs.com/package/stringify-json-object): Stringify and format a JSON object
- [write-file-safe](https://www.npmjs.com/package/write-file-safe): Write files atomically, and create parent directories if necessary

<br />

<h3>Dev Dependencies</h3>

- [@types/mock-fs](https://www.npmjs.com/package/@types/mock-fs): TypeScript definitions for mock-fs
- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.
- [mock-fs](https://www.npmjs.com/package/mock-fs): A configurable mock file system.  You know, for testing.
- [read-file-safe](https://www.npmjs.com/package/read-file-safe): Read files without try catch


<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/write-json-safe.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->

<br />

## Related Packages

- [types-json](https://www.npmjs.com/package/types-json): Type checking for JSON values
- [fs-safe](https://www.npmjs.com/package/fs-safe): A simple fs wrapper that doesn't throw
- [read-json-safe](https://www.npmjs.com/package/read-json-safe): Read JSON files without try catch
- [write-file-safe](https://www.npmjs.com/package/write-file-safe): Write files, and create parent directories if necessary
- [write-md-safe](https://www.npmjs.com/package/write-md-safe): Write markdown files from a [Marked](https://www.npmjs.com/package/marked) token list or string
