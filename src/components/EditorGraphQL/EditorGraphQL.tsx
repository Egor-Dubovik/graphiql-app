import React from 'react';
import { javascript } from '@codemirror/lang-javascript';
import { xcodeLight } from '@uiw/codemirror-theme-xcode';
import CodeMirror from '@uiw/react-codemirror';
import { Box } from '@mui/material';

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
    <Box
      width="100%"
      bgcolor="white"
      borderRadius="10px"
      textAlign="left"
      letterSpacing={2}
      sx={{
        width: 1,
        display: 'flex',
        flex: '3 1 0%',
        p: 2,
        flexGrow: '1',
      }}
    >
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
    </Box>
  );
};

export default EditorGraphQL;
