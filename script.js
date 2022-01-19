let operation = ""
let screen = document.querySelector("div#screen")

function operationAdd(v){
    operation += String(v)
    screen.innerHTML = operation
}

function operationClear(){
    operation = ""
    screen.innerHTML = operation
}

function showResult(){
    let res = eval(operation)
    screen.innerHTML = res
    operation = String(res)
}

function removeLast(){
    operation = operation.slice(0, -1)
    screen.innerHTML = operation
}