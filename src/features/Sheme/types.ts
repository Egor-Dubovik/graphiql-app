/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IData {
  type: IRootType;
  args?: IArg[];
}

export interface ISchemaStackObject {
  path: string[];
  dataArray: IData[];
}

export interface ISchema {
  directives: any[];
  mutationType: { name: string } | null;
  queryType: { name: string } | null;
  subscriptionType: any;
  types: IRootType[];
}

interface IEnumValue {
  deprecationReason: any;
  isDeprecated: boolean;
  description: string;
  name: string;
}

export interface IPossibleType {
  name: string;
  kind: string;
  ofType: IOfType;
}

export type KindType =
  | 'OBJECT'
  | 'SCALAR'
  | 'INPUT_OBJECT'
  | 'ENUM'
  | 'UNION'
  | 'LIST'
  | 'NON_NULL';

export interface IArg {
  name: string;
  description: string;
  type: IType;
  defaultValue: any;
}

export interface IInputField {
  name: string;
  description: string | null;
  type?: IType;
}

export interface IField extends IInputField {
  args?: IArg[];
}

export interface IRootType {
  name: string;
  description: string;
  enumValues: IEnumValue[] | null;
  fields: IField[] | null;
  inputFields: IInputField[] | null;
  interfaces: any[] | null;
  possibleTypes: IPossibleType[] | null;
  kind: KindType;
}

export interface IOfType {
  kind: string;
  name: string;
  ofType: any;
}
export interface IType {
  name: string;
  description: string | null;
  kind: KindType;
  ofType: IOfType;
}
