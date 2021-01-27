const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drops=[];
var maxDrops=100;
var Thunder;
var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(500, 600);

    engine = Engine.create();
   world = engine.world;

   umbrella=new Umbrella(240,420)
  

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400), random(0,400)));
    }


  
}

function draw(){
    Engine.update(engine);
    background("black")

    rand = Math.round(random(1,4));
    if(frameCount % 80 === 0){
        ThunderCreatedFrame=frameCount;
        Thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: Thunder.addImage(thunder1);
            break;
            case 2: Thunder.addImage(thunder2);
            break; 
            case 3: Thunder.addImage(thunder3);
            break;
            case 4: Thunder.addImage(thunder4);
            break;
            default: break;

        }
        Thunder.scale=random(0.3,0.6);
    }
    if(thunderCreatedFrame + 10 ===frameCount && Thunder){ 
        Thunder.destroy();
     }

     for(var i=0; i<maxDrops; i++){
        
        drops[i].display();
        drops[i].update();
    }

    umbrella.display();

drawSprites();

}   