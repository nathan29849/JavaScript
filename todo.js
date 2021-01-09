const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");  // 만약 form, input 을 그대로 쓰게 된다면 const라 중복이 되어 좋지 않게 됨 ㅠㅠ

const TODOS_LS = "toDos";

let toDos = [];    // to do list!

function filterFn(toDo){
    return toDo.id === 1;
}

function deleteToDo(event) {
    // console.log(event.target.parentNode);
    // console.log(event.currentTarget.parentNode); // target과 currentTarget의 차이는?
    const btn = event.target;
    const li  = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    }); // filter는 array의 모든 아이템(filterFn의 조건을 만족하는)을 통해 함수를 실행, true인 아이템들만 가지고 새로운 array를 만듦.
    // console.log(cleanToDos);
    // console.log(toDos);
    toDos = cleanToDos;
    saveToDos();
}

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
    delBtn.addEventListener("click", deleteToDo); 
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

// function something(toDo) {
//     console.log(toDo.text);
// }

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        console.log(parsedToDos);
        parsedToDos.forEach(function(toDo){ // function을 호출하는 게 아니라 안에다 바로 만듦 (밖에다 호출해도 됨)
            console.log(toDo.text); // 지금 만들 이 함수를 parsedToDos에 있는 것들 각각에 대해 실행해 줄 것이므로
            paintToDo(toDo.text);
        })
    }
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
