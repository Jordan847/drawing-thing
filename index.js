const canvas = document.getElementById("gamearea")
const ctx = canvas.getContext("2d")
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
x = 400
y = 300
radius = 5
usersetradius = 5
uppressed = false
downpressed = false
leftpressed = false
rightpressed = false
speed = 2
circle_color = "green"
usersetcolor = "green"
alternatecolor = "yellow"

function size(){
  usersetradius = prompt("enter a number can have a decimal")
  if (usersetradius == ""){
    usersetradius = 5
  }
}

function color(){
  usersetcolor = prompt("type name of color")
  if (usersetcolor == "yellow"){
    alternatecolor = "red"
  }
}

// game loop
function drawgame(){
  
  requestAnimationFrame(drawgame)
  drawgreencirlce()
  inputs()
  boundrycheck()
  
  document.getElementById("x").innerHTML = `x= ${x}`
  document.getElementById("y").innerHTML = `y= ${y}`
    
}

function boundrycheck(){
    if (y < radius) {
        y = radius;
      }
      //down
      if (y > canvas.height - radius) {
        y = canvas.height - radius;
      }
      //left
      if (x < radius) {
        x = radius;
      }
      //right
      if (x > canvas.width - radius) {
        x = canvas.width - radius;}
}

function inputs(){
    if(downpressed){
        y += speed
    }
    if(uppressed){
        y -= speed
    }
    if(leftpressed){
        x -= speed
    }
    if(rightpressed){
        x += speed
    }
}




function drawgreencirlce(){
  if (downpressed || uppressed || leftpressed || rightpressed){
    circle_color = usersetcolor
    
  }
  else{
    circle_color = alternatecolor
    radius -= 0.8
  } 
  ctx.fillStyle = circle_color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    radius = usersetradius
}

function clearscreen(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
}


document.body.addEventListener("keydown", keyDown)
document.body.addEventListener("keyup", keyup)
function keyDown(event) {
    //up
    if (event.keyCode == 38 || event.keyCode == 87) {
      uppressed = true;
    }
  
    //down
    if (event.keyCode == 40 || event.keyCode == 83) {
      downpressed = true;
    }
    //left
    if (event.keyCode == 37 || event.keyCode == 65) {
      leftpressed = true;
    }
  
    //right
    if (event.keyCode == 39 || event.keyCode == 68) {
      rightpressed = true;
    }
  }
  
  function keyup(event) {
    //up
    if (event.keyCode == 38 || event.keyCode == 87) {
      uppressed = false;
    }
  
    //down
    if (event.keyCode == 40 || event.keyCode == 83) {
      downpressed = false;
    }
    //left
    if (event.keyCode == 37 || event.keyCode == 65) {
      leftpressed = false;
    }
  
    //right
    if (event.keyCode == 39 || event.keyCode == 68) {
      rightpressed = false;
    }
    if (event.keyCode == 67){
        clearscreen()
    }  
   
}

drawgame()
