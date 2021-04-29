var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1,rect2,rect3,rect4,rect5,rect6,rect7;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

rect1 = createSprite(400,50,800,200);

//rect1 = createSprite(100,580,150,8);
rect1.shapeColor = color("purple");


rect2 = createSprite(400,150,800,140);
rect2.shapeColor = color("darkblue");

rect3 = createSprite(400,250,800,140);
rect3.shapeColor = color("#1877f2");

rect4 = createSprite(400,350,800,140);
rect4.shapeColor = color("#17e636");

rect5 = createSprite(400,450,800,140);
rect5.shapeColor = color("yellow");

rect6 = createSprite(400,550,800,140);
rect6.shapeColor = color("orange");

rect7 = createSprite(400,650,800,140);
rect7.shapeColor = color("red");

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color("#a82020");

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color("#a82020");

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color("#a82020");

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  //moving  the helicopter🚁🚁.
  if(keyCode === LEFT_ARROW){
helicopterSprite.x = helicopterSprite.x-10;
  }
  
  if(keyCode === RIGHT_ARROW){
	helicopterSprite.x = helicopterSprite.x+10;
	  }

	  //move the package with helicopter.
	  if(keyCode === LEFT_ARROW){
	  Matter.Body.translate(packageBody, {x: -10,y: 0});
	  }

	  if(keyCode === RIGHT_ARROW){
		Matter.Body.translate(packageBody, {x: +10,y: 0});
		  }
	
		  //Hi Vaibhavi, Set the x and y position of the sprite "package" same as the x and y position of the packageBody by writing the below code
        packageSprite.x = packageBody.position.x; 
	    packageSprite.y = packageBody.position.y;

		//Hi Vaibhavi, You don't need to change velocityY position of the packageSprite when the down arrow key is pressed.
		// That is bcoz packagesprite is already following the position of the package body.
		 if(keyCode === DOWN_ARROW){
          Matter.Body.setStatic(packageBody,false);
	  }

	  packageBody_options = {
		restitution: 1
		  }

  drawSprites();
  
  
 
}
