# @overfuse/babel-plugin-console-prefix

Babel plugin which adds a prefix to `console.log` argument.

## Install 

```sh
yarn add @overfuse/babel-plugin-console-prefix
```

## Usage

Via `.babelrc`

```json
{
  "plugins": [
    ["@overfuse/babel-plugin-console-prefix", { "prefix": "Bonify rocks" }
  ]
}
```


## Example transpilation

```js
// input
console.log(n);

// output
console.log("Bonify rocks" + n);
```