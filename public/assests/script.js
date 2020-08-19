
var circles = []

function setup(){
    createCanvas(800,600);
    background(245);
    makeCircle();
}

function draw(){
    background(245);
    for(i=0;i<circles.length;i++){
        noStroke();
        fill(0);  
        ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
    }
}

function makeCircle(){
    let prot = 0;
    while(circles.length < 6){
        prot++;
        console.log(circles)
        console.log("-----------------------------------")
        c = {
            x:random(0,width),
            y:random(0,height),
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