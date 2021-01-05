const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser",
    SHOWING_ClassName = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault(); // 기본적으로 enter를 누르면 정보가 다른 곳으로 보내지는 것을 막아줌.
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    }

function askForName() {
    form.classList.add(SHOWING_ClassName);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_ClassName);
    greeting.classList.add(SHOWING_ClassName);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName(); // he is not
    } else {
        paintGreeting(currentUser); // he is 
    }
}

function init() {
    loadName();
}


init();