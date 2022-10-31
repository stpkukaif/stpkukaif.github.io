const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var gradient = ctx.createLinearGradient(0,0, 280, 400);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "white");
var song = new Audio();
    song.src = "aud/song.mp3";
    song.play();
var tile1 = new Image();
    tile1.src = "img/tile.png";
var tile2 = new Image();
    tile2.src = "img/tile.png";
var tile3 = new Image();
    tile3.src = "img/tile.png";
var tile4 = new Image();
    tile4.src = "img/tile.png";

var tileW = 70;
var tileH = 100;
var speed = 0.5;
var score = 0;
    var posx1 = 0; 
    var posx2 = 70; 
    var posx3 = 140; 
    var posx4 = 210; 

    var posy1 = Math.floor(Math.random()*400)-500; 
    var posy2 = Math.floor(Math.random()*400)-500; 
    var posy3 = Math.floor(Math.random()*400)-500; 
    var posy4 = Math.floor(Math.random()*400)-500; 
    requestAnimationFrame(draw);
    setInterval(()=>{
        if(posy1 < 305){
            posy1+=3;
        }else if(posy1>=305 && posy1<400){
            tile1.src = "img/tileloose.png"
            stopgame();
            
        };
        if(posy2 < 305){
            posy2+=3;
        }else if(posy2>=305 && posy2<400){
            
            tile2.src = "img/tileloose.png";
            stopgame();
        };
        if(posy3 < 305){
            posy3+=3;
        }else if(posy3>=305 && posy3<400){
            
            tile3.src = "img/tileloose.png";
            stopgame();
            
        };
    
        if(posy4 < 305){
            posy4+=3;
        }else if(posy4>=305 && posy4<400){
            
            tile4.src = "img/tileloose.png"
            stopgame();
    
        };
    },speed);



function draw() {
    //рисование линий разделения
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0, 280, 400);
    ctx.strokeRect(0,0,280,400);

    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(70,0);
    ctx.lineTo(70,400);
    ctx.closePath();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(140,0);
    ctx.lineTo(140,400);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(210,0);
    ctx.lineTo(210,400);
    ctx.closePath();
    ctx.stroke();

    ctx.drawImage(tile1, posx1,posy1,tileW,tileH);
    ctx.drawImage(tile2, posx2,posy2,tileW,tileH);
    ctx.drawImage(tile3, posx3,posy3,tileW,tileH);
    ctx.drawImage(tile4, posx4,posy4,tileW,tileH);

    ctx.font = "32px Impact";
    ctx.fillStyle = "#fff";
    ctx.fillText(score, 130,40);
    ctx.strokeText(score, 130,40);

    requestAnimationFrame(draw);
}

document.addEventListener("click", click);
function click(e){
    var clickX = (e.layerX == undefined ? e.offsetX : e.layerX) + 1;
    var clickY = (e.layerY == undefined ? e.offsetY : e.layerY) + 1;
    // физика 1 плитки
    if(clickX < (posx1 + tileW) && clickY < (posy1 + tileH) && clickX > posx1 && clickY > posy1){
        posy1 = Math.floor(Math.random()*400)-500;
        score++;
    }else 
    if(clickY > (posy1 + tileH)&& clickX < (posx1 + tileW) && clickX >= posx1){
        tile1.src = "img/tileloose.png";
        stopgame();
    } else
    if(clickY < posy1 && clickX < (posx1 + tileW) && clickX >= posx1){
        tile1.src = "img/tileloose.png";
        stopgame();} else
        
 // физика 2 плитки
        if(clickX < (posx2 + tileW) && clickY < (posy2 + tileH) && clickX > posx2 && clickY > posy2){
            posy2 = Math.floor(Math.random()*400)-500;
            score++;
        }else 
        if(clickY > (posy2 + tileH)&& clickX < (posx2 + tileW) && clickX >= posx2){
            tile2.src = "img/tileloose.png";
            stopgame();
        } else
        if(clickY < posy2 && clickX < (posx2 + tileW) && clickX >= posx2){
            tile2.src = "img/tileloose.png";
            stopgame();}else
            
 // физика 3 плитки
            if(clickX < (posx3 + tileW) && clickY < (posy3 + tileH) && clickX > posx3 && clickY > posy3){
                posy3 = Math.floor(Math.random()*400)-500;
                score++;
            }else 
            if(clickY > (posy3 + tileH)&& clickX < (posx3 + tileW) && clickX >= posx3){
                tile3.src = "img/tileloose.png";
                stopgame(); 
            } else
            if(clickY < posy3 && clickX < (posx3 + tileW) && clickX >= posx3){
                tile3.src = "img/tileloose.png";
                stopgame();
            }else
                
 // физика 4 плитки
                if(clickX < (posx4 + tileW) && clickY < (posy4 + tileH) && clickX > posx4 && clickY > posy4){
                    posy4 = Math.floor(Math.random()*400)-500;
                    score++;
                }else 
                if(clickY > (posy4 + tileH)&& clickX < (posx4 + tileW) && clickX >= posx4){
                    tile4.src = "img/tileloose.png";
                    stopgame(); 
                } else
                if(clickY < posy4 && clickX < (posx4 + tileW) && clickX >= posx4){
                    tile4.src = "img/tileloose.png";
                    stopgame();};}
                    

 function reset() {
    window.location.reload();
}
function stopgame(){
    posy1 = 400;
    posy2 = 400;
    posy3 = 400;
    posy4 = 400;

    Swal.fire({

        title: 'Вы проиграли!',
        icon: 'error',

        showConfirmButton: false,


      })
}
