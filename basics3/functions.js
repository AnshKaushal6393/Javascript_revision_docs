console.log("Functions");

// Functions are reusable blocks of code that perform a specific task. They can take inputs, called parameters, and can return a value. Functions help to organize code, make it more readable, and allow for code reuse.

function sayMyName(){
    console.log("My name is Don");
}
sayMyName();

function add(a,b){
    console.log(a+b);
}
add(5,10);

function loginUser(username){
    if(username === undefined){
        console.log("Please provide a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUser());

function calculateCartPrice(...num1){ //rest operator
    return num1
}

console.log(calculateCartPrice(100,200,300));

