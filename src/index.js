module.exports = function bonifyRocks({ types: t }) {
  return {
    name: 'babel-plugin-bonify-rocks',
    visitor: {
      CallExpression(path) {
        const callee = path.node.callee;

        if (!t.isMemberExpression(callee)) {
          return;
        }

        if (callee.object.name !== 'console') {
          return;
        }

        if (callee.property.name !== 'log') {
          return;
        }

        if (path.node.arguments.length === 1) {
          path.get('arguments.0').replaceWith(
            t.binaryExpression('+', t.stringLiteral('Bonify rocks'), path.node.arguments[0])
          );
        }
      }
    }
  }
}