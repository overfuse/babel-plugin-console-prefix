# babel-plugin-bonify-rocks

A Babel plugin which appends `Bonify rocks` to `console.log` argument.

## Example transpilation

```js
// input
console.log(n);

// output
console.log("Bonify rocks" + n);
```