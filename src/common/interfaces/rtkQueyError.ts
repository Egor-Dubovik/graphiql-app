export interface IErrorData {
  code: string;
  message: string;
  response: string;
  status: number;
}

export interface ITypeError {
  message: string;
  name: string;
  stack: string;
}

export interface IError {
  data?: IErrorData | string | null;
  status: number | string;
}
