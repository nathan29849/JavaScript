let problem = "비행기";
let start = alert("지금부터 끝말잇기를 시작합니다!");
let count = 0;
let right = 0;
let wrong = 0;
let name = "";

while(count <5){
    let answer = prompt(problem);
    if(problem[problem.length - 1] == answer[0]) {
        alert("딩동댕~^_^");
        problem = answer;
        right++;
        console.log("ㅇ;");
    } else {
        alert("땡!")   
        wrong++;
    }
    count++;
}

alert("총 5번의 기회가 끝나 게임을 종료합니다.")
name = prompt("귀하의 성함은 무엇입니까?");
alert(`${name}님은 총 5개 중 ${right}개를 맞추었고, ${wrong}개를 틀리셨습니다!`);