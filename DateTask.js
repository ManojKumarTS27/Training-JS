// 1)
// function digitalclock(){
//     let now = new Date()

//     let hours=now.getHours()
//     let minutes=now.getMinutes()
//     let seconds=now.getSeconds()
//     console.log(hours+":"+minutes+":"+seconds)
// }
// setInterval(digitalclock,1000)


// 2)
// let birthyr=prompt("Enter the year")
// let currentyr=new Date().getFullYear()
// let age=currentyr-birthyr;
// console.log("your age is "+age)

// 3)
// console.log("Website Loading...")
// setTimeout(()=>{
//     console.log("Website Loaded Successfully")
// },3000)


// 4)
// let Reminder=setInterval(()=>{
//     console.log("Take a Short Break")
// },5000)

// setTimeout(()=>{
//     clearInterval(Reminder)
//     console.log("Reminder Stopped")
// },20000)


// 5)
// console.log("Order Placed")
// setTimeout(()=>{
//     console.log("Order Preparing")
// },2000)
// setTimeout(()=>{
//     console.log("Out for Delivery")
// },5000)
// setTimeout(()=>{
//     console.log("Order Delivered")
// },8000)


// 6)
// fetch("https://jsonplaceholder.typicode.com/todos/")
// .then(Js=>Js.json())
// .then(data=>{
//     data.forEach(todo=>{
//         console.log(todo.title)
//     })
// })
// .catch(error=>{
//     console.log("Error:",error)
// })


// 7)
// fetch("https://jsonplaceholder.typicode.com/todos?completed=true")
//   .then(res => res.json())
//   .then(tasks => console.log(tasks));


// 8)
// let url="https://jsonplaceholder.typicode.com/todos/"

// fetch(url)
// .then(response=>{
//     if(!response.ok) throw new Error()
//     console.log("Data Received")
// })
// .catch(()=>{
//     console.log("Server Error")
// })
// .finally(()=>{
//     console.log("Process Completed")
// })


// 9)
// let time=10
// const timer=setInterval(()=>{
//     if(time>0){
//         console.log(time)
//         time--;
//     }else{
//         console.log("Meeting Started")
//         clearInterval(time)
//     }
// },1000)


// 10)
console.log("User Logged In")
setTimeout(()=>{
    console.log("Session Expired.Please Login Again")
},10000)