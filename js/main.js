 document.getElementById("getCallerId").onclick = function () {
    let number = document.getElementById("userNumber").value; //связываем id и переменную
    let result;
    
        if (isNumeric(+number) === false) {
        alert ("Номер должен состоять только из цифр 0 - 9. Введите верный номер");
        throw "stop";
    }
    
     checkNumber(number);
     
    function isNumeric(number) { //проверка на число (должно быть true)
        return !isNaN(parseFloat(number)) && isFinite(number);
    }
    
    function checkNumber(number) { //проверка длины тел.номера (должно быть 9) 
        if (number.length != 9) {     
            alert ("Номер телефона должен содержать 9 цифр, включая код оператора (29,33,44)");
            throw "stop";
        } 
    }
    
    number = number.toString();
    let number1 = number.substr(0, 2);
    let cantDefine = "неизвестный оператор. Проверьте номер";
    
    getOperatorName (number);
    
    function getOperatorName (number) { //определение оператора мобильного тел.
        if ( number1 == "25" ) {
            result=" Life!:)";
        } else if ( number1 == "33" ) {
                result = "МТС";
        } else if ( number1 == "44" ) {
                result = "A1 (Velcom)";
        } else if (number1 == "29" ) {
                let number2 = number.substr(2, 1 );
                    
                switch(number2) {
                case "1":
                case "3":
                case "6":
                case "9":
                result = "Velcom";
                break;
                
                case "2":
                case "5":
                case "7":
                case "8":
                result = "МТС";
                break;
                
                default:
                result = cantDefine; 
                }
        } else  switch(number1) {
            case "15":
            result = "cтационарный телефон, Гродно или Гродненская область";
            break;
            
            case "16":
            result = "cтационарный телефон, Брест или Брестская область";
            break;
            
            case "17":
            result = "cтационарный телефон, Минск или Минская область";
            break;
            
            case "21":
            result = "cтационарный телефон, Витебск или Витебская область";
            break;
            
            case "22":
            result = "cтационарный телефон, Могилев или Могилевская область";
            break;
            
            case "23":
            result = "cтационарный телефон, Гомель или Гомельская область";
            break;
            
            default:
            result = cantDefine;
            } 
    
    alert ("Номер "+number +". Это "+ result);
    }
}