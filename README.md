# write-json-safe
![dependencies](https://img.shields.io/david/write-json-safe)
![typescript](https://img.shields.io/github/languages/top/bconnorwhite/write-json-safe)
![npm](https://img.shields.io/npm/v/write-json-safe)

Write files, and create parent directories if necessary.

```
yarn add write-json-safe
```

## API
```ts
import { writeJSON, writeJSONSync, JSONObject } from "write-json-safe";

writeJSONSync(path: string, content?: JSONObject) => void;

writeJSON(path: string, content?: JSONObject) => Promise<void>;
```

