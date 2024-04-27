# alfred5

## Overview

This TypeScript library facilitates the creation of responses for Alfred Workflows. It defines the structure for result items based on Alfred's JSON format and provides a function to output these results appropriately.

## Usage

1. **Define Results:** Create an array of `AlfredResult` objects, each representing an item in Alfred's search results.
2. **Output Response:** Use the `response` function to output the JSON formatted results for Alfred to process.

## Types

- `AlfredResult`: Represents an individual result item with optional fields for UID, type, subtitle, and more.
- `response`: Function that takes an array of `AlfredResult` and outputs the correct JSON format for Alfred.

## Example

```typescript
import { response } from './path_to_this_module';

const results = [
  {
    uid: 'example',
    title: 'Example',
    subtitle: 'This is an example',
    arg: '/path/to/action',
    icon: {
      type: 'fileicon',
      path: '~/Desktop'
    },
    valid: true
  }
];

response(...results);
```

## More Information

For more details on Alfred's JSON format for script filters, visit [Alfred's documentation](https://www.alfredapp.com/help/workflows/inputs/script-filter/json/).
