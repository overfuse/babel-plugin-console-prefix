"use strict";

module.exports = function consolePrefix({ types: t }) {
  return {
    name: 'console-prefix',
    visitor: {
      CallExpression(path, state) {
        const { prefix } = state.opts;

        if (!prefix) {
          return;
        }

        const callee = path.node.callee;

        if (!t.isMemberExpression(callee)) {
          return;
        }

        if (!t.isIdentifier(callee.object, { name: 'console' })) {
          return;
        }

        if (path.get('callee.object').scope.getBinding('console')) {
          return;
        }

        if (!t.isIdentifier(callee.property, { name: 'log' })) {
          return;
        }

        if (path.node.arguments.length > 0) {
          path.node.arguments[0] = t.binaryExpression('+', t.stringLiteral(prefix), path.node.arguments[0]);
        } else {
          path.node.arguments[0] = t.stringLiteral(prefix);
        }
      }
    }
  }
}