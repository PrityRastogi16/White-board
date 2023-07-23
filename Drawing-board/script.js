const canvas = document.querySelector("#canvas");
const incBtn = document.querySelector(".inc")
const decBtn = document.querySelector(".dec");
const sizeBox = document.querySelector(".size");
const colors = document.getElementById("color");
const clearBtn = document.querySelector("#clear");

const ctx = canvas.getContext("2d");

let size = 5;
let isPress = false;
colors.value = "black";
let color = colors.value;
let x;
let y;

canvas.addEventListener("mousedown" , (e) => {
    isPress = true;
    x = e.offsetX;
    y = e.offsetY;
})

document.addEventListener("mouseup" , (e) => {
    isPress = false;
    x = undefined;
    y = undefined;
})

function drawLine(x1,y1,x2,y2){
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size*2;
    ctx.stroke();
}

canvas.addEventListener("mousemove" , (e) => {
    if(isPress){
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2,y2);
        drawLine(x,y,x2,y2);
        x=x2 
        y=y2
    }
})

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI*2)
    ctx.fillStyle = color
    ctx.fill()
}

function updateSize(){
    sizeBox.innerText = size;
}
incBtn.addEventListener("click", () =>{
    size +=2
    if(size > 50){
        size = 50
    }
    updateSize()
})
decBtn.addEventListener("click", () =>{
    size -=2
    if(size < 2){
        size = 4
    }
    updateSize()
})
colors.addEventListener("change", (e)=>{
    color = e.target.value
})
clearBtn.addEventListener("click" , () =>{
    ctx.clearRect(0,0,canvas.width, canvas.height)
})
