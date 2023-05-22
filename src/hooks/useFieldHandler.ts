import { useDispatch } from 'react-redux';
import { ISchemaData } from '../features/Schema/schemaAPI';
import { addObjToStack, addToPath } from '../features/Schema/schemaSlice';
import { IArg } from '../features/Schema/types';

type SchemaFieldHandlerType = (
  fieldName: string | undefined,
  schemaData: ISchemaData,
  args?: IArg[]
) => void;

export const useSchemaFieldHandler = (): SchemaFieldHandlerType => {
  const dispatch = useDispatch();
  const handleChangeField: SchemaFieldHandlerType = (fieldName, schemaData, args = []): void => {
    if (!!fieldName) {
      const object = schemaData.__schema.types.find((obj) => obj.name === fieldName);
      if (object) {
        const stackObject = !args.length ? { type: object } : { type: object, args };
        dispatch(addObjToStack(stackObject));
        dispatch(addToPath(fieldName));
      }
    }
  };
  return handleChangeField;
};
