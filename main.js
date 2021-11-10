var canvas = new fabric.Canvas("myCanvas");
var playerX = 10;
var playerY = 10;
var blockImageWidth = 40;
var blockImageHeight = 40;
var playerImg = null;
var newImg = null;
var playerObject=null;

player_update()

function player_update() {
    fabric.Image.fromURL("player.png", function initPlayer(img) {
        playerObject = img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(150);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    });

}

function uploadImage(newImg) {
    fabric.Image.fromURL(newImg, function initBlock(img) {
        var newObject = img;
        newObject.scaleToWidth(blockImageWidth);
        newObject.scaleToHeight(blockImageHeight);
        newObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(newObject);
    });
}

window.addEventListener("keydown", onKeydown);

function onKeydown(e) {

    var keyPressed = e.keyCode;

    if (e.shiftKey = true && keyPressed == 80) {

        blockImageHeight = blockImageHeight + 10;
        blockImageWidth = blockImageWidth + 10;
        refreshBlockSize();
        console.log("Shift+p detected")
    }

    if (e.shiftKey == true && keyPressed == 77) {
        blockImageWidth = blockImageWidth - 10;
        blockImageHeight = blockImageHeight - 10;
        refreshBlockSize();
    }

    if (keyPressed == 38) {
        up();
        console.log("up");
    }

    if (keyPressed == 40) {
        down()
        console.log("down");
    }

    if (keyPressed == 37) {
        left();
        console.log("left");
    }

    if (keyPressed == 39) {
        right();
        console.log("right");
    }




    if (keyPressed == 81) {
        uploadImage('ironman_left_hand.png')
        console.log("q");
    }

    if (keyPressed == 87) {
        uploadImage('ironman_right_hand.png');
        console.log("w");
    }

    if (keyPressed == 69) {
        uploadImage('ironman_face.png');
        console.log("e");
    }
    if (keyPressed == 82) {
        uploadImage('ironman_body.png');
        console.log("r");
    }

    if (keyPressed == 84) {
        uploadImage('ironman_legs.png');
        console.log("t");
    }




    if(keyPressed == 89){
        uploadImage('spiderman_left_hand.png')
        console.log("y")
    }
    if(keyPressed == 85){
        uploadImage('spiderman_right_hand.png')
        console.log("u")
    }
    if(keyPressed == 73){
        uploadImage('spiderman_face.png')
        console.log("i")
    }
    if(keyPressed == 79){
        uploadImage('spiderman_body.png')
        console.log("o")
    }
    if(keyPressed == 65){
        uploadImage('spiderman_legs.png')
        console.log("a")
    }



    if(keyPressed == 83){
        uploadImage('hulk_left_hand.png')
        console.log("s")
    }
    if(keyPressed == 68){
        uploadImage('hulk_right_hand.png')
        console.log("d")
    }
    if(keyPressed == 70){
        uploadImage('hulk_face.png')
        console.log("f")
    }
    if(keyPressed == 71){
        uploadImage('hulkd_body.png')
        console.log("g")
    }
    if(keyPressed == 72){
        uploadImage('hulk_legs.png')
        console.log("h")
    }



    if(keyPressed == 74){
        uploadImage('thor_left_hand.png')
        console.log("j")
    }
    if(keyPressed == 75){
        uploadImage('thor_right_hand.png')
        console.log("k")
    }
    if(keyPressed == 76){
        uploadImage('thor_face.png')
        console.log("l")
    }



    if(keyPressed == 90){
        uploadImage('captain_america_left_hand.png')
        console.log("z")
    }
}

function up() {
    if (playerY > 0) {
        playerY = playerY - blockImageHeight;
        console.log("block image height = " + blockImageHeight);
        console.log("when up arrow key is pressed ,X = " + playerX + " , Y =" + playerY);
        canvas.remove(playerObject);
        player_update();
    }
}

function down() {
    if (playerY < canvas.height-150) {
        playerY = playerY + blockImageHeight;
        console.log("block image height = " + blockImageHeight);
        console.log("when down arrow key is pressed ,X = " + playerX + " , Y =" + playerY);
        canvas.remove(playerObject);
        player_update();

    }
}

function right() {
    if (playerX < canvas.width-150){
        playerX = playerX + blockImageWidth;
        console.log("block image width = " + blockImageWidth);
        console.log("when right arrow key is pressed ,X = " + playerX + " , Y =" + playerY);
        canvas.remove(playerObject);
        player_update();
    }
}

function left() {
    if (playerX > 0){
        playerX = playerX -blockImageWidth;
        console.log("block image width = " + blockImageWidth);
        console.log("when left arrow key is pressed ,X = " + playerX + " , Y =" + playerY);
        canvas.remove(playerObject);
        player_update();
    }
}

function refreshBlockSize() {
    document.getElementById("current_height").innerHTML = blockImageHeight;
    document.getElementById("current_width").innerHTML = blockImageWidth;
}
