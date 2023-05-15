import { Box } from '@mui/material';
import { eclipse } from '@uiw/codemirror-theme-eclipse';
import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';
import React from 'react';

const QueryResponse = () => {
  const onChange = React.useCallback((value) => {
    console.log('value:', value);
  }, []);
  return (
    <Box textAlign="left" letterSpacing={2} borderRight={1} sx={{ width: 1 / 2 }}>
      <CodeMirror
        value=""
        height="300px"
        theme={eclipse}
        // editable={false}
        editable={true}
        basicSetup={{ lineNumbers: false, foldGutter: false, indentOnInput: true }}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
    </Box>
  );
};

export default QueryResponse;
