import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { xcodeLight } from '@uiw/codemirror-theme-xcode';
import { javascript } from '@codemirror/lang-javascript';
import { Box } from '@mui/material';
import './QueryEditorStyles.css';

const QueryEditor = () => {
  const onChange = React.useCallback((value: string) => {
    console.log('value:', value);
  }, []);
  return (
    <Box
      textAlign="left"
      letterSpacing={2}
      borderRadius="5px"
      sx={{ width: 1, position: 'relative' }}
    >
      <CodeMirror
        value=""
        height="300px"
        theme={xcodeLight}
        autoFocus={false}
        basicSetup={{
          lineNumbers: true,
          indentOnInput: true,
          syntaxHighlighting: true,
          highlightActiveLine: false,
        }}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
    </Box>
  );
};
export default QueryEditor;
