import { insert } from './insert';
// Type V should be: an object {}
// Type U should be of type string
// type T should be of type Store
export const GenericInsert: <T,U,V>(newDoc:V, callback?: (err:Error, document:T) => U) => U = insert;
