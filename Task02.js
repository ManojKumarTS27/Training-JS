// Section 1
// 1)Addition,Subraction,Multiplication,Division

console.log(25+9);
console.log(25-4);
console.log(25*4);
console.log(25/4);

// 2)
console.log(100%30);

// 3)
console.log(7**2);

// 4)
console.log(2**5);

// 5)
var num1=50;
console.log(num1/5);

// 6)
console.log(45%6);

// 7)
console.log(0.5*8);

// 8)
console.log(75-200);

// 9)
console.log(10+20+30);

// 10)
console.log(9%2);

console.clear()
// Section 2

// 11) 6
//     5

// 12)6
//    6

// 13)(11,10)

// 14)(11,11)

// 15) (3,3)

// 16)(3,5)

// 17)4

// 18)4

// 19)(4,4)

// 20)(4,5)

// 21)(5,10)

// 22)(1,7)

// 23)(4,8)

// 24)(8,18)

// 25) 21

// Section 3
// 26
let a=10;
a+=5
console.log(a)
// 27
let b=20;
b-=8;
console.log(b)
// 28
let c=7;
c*=3;
console.log(c)
// 29
let d=40;
d/=5;
console.log(d)
// 30
let G=25;
G%=4;
console.log(G)

// 31) 16

// 32) 2

// 33) 2

// 34) 12

// 35) 25

// Section 4

console.log(5=="5") //True
console.log(5==="5")//False
console.log(0==false)//True
console.log(0===false)//False
console.log(null==undefined)//True
console.log(null===undefined)//False
console.log("10">5)//True
console.log("2">"10")//True
console.log(true==1)//True
console.log(true===1)//false


// Section 5

console.log(true&&false)//False
console.log(true||false)//True
console.log(false||false)//False
console.log(!true)//False
console.log(!(5>2))//False
console.log(5>3 && 10>5)//True
console.log(5>3 && 10<5)//False
console.log(5>3 || 10>5)//True
console.log(5>2 && 3>1) || (10<2)//True


// Section 6

let age=20;
age >=18 ? console.log("Adult") : console.log("Minor");

let Mark=45;
Mark>=50 ? console.log("Pass") : console.log("Fail");

let number= 10;
number%2==0 ? console.log("Even") : console.log("Odd");

let Marks=80;
Marks >=90 ? console.log("Grade O"):
Marks >=70 ? console.log("Grade A"):
Marks >=50 ? console.log("Grade B"):
console.log("Fail")

let num = -1;
num >= 0 ? console.log("Positive"): console.log("Negative");

// Section 7

console.log("Hello"+""+"World")

let Firstname="Manoj";
let Lastname="Kumar";
console.log(Firstname+""+Lastname);

console.log("Manoj"+""+"Kumar"+" "+"T"+" "+"S")

console.log("10"+5);

console.log(5+"10");

console.clear()
// Section 8

console.log(typeof("5"+2));

console.log(typeof("5"-2));

console.log(typeof("5"*2));

console.log(typeof(true+1));

console.log(typeof(false+"1"));

console.clear()
// Section 9

console.log(Number("123")); //123

console.log(Number("abc")); //NaN

console.log(Number(true)); //1

console.log(Boolean("")); //false

console.log(Boolean("hello")); //true

// Final

// 1) == ;
//         Compares values only
//         performs type conversion
//    ===;
//         compares values and data type
//         no type conversion

// 2) a++ ;
//         post increment
//         value used first,then increased

//    ++a ;
//         pre increment
//         value increased first,then used

// 3) List of falsy values;
            // false
            // 0
            // -0
            // undefined
            // ""
            // NaN
            // null

// 4) ("5"-2) ;
//         -(minus) operator works only with number
//         JS automatically converts "5"string  to Number 5
    
//    ("5"+2) ;
//         if one value is a string,JS converts the other value to string

// 5) null==undefined is true;
//         true
//         loose equality treats them as equal
