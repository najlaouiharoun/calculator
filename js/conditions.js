function isValidNumInput(target,num) {
    return target.classList.contains("num-button") || (target.id === "button-sub" && num === "") || (target.id === "button-dot" && num !== "" && !String(num).includes("."))
}
function isValidOperatorInput(target,num){
    return target.classList.contains("operator-button") && num !=="" && num !=="-"
}

function isOperatable(target,num1,operator,num2) {
    return target.id === "button-=" && operator !==""&& num1 !=="" && num2 !==""&& num1 !=="-"
}
function isValidNumInputKey(target,num) {
    return NUMBERS.includes(target.key) || (target.key === "-" && num === "") || (target.key === "." && num !== "" && !String(num).includes("."))
}
function isValidOperatorInputKey(target,num){
    return OPERATOR.includes(target.key) && num !=="" && num !=="-"
}

function isOperatableKey(target,num1,operator,num2) {
    return (target.key === "Enter" || target === "=") && operator !==""&& num1 !=="" && num2 !==""&& num1 !=="-"
}