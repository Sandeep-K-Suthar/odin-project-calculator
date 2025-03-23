const showNum = document.querySelector('.show-num');
let decimalCount = 0;



document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
        let checkType = Number(button.innerText)

        if (!isNaN(checkType)) {
            if (showNum.offsetWidth < 440 && showNum.innerText !== '0.') {
                if (showNum.innerText === '0') {
                    showNum.innerText = button.innerText;
                    
                }
                else {

                    showNum.append(button.innerText);
                }
            }

        }


        if (showNum.offsetWidth < 440 && button.innerText === '.' && decimalCount == 0 ) {

            showNum.append(button.innerText);
            decimalCount = 1;
        }
        if (button.innerText === '*' ) {
            
            showNum.innerText = 0;
        }
        if (button.innerText === '/' ) {
            
            showNum.innerText = 0;
        }
        if (button.innerText === '+' ) {
            
            showNum.innerText = 0;
        }
        if (button.innerText === '-' ) {
            showNum.innerText = 0;
        }
    
        
        
    })


});

