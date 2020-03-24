 function getOperator(number) {
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

function defineOperator() {
    let number = document.getElementById("userNumber").value; //связываем id и переменную
    let finalResult;
    // const NUMBER_LENGTH = 9; //в номере телефона 9 цифр
    const perfectNumber = new RegExp (/^[0-9]{9,9}$/);
   
    finalResult = (perfectNumber.test(number)) 
        ? 'Номер '+number +'. Это '+ getOperator(number) 
        : 'Номер введен некорректно.';

    document.getElementById("callerIdResult").innerHTML = finalResult;
}
 document.getElementById("getCallerId").addEventListener('click', defineOperator);