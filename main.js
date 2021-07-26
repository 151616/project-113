function setup(){
    canvas = createCanvas(750, 600);
    canvas.position(300, 30);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 250,150,250, 250);
    fill(255,0,0);
    stroke(255,0,0);
    circle(130, 50, 40);
    circle(130,480,  40);
    circle(640,50 , 40);
    circle(640, 480, 40);
    fill(0,255,0);
    stroke(0,255,0);
translate(130, 50);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(20, 30, 15, 10);
    rotate(PI/5);
  }
  translate(0, 430);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(20, 30, 15, 10);
    rotate(PI/5);
  }
  translate(510, 0);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(20, 30, 15, 10);
    rotate(PI/5);
  }
  translate(0,-430);
  noStroke()
  for (let i = 0; i < 10; i ++) {
    ellipse(20, 30, 15, 10);
    rotate(PI/5);
  }
  fill(255,0,0);
    stroke(255,0,);
  rect(-10, 10, 20, 430);
  rect(-520, 10, 20, 430);
  rect(-510, -10, 500, 20);
  rect(-510, 420, 500, 20);
}