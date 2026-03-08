// Section 1 if/if Else

// 1)

let num=15;
if(num>10){
    console.log("Number is Big")
}

// 2)

let age=20
if(age>=18){
    console.log("Eligible to vote")
}
else{
    console.log("Not eligible to vote")
}

// 3)
let Temperature=20;
if(Temperature>30){
    console.log("Hot")
}
else{
    console.log("Cool")
}

// 4)
let num1=-5;
if(num1 >= 0){
    console.log("Positive")
}
else{
    console.log("Negative")
}

// 5)

// let num2=prompt("Enter the Number");
// if(num2 % 2 == 0){
//     console.log("Even")
// }
// else{
//     console.log("Odd")
// }

console.clear()



// Section-2 Else if

// 1)
let Marks = 49;
if(Marks>=90){
    console.log("Grade A")
}
else if(Marks>=70){
    console.log("Grade B")
}
else if(Marks>=50){
    console.log("Grade C")
}
else{
    console.log("Fail")
}
console.clear()

// 2)
// let hour = prompt("Enter Hour (24hrs)");
// if(hour < 12){
//     console.log("Morning")
// }
// else if(hour < 17){
//     console.log("Afternoon")
// }
// else if(hour < 21){
//     console.log("Evening")
// }
// else{
//     console.log("Night")
// }

// 3)
// let num4=prompt("Enter the Number");
// if(num4 > 0){
//     console.log("Positive")
// }
// else if(num4 < 0){
//     console.log("Negative")
// }
// else{
//     console.log("Zero")
// }

// 4)
// let score=Number(prompt("Enter the Score"));
// if(score >= 100){
//     console.log("Winner")
// }
// else if(score >= 50 && score <= 99){
//     console.log("Good")
// }
// else{
//     console.log("Try again")
// }

// 5)

// let a=Number(prompt("Enter the Number A"));
// let b= Number(prompt("Enter the Number B"));
// let c= Number(prompt("Enter the Number C"));
// if(a>b && a>c){
//     console.log("A is largest")
// }
// else if(b>a && b>c){
//     console.log("B is largest")
// }
// else if(c>a && c>b){
//     console.log("C is largest")
// }



// Section-3 Switch

// 1)
let day=1;
switch(day){
    case 1: console.log("Monday");break;
    case 2: console.log("Tuesday");break;
    case 3: console.log("Wednesday");break;
    case 4: console.log("Thursday");break;
    case 5: console.log("Friday");break;
    case 6: console.log("Saturday");break;
    case 7: console.log("Sunday");break;
    default: console.log("Invalid day");
}

// 2)
let Trafficlight=1;
switch(Trafficlight){
    case 1: console.log("Stop");break;
    case 2: console.log("Ready");break;
    case 3: console.log("Go");break;
    default : console.log("pleasant day");
}

// 3)
let Month = "May";

switch(Month){
    case "December":
    case "January":
    case "February":console.log("Winter");break;

    case "March":
    case "April":
    case "May":console.log("Summer");break;

    case "June":
    case "July":
    case "August":
    case "September":console.log("Rainy");break;

    case "October":
    case "November":console.log("Autumn");break;

    default:
        console.log("Invalid Month");
}
console.clear()

// 4)
let role="Admin";
switch(role){
    case "Admin": console.log("Welcome admin");break;
    case "User": console.log("Welcome user");break;
    case "Guest": console.log("Welcome guest");break;
    default : console.log("Unknown Role");
}

// 5)
let Grade="B";
switch(Grade){
    case "A": console.log("Excellent");break;
    case "B": console.log("Good");break;
    case "C": console.log("Average");break;
    case "D": console.log("Needs to Improve");break;
    default : console.log("Invalid Grade");
}


// Section-4 For Loop

// 1)
for(let i=1; i <=10;i++){
    console.log(i)
}

// 2)
for(let a=10;a>=1;a--){
    console.log(a)
}
console.clear()

// 3)
for(let b=1;b<=20;b++)
    if(b%2==0){
    console.log(b)
}

// 4)
for(let i=1;i<=20;i++)
    if(i%2!==0){
    console.log(i)
}

// 5)
for(let m=1;m<=10;m++){
    console.log("5x"+ m +"="+(5*m))
}
console.clear()


// Section-5 While Loop

// 1)
let i=1;
while(i<=5){
    console.log(i)
i++;
}

// 2)
let a=5
while(a>=1){
    console.log(a);
a--;
}

// 3)
let b=1
while(b<=10){
if(b%2==0){
    console.log(b)
    }
b++;
}

// 4)
let s=1;
let sum=0;
while(s<=10){
    sum=sum+s;
    s++;
}
console.log(sum)

console.clear()

// 5)
let c=1;
while(c<=5){
    console.log(c*c)
c++;
}

