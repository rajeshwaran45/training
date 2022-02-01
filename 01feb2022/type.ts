

var message:string = "Hiii im danger" ;
console.log(message);

var myname:string = "rajesh";
var phone:number = 9688042074;
var myage:number = 24;
var bike:string = "Pulsar";

console.log("My Name is "+ myname)
console.log("My Phone is "+ phone);
console.log("My Age is "+ myage);
console.log("My Bike is "+ bike);


function myfun(id:number,name:string,mail_id?:string) { 
    console.log("ID:", id); 
    console.log("Name",name); 
    
    if(mail_id!=undefined)  
    console.log("Email Id",mail_id); 
 }
 myfun(12,"Rajesh");
 myfun(11,"Raj","Raj45@gmail.com")



 function myoptions(price:number, rate:number=0.50) {
    var discount = price * rate;
    console.log("Discount Amount: ", discount);
 }
 myoptions(1000);
 myoptions(1000, 0.30);


 function factorial(num:number): number {
    if (num <= 0) {         
       return 1; 
    } else {     
       return (num * factorial(num - 1));    
    } 
 }; 
 console.log(factorial(7)); 
 
 

 var func = (x:any)=> { 
    if(typeof x=="number") { 
       console.log(x+" is numeric") 
    } else if(typeof x=="string") { 
       console.log(x+" is a string") 
    }  
 } 
 func(12) 
 func("yuvi")



 