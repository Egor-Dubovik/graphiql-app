import { autocompletion, closeBrackets } from '@codemirror/autocomplete';
import { bracketMatching, syntaxHighlighting } from '@codemirror/language';
import { oneDarkHighlightStyle } from '@codemirror/theme-one-dark';
import { materialLight } from '@uiw/codemirror-theme-material';
import { lineNumbers } from '@codemirror/view';
import { graphql } from 'cm6-graphql';
import { GraphQLSchema } from 'graphql';

export const extensions = (schema: GraphQLSchema) => {
  console.log(schema);
  return [
    bracketMatching(),
    closeBrackets(),
    autocompletion(),
    lineNumbers(),
    materialLight, // oneDark,
    syntaxHighlighting(oneDarkHighlightStyle),
    graphql(schema, {
      onShowInDocs(field, type, parentType) {
        alert(`Showing in docs.: Field: ${field}, Type: ${type}, ParentType: ${parentType}`);
      },
      onFillAllFields(view, schema, _query, cursor, token) {
        alert(`Filling all fields. Token: ${token}`);
      },
    }),
  ];
};

export default extensions;
