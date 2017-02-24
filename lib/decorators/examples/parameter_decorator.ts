/*
* Parameter Decorator
*
* Here I will print out the target object,
* the method name in the class with the decorator
* and the parameter index the decorator was placed.
*
* */

export function printInfo(target: any, methodName: string, paramIndex: number){
  console.log(`Target ${target}`);
  console.log(`MethodName ${methodName}`);
  console.log(`ParamIndex ${paramIndex}`);
}

/* Used as
* class Course {
*   name: string;
*   constructor(name: string){
*     this.name = name;
*   }
*
*   print(mode: string, @printInfo printAll: boolean){
*
*   }
* }
*
* const course = new Course("string");
* course. print("anything", true);
*
*
*  OUTPUT
*
*  Target: > Object {}
*  MethodName: print
*  pramIndex: 1
*
* */


