
nose_x= 0
nose_y=0
function preload(){
mustacheimage = loadImage("mustache.png")
}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300) 
   video.hide()

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Intialized')
}
function draw() {
 image(video, 0, 0, 300, 300)
 image(mustacheimage, nose_x - 30, nose_y - 5, 65, 65)
 //circle(x,y,radius)
//  fill("red")
//  stroke("white")
//  circle(nose_x, nose_y, 30)
}
function take_snapshot(){
    save('myFilterImage.png')
}
function gotPoses(results)
{
    if(results.length > 0){
     console.log(results)
       nose_x = results[0].pose.nose.x
        nose_y = results[0].pose.nose.y
    }
}
