const vag = document.getElementById("vag")
const gun = document.getElementById("gun")
const beyog = document.getElementById("beyog")
const jog = document.getElementById("jog")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const zero = document.getElementById("zero")
const dot = document.getElementById("dot")
const clearDisplay = document.getElementById("clearDisplay")
const deleteLast = document.getElementById("deleteLast")
const calculateResult = document.getElementById("calculateResult")

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

vag.addEventListener("click",function () {
    appendToDisplay('/')
})

gun.addEventListener("click",function () {
    appendToDisplay('*')
})

beyog.addEventListener("click",function () {
    appendToDisplay('-')
})

jog.addEventListener("click",function () {
    appendToDisplay('+')
})

one.addEventListener("click",function () {
    appendToDisplay('1')
})

two.addEventListener("click",function () {
    appendToDisplay('2')
})

three.addEventListener("click",function () {
    appendToDisplay('3')
})

four.addEventListener("click",function () {
    appendToDisplay('4')
})

five.addEventListener("click",function () {
    appendToDisplay('5')
})

six.addEventListener("click",function () {
    appendToDisplay('6')
})

seven.addEventListener("click",function () {
    appendToDisplay('7')
})

eight.addEventListener("click",function () {
    appendToDisplay('8')
})

nine.addEventListener("click",function () {
    appendToDisplay('9')
})

zero.addEventListener("click",function () {
    appendToDisplay('0')
})

dot.addEventListener("click",function () {
    appendToDisplay('.')
})



clearDisplay.addEventListener("click",function() {
    document.getElementById("display").value = '';
})

deleteLast.addEventListener("click",function() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
})



calculateResult.addEventListener("click",function () {
    const display = document.getElementById("display");
    display.value = eval(display.value);
})