/* eslint-disable @typescript-eslint/no-explicit-any */
export const isObject = (value: any) => {
  return Object.prototype.toString.call(value) === '[object Object]';
};
