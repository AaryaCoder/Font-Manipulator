function setup(){
    video.createCapture(VIDEO);
    video.size(550,500);
    video.position(400,150);

    canvas=createCanvas(550,500);
    canvas.position(1050,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#ff9387');
}
function modelLoaded(){
    console.log("PoseNet has been initialized!!");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}