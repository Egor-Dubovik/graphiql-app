/* eslint-disable @typescript-eslint/no-explicit-any */

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
  ofType: any;
}

export type KindType = 'OBJECT' | 'SCALAR' | 'INPUT_OBJECT' | 'ENUM' | 'UNION';

export interface IArg {
  name: string;
  description: string;
  type: IType;
}

export interface IInputField {
  name: string;
  description: string | null;
  type: IType;
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

export interface IType {
  name: string;
  description: string | null;
  kind: KindType;
  ofType: {
    kind: string;
    name: string;
    ofType: any;
  };
}
