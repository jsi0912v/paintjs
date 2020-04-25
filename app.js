const canvas = document.getElementById("jsCanvas");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

const ctx = canvas.getContext("2d");
const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 500;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;


let painting = false;
let filling = false;

function stopPainting(){
    painting = false;
}

function startPainting(){

    if (filling){
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    } else {
        painting = true;
    }
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;

    if (!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
        //ctx.closePath();
    }

    //console.log(X, Y);
}

function handleColorCilck(event){
    
    const color = event.target.style.backgroundColor;
    console.log(color);

    ctx.strokeStyle = color;
    ctx.fillStyle = color;

}

function handleChangeRange(event){
    console.log(event.target.value);
    const range = event.target.value;
    ctx.lineWidth = range;

}

function handleChageMode(){

    if(filling === true){
        mode.innerText = "FILL";
        filling = false;
    } else {
        mode.innerText = "PAINT";
        filling = true;
    }

}

function handleCanvasClick(){

}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    //canvas.addEventListener("click", handleCanvasClick);
}

Array.from(colors).forEach( color => color.addEventListener("click", handleColorCilck));

if ( range){
    range.addEventListener("input", handleChangeRange);
}

if(mode){
    mode.addEventListener("click", handleChageMode);
}