var Farm,FarmBackground,marketBackground,market
var dialogue1,dialogue2
var gameState
var pepperSeeds,flowerSeeds,pumpkinSeeds,tomatoSeeds
var pepperSeedsImage,flowerSeedsImage,pumpkinSeedsImage,tomatoSeedsImage,buyImage
gameState = 0

function preload(){
FarmBackground = loadImage("Bo!.jpg")
marketBackground = loadImage("Shop.png")
pepperSeedsImage = loadImage("pepper.png")
flowerSeedsImage = loadImage("flower.png")
pumpkinSeedsImage =loadImage("pumpkin.png")
tomatoSeedsImage = loadImage("tomato.png")
buyImage = loadImage("buy.png")
yesImage=loadImage("yes.png")
noImage=loadImage("no.png")
}
function setup(){
createCanvas(windowWidth, windowHeight);
Farm = createSprite(windowWidth/2,windowHeight/2,windowWidth, windowHeight)
Farm.addImage(FarmBackground)
Farm.scale = 0.4


market = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
market.addImage(marketBackground)
market.scale = 4.1
market.visible = false

dialogue1 = createSprite(windowWidth/2,100,600,150)
dialogue1.shapeColor = "black"
dialogue2 = createSprite(windowWidth/2,100,600,150)
dialogue2.shapeColor = "black"
dialogue2.visible = false
console.log(windowWidth);
}
function draw(){
    drawSprites()
fill("yellow")
stroke("black")
strokeWeight(4)
if(gameState === 0){
    text("THE TEXT WOW",windowWidth/2-50,100)
}
if(mousePressedOver(Farm)&&gameState === 0){
    dialogue1.destroy()
    dialogue2.visible = true
    text("MORE TEXT WOW",windowWidth/2-50,100)
    gameState = 1
}
if(gameState===1){
       

    
}
if(gameState === 1&&mousePressedOver(Farm)){
    dialogue2.destroy()
    Farm.visible = false  
    market.visible = true
     seeds()
      if(mousePressedOver(pepperSeeds)||mousePressedOver(flowerSeeds)||mousePressedOver(pumpkinSeeds)||mousePressedOver(tomatoSeeds)){
       
        pepperSeeds.destroy();
        flowerSeeds.destroy();
        pumpkinSeeds.destroy();
        tomatoSeeds.destroy();
        buy.destroy();
        console.log("heya!")
    gameState=2;
           }}

if(gameState===2){
    market.visible=false;
    /*pepperSeeds.visible=false
    flowerSeeds.visible=false
    pumpkinSeeds.visible=false;
    tomatoSeeds.visible=false
    buy.visible=false*/
    
    Farm.visible=true;
dialogue3= createSprite(windowWidth/2,windowHeight/2,200,100);
text("Are you sure you want to buy this?",windowWidth/2-100, windowHeight/2+25);
yes = createSprite(windowWidth/2-50, windowHeight/2+50, 10,10);
yes.addImage(yesImage)
yes.scale=0.1
no = createSprite(windowWidth/2+50, windowHeight/2+50, 10,10);  
no.addImage(noImage)
no.scale=0.1
if(mousePressedOver(yes)){
    dialogue3.destroy();
    yes.destroy();
    no.destroy();
}  
else if(mousePressedOver(no)){
    dialogue3.destroy();
    yes.destroy();
    no.destroy();
    gameState=1;
}
}}       
function seeds(){
    pepperSeeds = createSprite(windowWidth*0.2,100,10,10)
    pepperSeeds.addImage(pepperSeedsImage)
    pepperSeeds.scale=0.7
    flowerSeeds = createSprite(windowWidth*0.4 ,100,10,10)
    flowerSeeds.addImage(flowerSeedsImage)
    flowerSeeds.scale=0.7
    pumpkinSeeds = createSprite(windowWidth*0.6 ,100,10,10)
    pumpkinSeeds.addImage(pumpkinSeedsImage)
    pumpkinSeeds.scale=0.7
    tomatoSeeds = createSprite(windowWidth*0.8,100,10,10)
    tomatoSeeds.addImage(tomatoSeedsImage)
    tomatoSeeds.scale=0.7
    buy = createSprite(windowWidth/2, windowHeight/1.25,50,50)
    buy.addImage(buyImage)

}