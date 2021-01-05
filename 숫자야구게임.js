alert("숫자야구 게임을 시작합니다.");

let answer = []; // 정답 설정 
answer[0] = Math.floor(Math.random() * 10);
do {
    answer[1] = Math.floor(Math.random() * 10);
} while (answer[0] === answer[1]);
do {
    answer[2] = Math.floor(Math.random() * 10);
} while ( answer[0] === answer [1] || answer[1] === answer[2]);

console.log(answer);

let count = 0;
let strike = 0;
let ball = 0;

console.log(typeof(answer[1]));

while(count < 1) {
    let number = prompt("숫자를 연속하여 세 개 입력해주세요(0~10)");
    console.log(typeof(number[1]));
    for(let i = 0; i < 3; i++) {
        if (answer[i] == number[i]) {
            strike++;
            if(strike == 3) {
                count++;
            }
        } else {
            for (let j = 0; j < 3; j++) {
                if (i !== j && answer[i] == number[j]) {
                    ball++;
                }
            }
        }
    }
    alert(`strike : ${strike}  ball : ${ball}`);
}

alert("숫자 야구 게임을 성공적으로 마쳤습니다!");