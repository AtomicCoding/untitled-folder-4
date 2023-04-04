//document.getElementById("id").innerHTML = "new text";
//window.prompt("message")
//switch("value"){ case "A":do something, break; case "B":do something, break;
// condition ? exprIfTrue : exprIfFalse
//x > 1 ? console.log('true') : console.log('false');
const context = document.querySelector("canvas").getContext("2d");
context.canvas.height = 450;
context.canvas.width = 450;
let score = 0;
let colliding = false;
const controller = {
    left: false,
    right: false,
    up: false,
    down: false,
    keyListener: function (event){
        var key_state = (event.type == "keydown") ? true : false;
        switch(event.keyCode){
            case 37:// left key
                controller.left = key_state;
                console.log('left')
                break;
            case 38:// up key
                controller.up = key_state;
                console.log('up')
                break;
            case 39:// right key
                controller.right = key_state;
                console.log('right')
                break;
            case 40:// down key
                controller.down = key_state;
                console.log('down')
                break;
        }
        move();
    }
};
const square = {
    height: 20,
    width: 20,
    x: 0,
    xVel: 0,
    y: 0,
    yVel: 0,
    speed: 10
}
const enemySquare = {
    height:30,
    width:30,
    x:Math.random()*450,
    y:Math.random()*225 +100
}
function move(){
    if(controller.left && square.x > 0){
        square.x -= square.speed;
    }
    if(controller.right && square.x + square.width < 450){
        square.x += square.speed;
    }
    if(controller.up && square.y > 0){
        square.y -= square.speed;
    }
    if(controller.down && square.y + square.height <= 450){ // modified condition
        square.y += square.speed;
    }
}
function draw(){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillRect(square.x, square.y, square.width, square.height);
    context.fillRect(enemySquare.x,enemySquare.y,enemySquare.width,enemySquare.height);
    if(square.x + square.width >= enemySquare.x
        && square.x <= enemySquare.x + enemySquare.width 
        && square.y + square.height >= enemySquare.y
        && square.y <= enemySquare.y + enemySquare.height ){
            if (!colliding) {
                score++;
                console.log(score);
                document.getElementById('score').innerHTML = "Score = " + score;
                colliding = true;
                // Change the position of the enemy square
                enemySquare.x = Math.random()*255 +100;
                enemySquare.y = Math.random()*225 +100;
            }
        } else {
            colliding = false;
        }
}
setInterval(draw, 5);
window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);