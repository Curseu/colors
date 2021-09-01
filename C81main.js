canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red"; 

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(200,200,70,0,2*Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown",mouseismean);
function mouseismean(e){
    color=document.getElementById("color").value;
    console.log(color);
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetop;

    console.log("x="+mousex+"y="+mousey);
    circle(mousex,mousey);
}
function circle(mousex,mousey){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(mousex,mousey,70,0,2*Math.PI);
ctx.stroke();


}
function obiltoration(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
}