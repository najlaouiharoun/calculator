function handleEvents(num1,operator,num2) {
    buttonSection = document.querySelector(".button-controls")
    let operationDone = false
    buttonSection.addEventListener("click",(event)=>{
        let target = event.target
        clearDoofus()

        if(isValidNumInput(target,num1) && operationDone ===true ){
            if (target.id !== "button-dot" ) {
            [num2,operator,num1] = clearAll()
            operationDone = false
            
                num1 += getInput(target)
                updateView(getInput(target))

 
            }
  
            
        } else if(isValidNumInput(target,num1)){
            num1 += getInput(target)
            updateView(getInput(target))


            
        } else if (target.id === "button-clear"){
            [num1,operator,num2] = clearAll()
            operationDone = true

        } else if (isValidOperatorInput(target,num1) && operator === "" ){
            num2 = num1
            num1 = ""
            num2 = ""
            operator = getInput(target)         
            updateView(operator)
            operationDone = false


        } else if(isValidOperatorInput(target,num1)&& num2 !=="" ){
            [num2,operator,num1] = operate(+num2,operator,+num1)
            clearView()
            updateView(num2)
            operator = getInput(target)
            updateView(operator)
            operationDone = false


        } else if(isOperatable(target,num1,operator,num2)){
            [num2,operator,num1] = operate(+num2,operator,+num1)
            updateView(num2)
            num1 = num2
            operator = ""
            operationDone = true
        }else if(target.id === "button-del" && num1 !== ""){
            num1 = String(num1).slice(0,-1)
            clearView()
            updateView(num2)
            updateView(operator)
            updateView(num1)

        }else if(target.id === "button-del" && num1 === "" && operator !== ""){
            operator = ""
            clearView()
            updateView(num2)
            updateView(operator)

        }else if(target.id === "button-del" && num1 === "" && operator === "" && num2 !==""){
            num2 = String(num2).slice(0,-1)
            clearView()
            updateView(num2)

        }
        toggleDot(num1)

    })
    document.addEventListener("keydown",(event)=>{
        let target = event
        clearDoofus()

        if(isValidNumInputKey(target,num1) && operationDone ===true ){
            if (target.key !== "." ) {
            [num2,operator,num1] = clearAll()
            operationDone = false
            
            
                num1 += getInput(target)
                updateView(getInput(target))

 
            }


            
        } else if(isValidNumInputKey(target,num1)){
            num1 += getInput(target)
            updateView(getInput(target))


            
        } else if (isValidOperatorInputKey(target,num1) && operator === "" ){
            num2 = num1
            num1 = ""
            operator = getInput(target)         
            updateView(operator)
            operationDone = false


        } else if(isValidOperatorInputKey(target,num1)&& num2 !=="" ){
            [num2,operator,num1] = operate(+num2,operator,+num1)
            clearView()
            updateView(num2)
            operator = getInput(target)
            updateView(operator)
            operationDone = false


        } else if(isOperatableKey(target,num1,operator,num2)){
            [num2,operator,num1] = operate(+num2,operator,+num1)
            updateView(num2)
            num1 = num2
            operator = ""
            num2 = ""
            operationDone = true
        }else if(target.key === "Backspace" && num1 !== ""){
            num1 = String(num1).slice(0,-1)
            clearView()
            updateView(num2)
            updateView(operator)
            updateView(num1)

        }else if(target.key === "Backspace" && num1 === "" && operator !== ""){
            operator = ""
            clearView()
            updateView(num2)
            updateView(operator)

        }else if(target.key === "Backspace" && num1 === "" && operator === "" && num2 !==""){
            num2 = String(num2).slice(0,-1)
            clearView()
            updateView(num2)

        }
        toggleDot(num1)
    })
}

function toggleDot(num) {
    if (String(num).includes('.')) {
        disableDot()
    } else{
        enableDot()
        }
}
function disableDot() {
    document.querySelector("#button-dot").disabled = true
}
function enableDot() {
    document.querySelector("#button-dot").disabled = false
}