function factorial(num:number): number {
    if (num <= 0) {         
       return 1; 
    } else {     
       return (num * factorial(num - 1));    
    } 
 }; 
 console.log(factorial(7)); 


 var global_num = 12          
class Numbers { 
   num_val = 13;              
   static sval = 10;          
   
   storeNum():void { 
      var local_num = 14;     
   } 
} 
console.log("Global num: "+global_num)  
console.log(Numbers.sval)   //static variable  
var obj = new Numbers(); 
console.log("Global num: "+obj.num_val) 


var x:number=4;
var y=-x;

console.log(x);
console.log(y);

var num:number = -2 
var result = num > 0 ?"positive":"non-positive" 
console.log(result)

var num:number = 0
var count:number = 0;

for(num=0;num<=20;num++) {
   if (num % 2!=0) {
      continue
   }
   count++
}
console.log (" The count of odd values between 0 and 20 is: "+count)

var foo = (x:number)=>10 + x 
console.log(foo(100)) 

function arraytest(names:string):void{
    for(var i=0; i<names.length;i++){
        console.log(arraytest[i]);
    }
}

var names:string[] = new Array("raj","logesh","vicky","sathish");
//arraytest(names[]);



