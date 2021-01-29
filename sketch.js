
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand;
var slingShot;
var block1, block2, block3, block4, block5, block6, block7;
var polygon;

function setup(){

    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(0,370,1200,30);
    stand = new Ground(370,190,200,10);

    //level two
    block1 = new Box(330, 165, 30, 40);
    block2 = new Box(360, 165, 30, 40);
    block3 = new Box(390, 165, 30, 40);
    block4 = new Box(420, 165, 30, 40);
    block5 = new Box(390, 125, 30, 40);
    block6 = new Box(360, 125, 30, 40);
    block7 = new Box(375, 85, 30, 40);

    // //level three
    // block7 = new Block(390, 195, 30, 40);
    // block8 = new Block(420, 195, 30, 40);

    // ground = new Ground(600,height,1200,20);
    // stand = new Ground(150, 305, 300, 170);

    // //top
    // block9 = new Block(390, 155, 30, 40);
    // bird = new Bird(200,50);
    polygon = Bodies.circle(50, 200, 20);
    polygon_image = loadImage("polygon.png");
    
    World.add(world, polygon);
    
    slingShot = new SlingShot(this.polygon,{x: 100, y: 200});


}

function draw(){
 
    ground.display();
stand.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();

slingShot.display();
image(polygon_image, polygon.position.x, polygon.position.y,40,40);


// polygon.display();


}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}



