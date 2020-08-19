
var circles = []

function setup(){
    createCanvas(800,600);
    background(245);
    makeCircle();
}
var closestCircle;
function draw(){
    closestCircle = getClosestCircle()
    background(245);
    
    for(i=0;i<circles.length;i++){
        fill(0);
        stroke(0);
        if (circle[i] != closestCircle){
            line(circles[i].x, circles[i].y, mouseX, mouseY);
            ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
        }
    }
    fill(0, 255, 0);
    stroke(0, 255, 0);
    line(closestCircle.x, closestCircle.y, mouseX, mouseY);
    ellipse(closestCircle.x, closestCircle.y, closestCircle.r * 2, closestCircle.r * 2);



}

function getClosestCircle(){
    let smallest = 10000;
    c = {};
    for (i = 0; i < circles.length; i++) {
        dit = dist(mouseX, mouseY,circles[i].x, circles[i].y)
        if (dit < smallest){
            smallest = dit
            c = circles[i];
        }
    }
    return c;
}


function makeCircle(){
    let prot = 0;
    while(circles.length < 10){
        prot++;
        c = {
            x:int(random(0,width)),
            y:int(random(0,height)),
            r:20
        }

        if(circles.length == 0){
            circles.push(c)
        }else{
            let overlap = false;
            for (i = 0; i < circles.length; i++) {
                if (dist(circles[i].x, circles[i].y, c.x, c.y) < c.r + circles[i].r) {
                    overlap = true
                }
            }
            if(!overlap){
                circles.push(c);
            }

        }

        
        if(prot > 10000){
            console.log("break");
            break;
        }
    }
}