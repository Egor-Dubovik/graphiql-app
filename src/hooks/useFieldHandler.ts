import { useDispatch } from 'react-redux';
import { addObjToStack, addToPath } from '../features/Sheme/schemaSlice';
import { ISchema } from '../features/Sheme/types';

type SchemaFieldHandlerType = (fieldName: string | undefined, schemaData: ISchema) => void;

export const useSchemaFieldHandler = (): SchemaFieldHandlerType => {
  const dispatch = useDispatch();
  const handleChangeField: SchemaFieldHandlerType = (fieldName, schemaData): void => {
    if (!!fieldName) {
      const object = schemaData.types.find((obj) => obj.name === fieldName);
      dispatch(addToPath(fieldName));
      if (object) {
        dispatch(addObjToStack({ type: object }));
      }
    }
  };
  return handleChangeField;
};
