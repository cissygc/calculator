const oneBtn = document.getElementById("one-btn")
const twoBtn = document.getElementById("two-btn")
const threeBtn = document.getElementById("three-btn")
const fourBtn = document.getElementById("four-btn")
const fiveBtn = document.getElementById("five-btn")
const sixBtn = document.getElementById("six-btn")
const sevenBtn = document.getElementById("seven-btn")
const eightBtn = document.getElementById("eight-btn")
const nineBtn = document.getElementById("nine-btn")
const zeroBtn = document.getElementById("zero-btn")

const clearBtn = document.getElementById("clear-btn")
const mulBtn = document.getElementById("mul-btn")
const subBtn = document.getElementById("sub-btn")
const addBtn = document.getElementById("add-btn")
const divBtn = document.getElementById("div-btn")

const calculateBtn = document.getElementById("calculate-btn")
const screen = document.getElementById("screen")

let dizi = []
let currentNumber = ""

oneBtn.addEventListener("click", function(){
    currentNumber +="1"
    screen.textContent+=1
})
twoBtn.addEventListener("click", function(){
    currentNumber +="2"
    screen.textContent+=2
})
threeBtn.addEventListener("click", function(){
    currentNumber +="3"
    screen.textContent+=3
})
fourBtn.addEventListener("click", function(){
    currentNumber +="4"
    screen.textContent+=4
})
fiveBtn.addEventListener("click", function(){
    currentNumber +="5"
    screen.textContent+=5
})
sixBtn.addEventListener("click", function(){
    currentNumber +="6"
    screen.textContent+=6
})
sevenBtn.addEventListener("click", function(){
    currentNumber +="7"
    screen.textContent+=7
})
eightBtn.addEventListener("click", function(){
    currentNumber +="8"
    screen.textContent+=8
})
nineBtn.addEventListener("click", function(){
    currentNumber +="9"
    screen.textContent+=9
})
zeroBtn.addEventListener("click", function(){
    currentNumber +="0"
    screen.textContent+=0
})

addBtn.addEventListener("click", function(){
    dizi.push(screen.textContent)
    dizi.push("+")
    screen.textContent=""
    
})
subBtn.addEventListener("click", function(){
    dizi.push(screen.textContent)
    dizi.push("-")
    screen.textContent=""
})
divBtn.addEventListener("click", function(){
    dizi.push(screen.textContent)
    dizi.push("/")
    screen.textContent=""
})
mulBtn.addEventListener("click", function(){
    dizi.push(screen.textContent)
    dizi.push("*")
    screen.textContent=""
})
clearBtn.addEventListener("click", function(){
    dizi.length=0
    screen.textContent=""
})

calculateBtn.addEventListener("click", function(){
    dizi.push(screen.textContent)
    screen.textContent=""

    let operator = dizi[1]


    switch(operator){
        case "+":
        screen.textContent = parseInt(dizi[0]) + parseInt(dizi[2])
        break;
        case "*":
        screen.textContent = parseInt(dizi[0]) * parseInt(dizi[2])
        break;
        case "/":
        screen.textContent = parseInt(dizi[0]) / parseInt(dizi[2])
        break;
        case "-":
        screen.textContent = parseInt(dizi[0]) - parseInt(dizi[2])
        break;
        
    }

})
