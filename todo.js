const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");  // 만약 form, input 을 그대로 쓰게 된다면 const라 중복이 되어 좋지 않게 됨 ㅠㅠ

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos(){
    // localStorage.setItem(TODOS_LS, toDos); // 이렇게 하면 [object Object],[object Object]... 이런식으로 저장됨 -> 자바스크립트의 data를 저장할 수 없음, string만 가능
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li"); // querySelector와는 달리 create something!
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos(); 
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; // 왜 이 코드가 input 창에서 글씨를 사라지게 하는걸까? -> 비워줌으로써..? ㅇㅇ
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        
    }
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
