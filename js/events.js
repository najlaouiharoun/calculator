function handleEvents(num1,operator,num2) {
    buttonSection = document.querySelector(".button-controls")
    let operationDone = false
    buttonSection.addEventListener("click",(event)=>{
        let target = event.target
        clearDoofus()

        if(isValidNumInput(target,num1) && operationDone ===true){
            [num2,operator,num1] = clearAll()
            operationDone = false
            
            num1 += getInput(target)
            updateView(getInput(target))


            
        } else if(isValidNumInput(target,num1)){
            num1 += getInput(target)
            updateView(getInput(target))


            
        } else if (target.id == "button-clear"){
            [num1,operator,num2] = clearAll()
            operationDone = true

        } else if (isValidOperatorInput(target,num1) && operator === "" ){
            num2 = num1
            num1 = ""
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