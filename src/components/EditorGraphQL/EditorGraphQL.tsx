import React from 'react';
import { javascript } from '@codemirror/lang-javascript';
import { xcodeLight } from '@uiw/codemirror-theme-xcode';
import CodeMirror from '@uiw/react-codemirror';
import { EditorBox } from './EditorGraphQL.styles';

const EditorGraphQL = ({
  editable,
  lineNumbers,
  height,
  foldGutter,
  value,
  syntaxHighlighting,
}) => {
  const onChange = React.useCallback((value: string) => {
    console.log('value:', value);
  }, []);
  return (
    <EditorBox>
      <CodeMirror
        value={value}
        height={height}
        theme={xcodeLight}
        editable={editable}
        basicSetup={{
          lineNumbers,
          indentOnInput: true,
          highlightActiveLine: false,
          foldGutter,
          syntaxHighlighting,
        }}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
    </EditorBox>
  );
};

export default EditorGraphQL;
