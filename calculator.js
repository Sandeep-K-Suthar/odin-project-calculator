const showNum = document.querySelector('.show-num');



document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
        let checkType = Number(button.innerText)

        if (!isNaN(checkType)) {
            if (showNum.offsetWidth < 440) {
                if (showNum.innerText === '0') {
                    showNum.innerText = button.innerText;
                    
                }
                else {

                    showNum.append(button.innerText);
                }
            }

        }


        if (showNum.offsetWidth < 440  ) {

            showNum.append(button.innerText);
            
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

