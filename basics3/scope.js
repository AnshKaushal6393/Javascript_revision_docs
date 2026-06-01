var c=300

if(true){
let a=10
const b=20
var c=30
}

// console.log(a);
// console.log(b);
console.log(c);

function one(){
    const username="Don"
    function two(){
        const website="www.google.com"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

function addone(num){
    return num+1
}
console.log(addone(5))