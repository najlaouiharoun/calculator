function handleEvents(num1,operator,num2,operationDone = false) {
    buttonSection = document.querySelector(".button-controls")
    buttonSection.addEventListener("click",(event)=>{
        let target = event.target
        let operationDone
        clearDoofus()

        if(target.classList.contains("num-button") || (target.id === "button-sub" && num1 === "")){
            if (operationDone) {
                [num2,operator,num1] = clearAll()
                operationDone = false
            }
            num1 += getInput(target)
            updateView(getInput(target))


            
        } else if (target.id == "button-clear"){
            [num1,operator,num2] = clearAll()
            operationDone = true

        } else if (target.classList.contains("operator-button") && operator === "" && num1 !=="" && num1 !=="-"){
            num2 = num1
            num1 = ""
            operator = getInput(target)         
            updateView(operator)
            operationDone = false


        } else if(target.classList.contains("operator-button") && num1 !=="" && num2 !==""&& num1 !=="-" ){
            [num2,operator,num1] = operate(+num2,operator,+num1)
            clearView()
            updateView(num2)
            operator = getInput(target)
            updateView(operator)
            operationDone = false


        } else if(target.id === "button-=" && operator !==""&& num1 !==""&& num2 !==""&& num1 !=="-"){
            [num2,operator,num1] = operate(+num2,operator,+num1)
            updateView(num2)
            num1 = num2
            operator = ""
            operationDone = true
        }
    })
}

