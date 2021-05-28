canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_image="rover.png";

rover_x=10;
rover_y=10;

var nasa_array=["nasa_img_1.jpg", "nasa_img_2.jpg", "nasa_img_3.jpg", "nasa_img_4.jpg"];
var random_numbers=Math.floor(Math.random()*4);
console.log(random_numbers);
background_image=nasa_array[random_numbers];

function add(){
    background_imagee=new Image();
    background_imagee.onload=uploadbackground;
    background_imagee.src=background_image;

    rover_imagee=new Image();
    rover_imagee.onload=uploadrover;
    rover_imagee.src=rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_imagee, 0, 0, canvas.width, canvas.height);

}

function uploadrover(){
    ctx.drawImage(rover_imagee, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);

if(keypressed=="38"){
    up();
    console.log("up");
}

if(keypressed=="40"){
    down();
    console.log("down");
}

if(keypressed=="37"){
    left();
    console.log("left");
}

if(keypressed=="39"){
    right();
    console.log("right");
}
}

function up(){

    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("up arrow"+rover_x+" "+rover_y);
        uploadbackground();
        uploadrover();
    }
}

function down(){
    
    if(rover_y<=510){
        rover_y=rover_y+10;
        console.log("down arrow"+rover_x+" "+rover_y);
        uploadbackground();
        uploadrover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("left arrow"+rover_x+" "+rover_y);
        uploadbackground()
        uploadrover()
    }
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("right arrow"+rover_x+" "+rover_y);
        uploadbackground();
        uploadrover();
    }
}