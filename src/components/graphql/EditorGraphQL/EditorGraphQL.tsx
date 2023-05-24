import React, { useEffect, useState } from 'react';
import { xcodeLight } from '@uiw/codemirror-theme-xcode';
import CodeMirror from '@uiw/react-codemirror';
import { EditorBox } from './EditorGraphQL.styles';
import extensions from './extensions';
import { buildClientSchema, GraphQLSchema } from 'graphql';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import { selectSchemaData, setUserSchema } from '../../../features/Schema/schemaSlice';
import { isEmptyObject } from '../../../utils/isEmptyObject';
import { EditorView } from '@codemirror/view';

interface IEditorGraphQL {
  editable: boolean;
  lineNumbers: boolean;
  height: string;
  foldGutter: boolean;
  value: string;
  syntaxHighlighting: boolean;
}
const EditorGraphQL = ({
  editable,
  lineNumbers,
  height,
  foldGutter,
  value,
  syntaxHighlighting,
}: IEditorGraphQL) => {
  const schemaData = useAppSelector(selectSchemaData);
  const [schema, setSchema] = useState({} as GraphQLSchema);
  const dispatch = useAppDispatch();

  const onChange = React.useCallback((value: string) => {
    dispatch(setUserSchema(value));
  }, []);

  useEffect(() => {
    if (!isEmptyObject(schemaData)) {
      const buildedSchema = buildClientSchema(schemaData);
      setSchema(buildedSchema);
    }
  }, [schemaData]);

  return (
    <EditorBox>
      {!isEmptyObject(schemaData) && (
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
          extensions={[extensions(schema), EditorView.lineWrapping]}
          onChange={onChange}
        />
      )}
    </EditorBox>
  );
};

export default EditorGraphQL;
