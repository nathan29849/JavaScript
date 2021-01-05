const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");  // 만약 form, input 을 그대로 쓰게 된다면 const라 중복이 되어 좋지 않게 됨 ㅠㅠ

const TODOS_LS = "toDos";

function paintToDo(text){
    const li = document.createElement("li"); // querySelector와는 달리 create something!
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; // 왜 이 코드가 input 창에서 글씨를 사라지게 하는걸까? -> 비워줌으로써..?
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {
    }
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
