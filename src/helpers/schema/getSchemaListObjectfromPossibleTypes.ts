import { IPossibleType } from '../../features/Sheme/types';
import { ISchemaListObject, SCHEMA_TYPE_ERROR } from './getSchemaListObjectfromFields';

export const getSchemaListObjectfromPossibleTypes = (type: IPossibleType): ISchemaListObject => {
  const currentTypeName = type.ofType ? type.ofType.name : type.kind;
  switch (type.kind) {
    case 'OBJECT':
    case 'INPUT_OBJECT':
      return { name: `${type.name}(...)`, typeName: currentTypeName };
    case 'ENUM':
    case 'SCALAR':
      return { name: type.name, typeName: currentTypeName };
    case 'LIST':
      return { name: `${type.name}(...)`, typeName: currentTypeName };
    case 'UNION':
      return { name: `${type.name}(...)`, typeName: currentTypeName };
    case 'NON_NULL':
      return { name: type.name, typeName: currentTypeName };
    default:
      return { name: SCHEMA_TYPE_ERROR, typeName: SCHEMA_TYPE_ERROR };
  }
};
