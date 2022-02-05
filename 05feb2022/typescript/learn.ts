var mytuple = [10,"Hello","World","typeScript"]; 
console.log("Items before push " + mytuple);

 mytuple.push(12)                                    
 console.log("Items after push " + mytuple);
mytuple.pop()
 console.log("Items after pop " + mytuple);


 var a =[10,"hello"] 
var b = a[1];
var c = a[0]; 
console.log(b);
console.log(c);

let val:string|number 
val = 12 
console.log(val);
val = "welcome" 
console.log(val);
console.log(val);


// Type assertion (string convert into number) in Type script
let d = '1';
let e:number = <number> <any> d;
console.log(typeof (e));


var f = "Hello";
var g = "hi";

var h= `${a} and ${b}`;
console.log(c);


class Animal {
    name;

    makesound() {

    }
}

class Cat extends Animal {

}
let myCat = new Cat();
myCat.makesound();


interface RunOptions { 
    program:string; 
    commandline:string[]|string|(()=>string); 
 } 
 
 
 var options:RunOptions = {program:"test1",commandline:"Hello"}; 
 console.log(options.commandline)  
 
 
 options = {program:"test1",commandline:["Hello","World"]}; 
 console.log(options.commandline[0]); 
 console.log(options.commandline[1]);  
 
 
 options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 
 
 var fn:any = options.commandline; 
 console.log(fn());