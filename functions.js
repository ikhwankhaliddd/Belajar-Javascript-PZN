function sayHello(){
    console.log("Hello");
}

var sayBye = function(){
    console.log("Bye");
}

function sing(song){
    console.log(song);
}

sayHello();
sayBye();

sing("Laa de daa");
sing("Hellooooo")


var a = function multiply(a, b){
    if(a > 10 || b > 10){
        return "That's too hard";
    }
    return a * b;
}

console.log(a(5,10));
console.log(a(3,10))