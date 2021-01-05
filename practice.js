console.log('Im Wroking. Im JS, Im Beautiful. Im worth it');

// let c = a - 5
const a = 221;
let b = a - 5;
// a = 4;
console.log(b, a);

const what = "Nathan🏄🏼";
console.log(what);

const wat = false;
console.log(wat);

const float = 22.34;
console.log(float);

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", true];
console.log(daysOfWeek);
console.log(daysOfWeek[3]);

const nathanInfo = {
    name: "Nathan",
    age: 26,
    gender: "male",
    isHansome:true,
    favMovie: ['Inception', 'Tenet'],
    favFood: [
        {
            name: "Kimchi",
            fatty: false
        },
        {
            name: "Cheese burger",
            fatty: true
        }
    ]    
}

console.log(nathanInfo.age);
console.log(nathanInfo.favFood[1].name);
console.log(console, nathanInfo)


// 함수를 정의하는 방법
function sayHello(potato, chicken){
    console.log('Hello!', potato, "you have", chicken, "years of age");

}

sayHello("nathan", 73);
sayHello(32, 100);
console.log();

function say(potato, age){
    return `Hello ${potato} you are ${age} yaars old`;
}

// sayHelle("nathan", 13);


const greetNathan = say("Nathan", 12);

console.log(greetNathan)

const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    multiply: function(a, b){
        return a * b;
    },
    devide: function(a, b){
        return a / b; 
    },
    square: function(a, b){
        return a ** b;
    }
}

const plus = calculator.plus(5, 5);
const minus = calculator.minus(10, 5);
const multiply = calculator.multiply(2, 5);
const devide = calculator.devide(50, 10);
const square = calculator.square(10, 1);
console.log(plus, minus, multiply, devide, square);


const title = document.querySelector("#title");
console.log(title);

console.error("Fuck");
// title.innerHTML = "Hi! From JS";

console.dir(title);
// title.style.color = "red";

document.title = "I own you now";


function handleResize(){
    console.log("I have been resized");
}
window.addEventListener("resize", handleResize);

// function handleClick(event){
//     title.style.color = "blue";
// }

// window.addEventListener("click", handleClick);

if(10 === 5) {
    console.log("hi");
} else if(10 > 5){
    console.log("ho");
} else if (10 < 5) {
    console.log("ka");
}

if(20 > 5 || "nathan" === "nathan") {
    console.log("yes");
} else {
    console.log("no");
}

// const age = prompt("How old are you");
// console.log(age);
// if(age >= 18 && age <= 21){
//     console.log("you can drink! but you should not");
// } else if (age > 21){
//     console.log("go ahead");
// } else {
//     console.log("you can't");
// }

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

// function handleClick() {
//     const currentColor = title.style.color;
//     if (currentColor === BASE_COLOR) {
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }

// function init() {
//     title.style.color = BASE_COLOR;
//     title.addEventListener("mouseenter", handleClick);
// }

// init();

function handleOffline() {
    console.log("Bye bye");
}

function handleOnline() {
    console.log("Welcome back")
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);


const CLICKED_CLASS = "clicked";

function handleClick() {
    // const hasClass = title.classList.contains(CLICKED_CLASS); // True or False
    // hasClass는 엘리먼트가 CLICKED_CLASS를 가지는지 체크함
    // const currentClass = title.className;
    // if (!hasClass){
    //     title.classList.add(CLICKED_CLASS);
    // } else {
    //     title.classList.remove(CLICKED_CLASS);
    // toggle은 우리가 했던 모든 걸 요약함.
    title.classList.toggle(CLICKED_CLASS); // 클래스가 거기 있는지 체크해서 있으면 add, 없으면 remove
    // }
}
// function handleClick() {
//     const currentClass = title.className;
//     if (currentClass !== CLICKED_CLASS){
//         title.className = CLICKED_CLASS;
//     } else {
//         title.className = "";
//     }
// }

function init() {
    title.addEventListener("click", handleClick);
}

init();