const showNum = document.querySelector('.show-num');
let decimalCount = 0;
let num1 = 0;
let num2 = 0;
let operation = 'none';
let result = 0;


document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
        let checkType = Number(button.innerText)

        if (!isNaN(checkType)) {
            if (showNum.offsetWidth < 440) {
                if (showNum.innerText === '0' || showNum.innerText === 'Infinity' && showNum.innerText !== '0.' || result != 0) {
                    showNum.innerText = button.innerText;
                    result = 0;
                }
                else {

                    showNum.append(button.innerText);
                }
            }

        }


        if (showNum.offsetWidth < 440 && button.innerText === '.' && decimalCount == 0) {

            showNum.append(button.innerText);
            decimalCount = 1;
            if (showNum.innerText !== 0) {
            }
        }
        if (button.innerText === '*' && operation === 'none') {
            num1 = showNum.innerText;
            operation = button.innerText;
            showNum.innerText = 0;
        }
        if (button.innerText === '/' && operation === 'none') {
            num1 = showNum.innerText;
            operation = button.innerText;
            showNum.innerText = 0;
        }
        if (button.innerText === '+' && operation === 'none') {
            num1 = showNum.innerText;
            operation = button.innerText;
            showNum.innerText = 0;
        }
        if (button.innerText === '-' && operation === 'none') {
            num1 = showNum.innerText;
            operation = button.innerText;
            showNum.innerText = 0;
        }
        if (num1 != 0 && button.innerText === '=') {
            num2 = showNum.innerText;
            switch (operation) {
                case '*':

                    showNum.innerText = num1 * num2;
                    result = showNum.innerText;
                    operation = 'none'
                    break;
                case '/':
                    if (num2 == 0) {
                        showNum.innerText = 'Infinity';
                        result = showNum.innerText;
                        operation = 'none';
                        break;
                    }
                    else {
                        showNum.innerText = num1 / num2;
                        result = showNum.innerText;
                        operation = 'none';
                        break;
                    }
                case '+':
                    showNum.innerText = +num1 + +num2;
                    result = showNum.innerText;
                    operation = 'none'
                    break;
                case '-':
                    showNum.innerText = num1 - num2;
                    result = showNum.innerText;
                    operation = 'none'
                    break;

                default:
                    break;
            }
        }
        
    })


});

