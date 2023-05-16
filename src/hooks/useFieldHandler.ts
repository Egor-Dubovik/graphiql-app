import { useDispatch } from 'react-redux';
import { addObjToStack, addToPath } from '../features/Sheme/schemaSlice';
import { ISchema } from '../features/Sheme/types';

type SchemaFieldHandlerType = (field: string | undefined, schemaData: ISchema) => void;

export const useSchemaFieldHandler = (): SchemaFieldHandlerType => {
  const dispatch = useDispatch();
  const handleChangeField: SchemaFieldHandlerType = (field, schemaData): void => {
    if (!!field) {
      const object = schemaData.types.find((obj) => obj.name === field);
      dispatch(addToPath(field));
      dispatch(addObjToStack(object));
    }
  };
  return handleChangeField;
};
