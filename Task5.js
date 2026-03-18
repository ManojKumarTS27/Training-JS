// 1.
let employees = [ {name:"Ravi", salary:25000}, 
    {name:"Meena", salary:60000}, 
    {name:"Arun", salary:45000}, 
    {name:"Priya", salary:80000}, 
    {name:"John", salary:30000} ]

    let highsalary=employees.filter(employees=>employees.salary>40000)
    console.log(highsalary)

    let firsthigh=employees.find(employees=>employees.salary>70000)
    console.log(firsthigh)

    let totalsalary=employees.reduce((sum,employees)=>sum+employees.salary,0)
    console.log(totalsalary)

    let belowsalary=employees.some(employees=>employees.salary<20000)
    console.log(belowsalary);
    
    let abovesalary=employees.every(employees=>employees.salary>20000)
    console.log(abovesalary);
    console.clear()

// 2.
let products = ["laptop","mobile","tablet","smartwatch","mobile"]

let Tablet=products.includes("tablet") 
console.log(Tablet)

let firstindex=products.indexOf("mobile")
console.log(firstindex);

let lastindex=products.lastIndexOf("mobile")
console.log(lastindex)

let camera=products.includes("camera")
console.log(camera)
console.clear()

// 3.
let username = "  naveenkumar  "

let space=username.trim()
console.log(space)

let upper=space.toUpperCase()
console.log(upper)

let lower=space.toLowerCase()
console.log(lower);

let firstsix=space.slice(0,7)
console.log(firstsix)
console.clear()

// 4.
let games = ["cricket","football","hockey","tennis"]

games.forEach(function(game){
    console.log(game)
})

let newarr=games.map(game=>game.toUpperCase())
console.log(newarr)
console.clear()

// 5.

let marks = [45,90,23,67,88,12]

// let ascending=marks.sort()
// console.log(ascending);

// let descending=marks.sort((a,b)=>b-a)
// console.log(descending)

let reverse1=marks.reverse()
console.log(reverse1)

// 6.

let salaries = [10000,20000,30000,40000]

let salary1=salaries.reduce((sum,salary)=>sum+salary,0)
console.log("total",salary1)

let avgsalary=salary1/salaries.length
console.log("Average",avgsalary)
console.clear()

// 7.
let url = "www-stackly-com"

let result=url.split("-")
console.log(result)

// 8.
let role1="python developer"

let newrole=role1.replace("python","Javascript")
console.log(newrole);

let check=role1.startsWith("python")
console.log(check)

let end=role1.endsWith("developer")
console.log(end)
console.clear()

// 9.
let data = [1,2,[3,4,[5,6]]]

let finaldata=data.flat(2)
console.log(finaldata)

// 10.
let sports = ["cricket","football","tennis","hockey","golf"]

let result01=sports.slice(1,3)
console.log(result01)

let result02=sports.slice(0,3)
console.log(result02)
