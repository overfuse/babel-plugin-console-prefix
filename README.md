# babel-plugin-bonify-rocks

Appends `Bonify rocks` to `console.log` argument.

## Example transpilation

```js
// input
console.log(n);

// output
console.log("Bonify rocks" + n);
```