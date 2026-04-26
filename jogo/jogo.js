const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

//ctx.fillStyle = "red"
//ctx.fillRect(100, 100, 50, 100);

const h1  = document.querySelector("h1");
const size = 27;

const snake = [
    {x:270, y:240}];


const randonNumber = (max, min) => {
    return Math.round(Math.random() * (max - min) + min)
}

const randonPosition = () => {
    const number = randonNumber(0, canvas.width - size);
    return Math.round(number / 27) * 27;
}



  //para gerar colres aleatorias
const rondomColor = () => {
    const red = randonNumber(0, 255);
    const green = randonNumber(0, 255);
    const blue = randonNumber(0, 255);
    return `rgb(${red}, ${green}, ${blue})`;

}


const food = {
    x:randonPosition(),
    y:randonPosition(),
    color: rondomColor()
}
//Variaveis para o loop do jogo e direção da cobra
let  loopId = "";
let direction = "right";
const drawSnake = () => {
    ctx.fillStyle = "#ffffff"
   // ctx.fillRect(snake[0].x, snake[0].y, size, size);

   snake.forEach((position, index) => {

    if(index == snake.length -1){
        ctx.fillStyle = "#fff"
    }

    ctx.fillRect(position.x, position.y, size, size)
   })
}
//Para mover a cobra
const moveSnake = () =>{
    if(!direction) return;


    const head =snake[snake.length -1];
    snake.shift();


    if(direction == "right"){

        snake.push({x: head.x + size, y: head.y})
    }
    if(direction == "left"){

        snake.push({x: head.x - size, y: head.y})
    }
     if(direction == "down"){

        snake.push({x: head.x, y: head.y + size})
    }
        if(direction == "up"){      
        snake.push({x: head.x, y: head.y - size})
    }



}

const drawFood = () => {

   const{x, y, color} =  food;

    ctx.shadowColor = color;
    ctx.shadowBlur = 99;
    ctx.fillStyle = food.color;
    ctx.fillRect(x, y, size, size );
    ctx.shadowBlur = 0;
}
const drawwnGrid= () => {
    ctx.lineWidth = 1
    ctx.strokeStyle = "#19191c"
    for(let i= 30; i < canvas.width; i+=30){
        ctx.beginPath();
        ctx.lineTo(i, 0);
        ctx.lineTo(i, 600);
        ctx.stroke();

         ctx.beginPath();
        ctx.lineTo(0, i);
        ctx.lineTo(600, i);
        ctx.stroke();
    }

   

    ctx.stroke();
}
drawwnGrid();

const checkEat = () => {
    const head = snake[snake.length -1];

    if(head.x == food.x && head.y == food.y){
        snake.push(head)
    }
}




const gamellop = () =>{
    clearInterval(loopId);

 ctx.clearRect(0,0, 600, 600);
    drawFood();
    drawwnGrid();
    moveSnake();
    drawSnake();   
    checkEat();


 loopId = setTimeout(() => {
    gamellop()


},300)

}


gamellop();


document.addEventListener("keydown", ({key}) => {
    if(key == "ArrowRight" && direction != "left"){
        direction = "right"
    }
    if(key == "ArrowLeft" && direction != "right"){
        direction = "left"
    }
    if(key == "ArrowDown" && direction != "up"){
        direction = "down"
    }
    if(key == "ArrowUp" && direction != "down"){
        direction = "up"
    }

   // console.log(event.key)
    })




