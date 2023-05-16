/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IRootType {
  name: string;
  description: string;
  enumValues: any;
  fields: any[] | null;
  inputFields: any[] | null;
  interfaces: [];
  kind: string;
  possibleTypes: any;
}

export type KindType = 'OBJECT' | 'SCALAR' | 'INPUT_OBJECT' | 'ENUM';

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
