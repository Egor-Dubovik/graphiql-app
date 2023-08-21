import { EDITOR } from '../common/constant/graphqlEditor';

const formatGraphQLCode = (code: string): string => {
  let formattedCode = '';
  let currentIndent = 0;
  code.split('\n').forEach((line) => {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith('}')) currentIndent = Math.max(0, currentIndent - EDITOR.TAB_SIZE);
    formattedCode += ' '.repeat(currentIndent) + trimmedLine + '\n';
    if (trimmedLine.endsWith('{')) currentIndent += EDITOR.TAB_SIZE;
  });
  return formattedCode.trim();
};

export default formatGraphQLCode;
