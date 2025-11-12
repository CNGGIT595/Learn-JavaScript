    
    function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
                    let result = multiply(num1, num2);
                    let result2 = addition(num1, num2);
                    let result3 = division(num1, num2);

                    // Display the result
                    displayResult(result, result2, result3);
                } else {
                    displayResult('Please enter valid numbers', '', '');
                }
            }

            function multiply(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;

                // Multiply the numbers
                return a * b;
            }
            function addition(a, b) { 
                debugger; 
                return a + b; 
            }
            function division(a, b) { 
                debugger; 
                if (b == 0) 
                    return ('Number 2 cannot be zero')
                else 
                    return a / b; 
            }

            function displayResult(result, result2, result3) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('result');
                const resultElement2 = document.getElementById('result2');
                const resultElement3 = document.getElementById('result3');
                resultElement.textContent = `The Multiply result is: ${result}`;
                resultElement2.textContent = `The Addition result is:  ${result2}`; 
                resultElement3.textContent = `The Division result is: ${result3}`;
            }
        