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

        path.node.arguments.unshift(
          t.stringLiteral('Bonify rocks')
        );
      }
    }
  }
}