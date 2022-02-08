

interface Myemployee {
    empName:string;
    empCode:number;
    getSalary:(num:number) => number;
    getmanagername:(num:number) =>string;
}
const emp : Myemployee = {
    empName: "kumar",
    empCode: 124,
    getSalary : (n)=>{
        return n;
    },
    getmanagername: function(n) {
        return ``;
    }

};
console.log("Employee name:" + emp.empName)
console.log("Employee code:" + emp.empCode);


interface Iperson {
    firstName : string,
    lastName : string,
    fullName() : string;

}

const person: Iperson = {
    firstName : 'selva',
    lastName : "rajesh",
    fullName: function() {
        return `${this.firstName} ${this.lastName} ${this}`
    }

}

function Display(obj: Iperson) : Iperson {
    return obj
}
console.log(Display(person));


// Single interfaces inheritance


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


// Multiple interfaces inheritances

interface IParent1 { 
    v1:number 
 } 
 
 interface IParent2 { 
    v2:number 
 } 
 
 interface Child extends IParent1, IParent2 { } 
 var Iobj:Child = { v1:12, v2:23} 
 console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2)