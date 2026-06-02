const user={
    username:"don",
    price:999,

    welcomeMessage:function(){
        console.log("Welcome "+this.username);
        console.log(this)
    }
}

user.welcomeMessage()
user.username="john"
user.welcomeMessage()

console.log(this)

// function chai(){
//     console.log(this);
// }
// chai()

// const chai=()=>{
//     console.log(this);
// }

const add=(a,b)=>{
    return a+b
}
console.log(add(5,10))