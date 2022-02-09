

// Basic example for classes
// class Student {  
//     studCode: number;  
//     studName: string;  
  
//     constructor(code: number, name: string) {  
//             this.studName = name;  
//             this.studCode = code;  
//     }  
  
//     getGrade() : string {  
//         return "A+" ;  
//     }  

    
// }  
// console.log(Student.name);


class Player { 
     
    name:string; 
    
    
    constructor(name:string) { 
       this.name = name
    }  
    
    
    disp():void { 
       console.log("Indian captain name is   :   "+this.name) 
    } 
 } 
 
 
 var obj = new Player("Hitman sharma")
 
 obj.disp();


 class Batsman {   
    
    id: number;  
    name:string;  

    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }
  
    
    display():void {   
        console.log("Jersy NO is: "+this.id)   
        console.log("Batsman Name is: "+this.name)   
    }   
}   
  
     
let object = new Batsman(18,"vk"); 
object.display();  




// class Studentt {   
//   id1:number;  
//   name1:string;  
// }   

// let obj2 = new Studentt();  
// obj2.id1 = 101;  
// obj2.name1 = "Virat Kohli";  

// console.log("Student ID: " + obj2.id1,);  
// console.log("Student Name: " + obj2.name1);  


class Shape { 
    Area:number 
    
    constructor(a:number) { 
       this.Area = a 
    } 
 } 
 
 class Circle extends Shape { 
    disp():void { 
       console.log("Area of the circle:  "+this.Area) 
    } 
 }
   
 var obj3 = new Circle(223); 
 obj3.disp()


 class PrinterClass { 
    doPrint():void {
       console.log("doPrint() from Parent called…") 
    } 
 } 
 
 class StringPrinter extends PrinterClass { 
    doPrint():void { 
       super.doPrint() 
       console.log("doPrint() is printing a string…")
    } 
 } 
 
 var obj1 = new StringPrinter() 
 obj1.doPrint()


 class StaticMem {  
    static num:number; 
    
    static disp():void { 
       console.log("The value of num is"+ StaticMem.num) 
    } 
 } 
 
 StaticMem.num = 12     
 StaticMem.disp()   



 interface ILoan { 
    interest:number 
 } 
 
 class AgriLoan implements ILoan { 
    interest:number 
    rebate:number 
    
    constructor(interest:number,rebate:number) { 
       this.interest = interest 
       this.rebate = rebate 
    } 
 } 
 
 var obj4 = new AgriLoan(10,1) 
 console.log("Interest is : "+obj4.interest+" Rebate is : "+obj4.rebate )



 class Car {   
    Color:string     
    constructor(color:string) {   
       this.Color = color  
    }   
 }   
 class Audi extends Car {   
     Price: number  
     constructor(color: string, price: number) {  
         super(color);  
         this.Price = price;  
     }  
     display():void {  
         console.log("Color of Audi car: " + this.Color);  
         console.log("Price of Audi car: " + this.Price);  
     }  
 }  
 let obj5 = new Audi(" Black", 8500000 );  
 obj5.display();  



 class Animal {   
    eat():void {   
        console.log("Eating")   
     }   
}   
class Dog extends Animal {   
   bark():void {   
      console.log("Barking")   
   }   
}  
class BabyDog extends Dog{   
    weep():void {   
        console.log("Weeping")   
     }  
}  
let obj6 = new BabyDog();   
obj6.eat();  
obj6.bark();  
obj6.weep();

