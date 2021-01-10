const body = document.querySelector("body");

const IMG_NUMBER = 3;

// function handleImgLoad() {
//     console.log("finished loading");
// } // 만약 API에서 이 일을 하고 있었다면 필요했을 것임.

function paintImage(imgNumber){
    const image = new Image();
    image.src = `/images/${imgNumber + 1}.jpeg`;
    body.appendChild(image);
    image.classList.add("bgImage");
    // image.addEventListener("loadend", handleImgLoad);
} 

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
