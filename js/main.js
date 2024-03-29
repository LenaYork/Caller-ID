const userNumberInput = document.getElementById("userNumber");
 
function showOperator(number) {
    number = number.toString();
    const operatorNum = number.substr(0, 2);
    const firstNum = number.substr(2, 1 );
    const cantDefine = 'неизвестный оператор. Проверьте номер';
    let result;
    const codes = {
        15: 'cтационарный телефон, Гродно или Гродненская область',
        16: 'cтационарный телефон, Брест или Брестская область',
        17: 'cтационарный телефон, Минск или Минская область',
        21: 'cтационарный телефон, Витебск или Витебская область',
        22: 'cтационарный телефон, Могилев или Могилевская область',
        23: 'cтационарный телефон, Гомель или Гомельская область',
        25: 'Life:)',
        29: {
            velcom: [1, 3, 6, 9],
            mts: [2, 5, 7, 8],
        },
        33: 'МТС',
        44: 'А1(Velcom)',
    }
    
    if (operatorNum === '29') {
        if (codes[operatorNum].velcom.includes(+firstNum)) {
            result = codes[44];
        } else if (codes[operatorNum].mts.includes(+firstNum)) {
            result = codes[33];
        } 
    } else result = codes[operatorNum];
    return result || cantDefine;
}

 function checkUserInput(num) {
    const numberPattern = /^\d+$/;
    if (num && !numberPattern.test(num)) {
        return "Используйте только цифры! ";
    } else return "";
}

function defineOperator(num) {
    const perfectNumber = new RegExp (/^[0-9]{9,9}$/);
    if (num === "") {
        return "";
    }
    return (perfectNumber.test(num)) 
        ? 'Номер '+num +'. Это '+ showOperator(num) 
        : 'Номер введен некорректно.';
}

function createResultMessage() {
    const number = userNumberInput.value;

    document.getElementById("callerIdResult").innerHTML = checkUserInput(number) + defineOperator(number);
}

function showInfo() {
    console.log("open")
    document.querySelector(".main-container").classList.add("inactive-bg");
    document.querySelector("#mainInfoContainer").classList.add("active-modal");
    document.querySelector("#mainInfo").classList.add("active-modal");
}

function hideInfo() {
    console.log("close")
    document.querySelector(".main-container").classList.remove("inactive-bg");
    document.querySelector("#mainInfoContainer").classList.remove("active-modal");
    document.querySelector("#mainInfo").classList.remove("active-modal");
}

userNumberInput.addEventListener('keyup', createResultMessage);
document.querySelector("#questionIcon").addEventListener("click", showInfo);
document.querySelector("#closeIcon").addEventListener("click", hideInfo);