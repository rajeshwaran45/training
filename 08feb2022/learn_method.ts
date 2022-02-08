class Cat {
    sayHello(name: string): void {
        console.log(`Hello ${name}`);
    }
}
function method_ex1_test() {
    var tom: Cat = new Cat(); 
    tom.sayHello("Jerry"); 
}

method_ex1_test();



class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
    changeWidthHeight(newWidth: number, newHeight: number): void {
        this.width = newWidth;
        this.height = newHeight;
    }
    showMe(): void {
        console.log(`rectangle output values, width: ${this.width}, height: ${this.height}`);
    }
}
function method_ex2_test() {
    var rec = new Rectangle(5, 10); 

    rec.showMe();  
    var area = rec.getArea();  
    console.log(`Area: ${area}`);

    console.log(` --- Change width and height --- `);
    rec.changeWidthHeight(25, 15); 

    rec.showMe(); 
    area = rec.getArea(); 
    console.log(`Area: ${area}`);
}
method_ex2_test(); 


class MyUtility {
    static sum(a: number, b: number): number {
        return a + b;
    }
    public static minus(a: number, b: number): number {
        return a - b;
    }
}
function method_static_ex1_test() {
    var result = MyUtility.sum(100, 50);
    console.log(`Sum Result: ${result}`);

    result = MyUtility.minus(100, 50);
    console.log(`Minus Result: ${result}`);
}
method_static_ex1_test(); 



class Triangle {
    side1: number; side2: number; side3: number;
    static DEFAULT_COLOR:string = 'blue'; 
    constructor(s1: number, s2: number, s3: number) {
        var valid = Triangle.isValidSides(s1, s2, s3); 
        if (!valid) {
            throw new Error('Invalid Sides!'); 
        }
        this.side1 = s1;
        this.side2 = s2;
        this.side3 = s3;
    }
    static isValidSides(s1: number, s2: number, s3: number): boolean {
        if (s1 < 0 || s2 < 0 || s3 < 0) {
            return false;
        }
        return s1 + s2 > s3 && s1 + s3 > s2 && s2 + s3 > s1;
    }
    isEquilateralTriangle(): boolean {
        return this.side1 == this.side2 && this.side2 == this.side3;
    }
}
function method_static_ex2_test() {
    var valid = Triangle.isValidSides(6, 8, 10);
    console.log(`Are sides 6, 8 and 10 valid to make a triangle? ${valid}`);

    var triangle = new Triangle(3.0, 4.0, 5.0);
    
    var check = triangle.isEquilateralTriangle();
    console.log(`Is Equilateral Triangle? ${check}`);
}
method_static_ex2_test(); 