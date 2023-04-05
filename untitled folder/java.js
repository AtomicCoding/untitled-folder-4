//document.getElementById("id").innerHTML = "new text";
//window.prompt("message")
//switch("value"){ case "A":do something, break; case "B":do something, break;
// condition ? exprIfTrue : exprIfFalse
//x > 1 ? console.log('true') : console.log('false');
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.height = 450;
canvas.width = 450;
window.addEventListener('load', () => {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');
  canvas.height = 450;
  canvas.width = 450;
  let score = 0;
  let colliding = false;
  let mouseX;
  let mouseY;
  function showCoords(event){
    const canvasRect = canvas.getBoundingClientRect();
    mouseX = event.clientX - canvasRect.left;
    mouseY = event.clientY - canvasRect.top;
  }
  const square = {
    height: 20,
    width: 20,
    x: 0,
    y: 0,
    speed: 10
  };
  const enemySquare = {
    height: 30,
    width: 30,
    x: Math.random() * 255 + 100,
    y: Math.random() * 225 + 100
  };
  function move() {
    square.x = mouseX - square.width / 2;
    square.y = mouseY - square.height / 2;
  }
  function draw() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    if(square.x + square.width >= enemySquare.x &&
       square.x <= enemySquare.x + enemySquare.width && 
       square.y + square.height >= enemySquare.y && 
       square.y <= enemySquare.y + enemySquare.height ) {
      const randX = Math.random() * (context.canvas.width - enemySquare.width);
      const randY = Math.random() * (context.canvas.height - enemySquare.height);
      enemySquare.x = randX;
      enemySquare.y = randY;
      score++;
      document.getElementById('score').innerHTML = 'Score = ' + score;
    }
    context.fillRect(square.x, square.y, square.width, square.height);
    context.fillRect(enemySquare.x, enemySquare.y, enemySquare.width, enemySquare.height);
  }
  function startGame() {
    setInterval(() => {
      move();
      draw();
    }, 5);
  }
  canvas.addEventListener('mousemove', showCoords);
  canvas.addEventListener('mouseenter', startGame);
});