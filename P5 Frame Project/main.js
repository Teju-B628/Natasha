function preload(){

}

function setup(){
    canvas = createCanvas(700,600);
    canvas.position(200,260);
    video = createCapture(VIDEO);
    video.hide();
    filter = "";
}

function draw(){
    image(video, 0,0,700,600);
    tint(filter);
}

function apply_filter(){
    filter = document.getElementById("tint").value;
}

function take_snapshot(){
    save('filter.png');
}