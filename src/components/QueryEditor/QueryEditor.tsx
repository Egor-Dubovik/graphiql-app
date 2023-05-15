import React from 'react';
import CodeMirror from '@uiw/react-codemirror';

import { eclipse } from '@uiw/codemirror-theme-eclipse';
import { javascript } from '@codemirror/lang-javascript';
import { Box } from '@mui/material';

const QueryEditor = () => {
  const onChange = React.useCallback((value) => {
    console.log('value:', value);
  }, []);
  return (
    <Box
      textAlign="left"
      letterSpacing={2}
      border={1}
      borderColor="grey.500"
      borderRadius="5px"
      boxShadow={3}
      sx={{ width: 1 / 2 }}
    >
      <CodeMirror
        value=""
        height="300px"
        theme={eclipse}
        basicSetup={{ lineNumbers: true, indentOnInput: true, syntaxHighlighting: true }}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
    </Box>
  );
};
export default QueryEditor;
