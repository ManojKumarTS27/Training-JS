// task 1
 var Name1="Naveen";
var age=22;
var City= "Bangalore";

console.log("My Name is "+Name1+".");
console.log("I am " +age+" years old.");
console.log("I am from " +City+".");

// task 2
name2=prompt("What is your name?");

alert("Welcome");

confirm("Do you  want to learn JavaScript?");

// task 3

 let num=100;
 let str="World";
 let un;
 let a=true;
 let b=null;

 console.log("Value: "+num,"| Type:",typeof(num));
 console.log("Value: "+str,"| Type:",typeof(str));
 console.log("Value: "+un,"| Type:",typeof(un));
 console.log("Value: "+a,"| Type:",typeof(a));
 console.log("Value: "+b,"| Type:",typeof(b));

// task 4

let Colors=["blue","yellow","red","green","white","black"];

console.log("First color:",Colors[0]);
console.log("Last color:",Colors[5]);
console.log("Total colors:",Colors.length);

console.log("1st color:",Colors[0]);
console.log("2nd color:",Colors[1]);
console.log("3rd color:",Colors[2]);
console.log("4th color:",Colors[3]);
console.log("5th color:",Colors[4]);
console.log("6th color:",Colors[5]);

// task 5

let Subjects= ["Maths","Science","English","History","Computer"];
let index=prompt("Enter the index(0 to 4):");
console.log(Subjects[index])

// task 6

let Students={
Name3:"Surya",
Age1:25,
Course:"Frontend Developer",
Skills:["HTML","CSS","JavaScript"]};


console.log("Student Name: "+Students.Name3);
console.log("Second Skill: "+Students.Skills[1]);
console.log("Course Name: "+Students.Course)

// task 7

Product={
    Name5:"Laptop",
    Price:45000,
    instock: true
};

console.log("Product Name: "+Product.Name5)
console.log("Price: "+Product.Price)

if (Product.instock){
    console.log("Available: Yes")}
else{
    console.log("Out of Stock")
}

// task 8

Fruits={
    Tropical:["Mango","Pineapple"],
    Berries:["Strawberry","Blueberry"],
    Citrus:["Orange","Lemon"]
}

console.log(Fruits.Berries[1])
console.log(Fruits.Tropical[0])
console.log(Fruits.Citrus[1])
console.log("Total Categories:",3);