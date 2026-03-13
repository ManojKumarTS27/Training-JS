let num1 =Number(prompt("Enter first number"));
let num2 =Number(prompt("Enter second number"));

let calculator =prompt("Choose any one(+, -, *, /): ");

if(calculator=="+"){
    console.log("Result:",num1+num2);
}
else if(calculator=="-"){
    console.log("Result:",num1-num2);
}
else if (calculator=="*"){
    console.log("Result:",num1*num2);
}
else if (calculator=="/"){
    console.log("Result:",num1/num2);
}
else{
    console.log("Invalid operation");
}
