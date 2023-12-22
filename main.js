
objects = [];
status = "";



function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
   
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detectinng Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
 
}

function draw(){
    image(canvas,0,0,480,380);
}