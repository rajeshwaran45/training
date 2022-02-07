// var f = "Hello";
// var g = "hi";

// var h= `${f} and ${g}`;
// console.log(h);

// Single namespacing

// interface StringValidator {
//     isAcceptable(s: string): boolean;
//   }
//   let lettersRegexp = /^[A-Za-z]+$/;
//   let numberRegexp = /^[0-9]+$/;
//   class LettersOnlyValidator implements StringValidator {
//     isAcceptable(s: string) {
//       return lettersRegexp.test(s);
//     }
//   }
//   class ZipCodeValidator implements StringValidator {
//     isAcceptable(s: string) {
//       return s.length === 5 && numberRegexp.test(s);
//     }
//   }
  
//   let strings = ["Hello", "98052"];
  
//   let validators: { [s: string]: StringValidator } = {};
//   validators["ZIP code"] = new ZipCodeValidator();
//   validators["Letters only"] = new LettersOnlyValidator();
  
//   for (let s of strings) {
//     for (let name in validators) {
//       let isMatch = validators[name].isAcceptable(s);
//       console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
//     }
//   }


// namespace Validation {
//   export interface StringValidator {
//     isAcceptable(s: string): boolean;
//   }
//   const lettersRegexp = /^[A-Za-z]+$/;
//   const numberRegexp = /^[0-9]+$/;
//   export class LettersOnlyValidator implements StringValidator {
//     isAcceptable(s: string) {
//       return lettersRegexp.test(s);
//     }
//   }
//   export class ZipCodeValidator implements StringValidator {
//     isAcceptable(s: string) {
//       return s.length === 5 && numberRegexp.test(s);
//     }
//   }
// }

// let mystrings = ["Hello", "98052"];

// let myvalidators: { [s: string]: Validation.StringValidator } = {};
// myvalidators["ZIP code"] = new Validation.ZipCodeValidator();
// myvalidators["Letters only"] = new Validation.LettersOnlyValidator();

// for (let s of mystrings) {
//   for (let name in myvalidators) {
//     console.log(
//       `"${s}" - ${
//         myvalidators[name].isAcceptable(s) ? "matches" : "does not match"
//       } ${name}`
//     );
//   }
// }


// var names:any[] = new Array("Raj","Logan","vicky","sathish") 

// for(var i = 0;i<names.length -2;i++) { 
//    console.log(names[i]);
// }

// var arr:any[] = ['raj',13] 
// var[x,y] = arr 
// console.log(typeof (x)); 
// console.log(typeof (y));

// var i; 
// var a:number[] = [2,4,6,8] 

// for(i in a) { 
//    console.log(a[i]);
// } 


// var mytuple = [10,"Hello","World","typeScript"]; 
// console.log("Items before push " + mytuple);

//  mytuple.push(12)                                    
//  console.log("Items after push " + mytuple);
// mytuple.pop()
//  console.log("Items after pop " + mytuple);

// var a =[10,"hello"] 
// var b = a;
// var c = b[1]; 
// console.log( b );  
// console.log( c ) 

// function disp(name:any|string[]) { 
//     if(typeof name == "string") { 
//        console.log(name) 
//     } else { 
//        var i; 
       
//        for(i = 0;i<name.length;i++) { 
//           console.log(name[i])
//        } 
//     } 
//  } 
//  disp('rajesh') 
//  console.log("Printing names in array....") 
//  disp(["surya","Aru","vinoth","Anil"]);



// var arr:number[]|string[]; 
// var i; 
// arr = [3,2,4] 
// console.log("array1")  

// for(i = 0;i<arr.length;i++) { 
//    console.log(arr[i]) 
// }  

// arr = ["Like","Comments","Share"] 
// console.log("array2")  

// for(i = 0;i<arr.length;i++) { 
//    console.log(arr[i]) 
// } 

// interface IPerson { 
//     firstName:string, 
//     lastName:string, 
//     sayHi: ()=>string 
//  } 
 
//  var customer:IPerson = { 
//     firstName:"surya",
//     lastName:"anbu", 
//     sayHi: ():string =>{return "Hi there"} 
//  } 
 
//  console.log("Customer Object ") 
//  console.log(customer.firstName) 
//  console.log(customer.lastName) 
//  console.log(customer.sayHi())  
 
//  var employee:IPerson = { 
//     firstName:"rajesh",
//     lastName:"selva", 
//     sayHi: ():string =>{return "Hello!!!"} 
//  } 
   
//  console.log("Employee  Object ") 
//  console.log(employee.firstName);
//  console.log(employee.lastName);

// interface namelist { 
//     [index:number]:string 
//  } 
 
//  var list2:namelist = ["kumar","arun"] //Error. 1 is not type string  
//  interface ages { 
//     [index:string]:number 
//  } 
 
//  var agelist:ages; 
//  agelist[0] = 15   // Ok 
//  //agelist[2] = "nine";

interface Person { 
    age:number 
 } 
 
 interface Musician extends Person { 
    instrument:string 
 } 
 
 var drummer = <Musician>{}; 
 drummer.age = 27 
 drummer.instrument = "Drums" 
 console.log("Age:  "+drummer.age) 
 console.log("Instrument:  "+drummer.instrument)