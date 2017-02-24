/*
* Add @Editable(false) to a class method to make the contents of
* that function un-editable.
* */
export function Editable(value: boolean) {
  return function (target: any, propName: string, descriptor: PropertyDescriptor){
    descriptor.writable = value;
  }
}
