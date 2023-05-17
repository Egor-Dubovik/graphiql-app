import { IField } from '../../features/Sheme/types';

export interface ISchemaListObject {
  name: string;
  typeName: string;
}

export const SCHEMA_TYPE_ERROR = 'Error: Unknown Type';

export const getSchemaListObjectfromFields = (field: IField): ISchemaListObject => {
  switch (field.type?.kind) {
    case 'OBJECT':
    case 'INPUT_OBJECT':
    case 'INTERFACE':
      return { name: `${field.name}(...)`, typeName: field.type.name };
    case 'ENUM':
    case 'SCALAR':
      return { name: field.name, typeName: field.type.name };
    case 'LIST':
      return { name: `${field.name}(...)`, typeName: field.type.ofType.name };
    case 'UNION':
      return { name: `${field.name}(...)`, typeName: field.type.name };
    case 'NON_NULL':
      const ofType = field.type.ofType;
      const ofTypeNdame = ofType.name ? ofType.name : ofType.ofType.name;
      return { name: field.name, typeName: ofTypeNdame };
    default:
      return { name: SCHEMA_TYPE_ERROR, typeName: SCHEMA_TYPE_ERROR };
  }
};
