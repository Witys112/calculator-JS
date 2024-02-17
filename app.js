const display = document.getElementById("display");
    display.value = "0";

    const disabledKeys = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'CapsLock', 'Tab', 'Shift', 'Control', 'Alt', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

    document.addEventListener("keydown", function(event) {
        const key = event.key;
        if (disabledKeys.includes(key)) return;
        switch (key) {
            case '*':
            case '/':
            case '+':
            case '-':
                displayOperator(key);
                break;
            case '.':
                displayDecimal();
                break;
            case 'Backspace':
                displayUndo();
                break;
            case 'c':
            case 'C':
            case 'Escape':
                clearDisplay();
                break;
            case 'Enter':
            case '=':
                calculate();
                break;
            default:
                if(/[0-9]/.test(key)) {
                    displayNumber(key);
                }
        }
    });

    function displayNumber(input){
        if(display.value.length < 12) {
            if(display.value === "0") {
                display.value = input;
            } else {
                display.value = display.value.slice(0, 12);
                display.value += input;
            }
        }
    }

    function displayOperator(input){
        if(display.value != '' && !isNaN(display.value.charAt(display.value.length - 1))) {
            display.value += input;
        }
    }
    
    function displayUndo(){
        display.value = display.value.slice(0, -1);
    }

    function displayDecimal() {
        if(display.value === '') {
            display.value = '0.';
        } else if(!display.value.includes('.')) {
            display.value += '.';
        }
    }

    function clearDisplay(){
        display.value = "0";
    }

    function calculate(){
        try{
            let result = eval(display.value);
            display.value = String(result).slice(0, 12);
        }
        catch(error){
            display.value = "Error";
        }
    }

    function calculateSqrt() {
        try {
            const inputValue = parseFloat(display.value);
            if (!isNaN(inputValue)) {
                const result = Math.sqrt(inputValue);
                display.value = String(result).slice(0, 12);
            } else {
                display.value = "Error";
            }
        } catch (error) {
            display.value = "Error";
        }
    }
    
    function calculatePower() {
        try {
            const inputValue = parseFloat(display.value);
            if (!isNaN(inputValue)) {
                const result = inputValue ** 2;
                display.value = String(result).slice(0, 12);
            } else {
                display.value = "Error";
            }
        } catch (error) {
            display.value = "Error";
        }
    }
    
    function calculateFractions() {
        try {
            const inputValue = parseFloat(display.value);
            if (!isNaN(inputValue) && inputValue !== 0) {
                const result = 1 / inputValue;
                display.value = String(result).slice(0, 12);
            } else {
                display.value = "Error";
            }
        } catch (error) {
            display.value = "Error";
        }
    }

    function changeNegation(){
       if(display.value !== "0"){
        display.value = (parseFloat(display.value) * -1).toString();
       }
    }