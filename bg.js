const body = document.querySelector("body");

const IMG_NUMBER = 3;

// function handleImgLoad() {
//     console.log("finished loading");
// } // 만약 API에서 이 일을 하고 있었다면 필요했을 것임.

// const image_1 = new URL("https://user-images.githubusercontent.com/67811880/104209013-86d55700-5474-11eb-8a5a-480acce1d6e3.jpeg");
// const image_2 = new URL("https://user-images.githubusercontent.com/67811880/104209839-8ab5a900-5475-11eb-8960-c9e5ab0b5ecf.jpeg");
// const image_3 = new URL("https://user-images.githubusercontent.com/67811880/104210622-72925980-5476-11eb-9ba8-81dc73d67a12.jpeg");


function paintImage(imgNumber){
    const image = new Image();
    image.src = `https://nathan29849.github.io/JavaScript/images/${imgNumber + 1}.jpeg`;
    // console.log(number);
    // image.src = `image_${number}`;
    body.appendChild(image);
    image.classList.add("bgImage");
    // image.addEventListener("loadend", handleImgLoad);
} 


function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    // const backImage = `image_${number+1}`;    
    // console.log(backImage);
    // console.log(typeof(backImage));
    // console.log(typeof(image_1));
    // return backImage;
    return number;
}


function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
