import { Box } from '@mui/material';
import { xcodeLight } from '@uiw/codemirror-theme-xcode';

import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';
import React from 'react';

const QueryResponse = () => {
  const onChange = React.useCallback((value) => {
    console.log('value:', value);
  }, []);
  return (
    <Box textAlign="left" letterSpacing={2} sx={{ width: 1 }}>
      <CodeMirror
        value="Here will be the response"
        height="300px"
        theme={xcodeLight}
        editable={false}
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
          indentOnInput: true,
          highlightActiveLine: false,
        }}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
    </Box>
  );
};

export default QueryResponse;
