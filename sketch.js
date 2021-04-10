var PLAY = 1;
var END = 0;
var gameState = PLAY;
var sofia, ob1, ob2, ob3, ob4, ob5, ob6, ob7, ob8, ob9,ob10,ob11,ob12,ob13,ob14,ob15,ob16,ob17,ob18,ob19,ob20,ob21,ob22,ob23,ob24,ob25,ob26,ob27,ob28,ob29,ob30,ob31,ob32,ob33,ob34,ob35,ob36,ob37,ob38,ob39,ob40,ob41,ob42,ob43,ob44,ob45,ob46,ob47,ob48,ob49,ob50,ob51,ob52,ob53,ob54,ob55,ob56,ob57,ob58,ob59,ob60,ob61,ob62,ob63,ob64,ob65,ob66,ob67,ob68,ob69,ob70,topEdge,rightEdge,leftEdge,bottomEdge,target;

function setup() {
  createCanvas(800, 800);
  
  //SOFIA
  sofia = createSprite(20,20,10,10);
  sofia.shapeColor="yellow";
  
  //EDGES
  topEdge = createSprite(10,0,1600,15);
  topEdge.shapeColor="red";
  leftEdge = createSprite(0,10,15,1600);
  leftEdge.shapeColor="red";
  rightEdge = createSprite(800,10,15,1600);
  rightEdge.shapeColor="red";
  bottomEdge = createSprite(10,800,1600,15);
  bottomEdge.shapeColor="red";
  
  //BLOCKS
  ob1 = createSprite(40,60,80,10);
  ob1.shapeColor="brown";
  
  ob2  = createSprite(140,40,10,80);
  ob2.shapeColor="brown";
  
  ob3 = createSprite(80,100,80,10);
  ob3.shapeColor="brown";
  
  ob4 = createSprite(60,120,10,80);
  ob4.shapeColor="brown";
  
  ob5 = createSprite(155,80,40,10);
  ob5.shapeColor="brown";
  
  ob6 = createSprite(25,160,80,10);
  ob6.shapeColor="brown";
  
  ob7 = createSprite(175,115,10,80);
  ob7.shapeColor="brown";
  
  ob8 = createSprite(140,155,80,10);
  ob8.shapeColor="brown";
  
  ob9 = createSprite(35,195,10,80);
  ob9.shapeColor="brown";
  
  ob10 = createSprite(75,230,0,10);
  ob10.shapeColor="brown";
  
  ob11 = createSprite(140,190,10,60);
  ob11.shapeColor="brown";
  
  ob12 = createSprite(75,255,10,60);
  ob12.shapeColor="brown";
  
  ob13 = createSprite(75,280,550,10);
  ob13.shapeColor="brown";
 
  ob14 = createSprite(160,220,0,10);
  ob14.shapeColor="brown";
  
  ob15 = createSprite(220,220,10,80);
  ob15.shapeColor="brown";
  
  ob16 = createSprite(250,180,80,10);
  ob16.shapeColor="brown";
  
  ob17 = createSprite(285,180,10,80);
  ob17.shapeColor="brown";
  
  ob18 = createSprite(330,180,80,10);
  ob18.shapeColor="brown";
  
  ob19 = createSprite(375,205,10,180);
  ob19.shapeColor="brown";
  
  ob20 = createSprite(330,260,10,80);
  ob20.shapeColor="brown";
  
  ob21 = createSprite(345,315,10,80);
  ob21.shapeColor="brown";
  
  ob22 = createSprite(370,360,620,10);
  ob22.shapeColor="brown";
  
  ob23 = createSprite(265,385,10,60);
  ob23.shapeColor="brown";
  
  ob24 = createSprite(330,260,10,80);
  ob24.shapeColor="brown";
  
  ob25 = createSprite(210,145,10,80);
  ob25.shapeColor="brown";
  
  ob26 = createSprite(265,110,100,10);
  ob26.shapeColor="brown";
  
  ob27 = createSprite(280,80,270,10);
  ob27.shapeColor="brown";
  
  ob28 = createSprite(420,45,10,80);
  ob28.shapeColor="brown";
  
  ob29 = createSprite(555,110,370,10);
  ob29.shapeColor="brown";
  
  ob30 = createSprite(530,135,10,190);
  ob30.shapeColor="brown";
  
  ob31 = createSprite(390,290,80,10);
  ob31.shapeColor="brown";
  
  ob32 = createSprite(580,30,10,65);
  ob32.shapeColor="brown";
  
  ob33 = createSprite(630,83,10,65);
  ob33.shapeColor="brown";
  
  ob34 = createSprite(700,43,10,70);
  ob34.shapeColor="brown";
  
  ob35 = createSprite(735,140,10,70);
  ob35.shapeColor="brown";
  
  ob36 = createSprite(550,170,310,10);
  ob36.shapeColor="brown";
  
  ob37 = createSprite(550,260,360,10);
  ob37.shapeColor="brown";
  
  ob38 = createSprite(650,260,100,95);
  ob38.shapeColor="brown";
  
  ob39 = createSprite(735,495,10,538);
  ob39.shapeColor="brown";
  
  ob40 = createSprite(615,670,10,170);
  ob40.shapeColor="brown";
  
  ob41 = createSprite(535,590,150,10);
  ob41.shapeColor="brown";
  
  ob42 = createSprite(565,760,110,10);
  ob42.shapeColor="brown";
  
  ob43 = createSprite(720,760,85,10);
  ob43.shapeColor="brown";
  
  ob44 = createSprite(675,525,10,330);
  ob44.shapeColor="brown";
  
  ob45 = createSprite(465,575,10,43);
  ob45.shapeColor="brown";
  
  ob46 = createSprite(530,555,140,10);
  ob46.shapeColor="brown";
  
  ob47 = createSprite(595,470,10,230);
  ob47.shapeColor="brown";
  
  ob48 = createSprite(625,510,170,10);
  ob48.shapeColor="brown";
  
  ob49 = createSprite(515,680,10,150);
  ob49.shapeColor="brown";
  
  ob50 = createSprite(415,610,175,10);
  ob50.shapeColor="brown";
  
  ob51 = createSprite(425,690,120,120);
  ob51.shapeColor="brown";
  
  ob52 = createSprite(332,550,10,110);
  ob52.shapeColor="brown";
  
  ob53 = createSprite(452,490,250,10);
  ob53.shapeColor="brown";
  
  ob54 = createSprite(375,760,190,10);
  ob54.shapeColor="brown";
  
  ob55 = createSprite(275,620,10,290);
  ob55.shapeColor="brown";
  
  ob56 = createSprite(245,470,70,10);
  ob56.shapeColor="brown";
  
  ob57 = createSprite(100,520,10,110);
  ob57.shapeColor="brown";
  
  ob58 = createSprite(75,580,60,10);
  ob58.shapeColor="brown";
  
  ob59 = createSprite(135,470,80,10);
  ob59.shapeColor="brown";
  
  ob60 = createSprite(175,610,10,290);
  ob60.shapeColor="brown";
  
  ob61 = createSprite(205,610,10,290);
  ob61.shapeColor="brown";
  
  ob62 = createSprite(93,750,175,10);
  ob62.shapeColor="brown";
  
  ob63 = createSprite(254,760,110,10);
  ob63.shapeColor="brown";
  
  ob64 = createSprite(310,420,540,10);
  ob64.shapeColor="brown";

  ob65 = createSprite(470,775,10,40);
  ob65.shapeColor="brown";
  
  ob66 = createSprite(40,650,10,150);
  ob66.shapeColor="brown";
  //
  target = createSprite(20,780,10,10);
}

function draw() {
  background("orange");

  if(gameState === PLAY){
  //MAKING SOFIA COLLIDE AND CREATING EDGES
  createEdgeSprites();
  sofia.collide(topEdge);
  sofia.collide(bottomEdge);
  sofia.collide(rightEdge);
  sofia.collide(leftEdge);
  
  // MAKING SOFIA BOUNCE FROM OBSTACLES
  sofia.bounceOff(ob1);
  sofia.bounceOff(ob2);
  sofia.bounceOff(ob3);
  sofia.bounceOff(ob4);
  sofia.bounceOff(ob5);
  sofia.bounceOff(ob6);
  sofia.bounceOff(ob7);
  sofia.bounceOff(ob8);
  sofia.bounceOff(ob9);
  sofia.bounceOff(ob10);
  
  sofia.bounceOff(ob11);
  sofia.bounceOff(ob12);
  sofia.bounceOff(ob13);
  sofia.bounceOff(ob14);
  sofia.bounceOff(ob15);
  sofia.bounceOff(ob16);
  sofia.bounceOff(ob17);
  sofia.bounceOff(ob18);
  sofia.bounceOff(ob19);
  sofia.bounceOff(ob20);
  
  sofia.bounceOff(ob21);
  sofia.bounceOff(ob22);
  sofia.bounceOff(ob23);
  sofia.bounceOff(ob24);
  sofia.bounceOff(ob25);
  sofia.bounceOff(ob26);
  sofia.bounceOff(ob27);
  sofia.bounceOff(ob28);
  sofia.bounceOff(ob29);
  sofia.bounceOff(ob30);

  sofia.bounceOff(ob31);
  sofia.bounceOff(ob32);
  sofia.bounceOff(ob33);
  sofia.bounceOff(ob34);
  sofia.bounceOff(ob35);
  sofia.bounceOff(ob36);
  sofia.bounceOff(ob37);
  sofia.bounceOff(ob38);
  sofia.bounceOff(ob39);
  sofia.bounceOff(ob40);

  sofia.bounceOff(ob41);
  sofia.bounceOff(ob42);
  sofia.bounceOff(ob43);
  sofia.bounceOff(ob44);
  sofia.bounceOff(ob45);
  sofia.bounceOff(ob46);
  sofia.bounceOff(ob47);
  sofia.bounceOff(ob48);
  sofia.bounceOff(ob49);
  sofia.bounceOff(ob50);

  sofia.bounceOff(ob51);
  sofia.bounceOff(ob52);
  sofia.bounceOff(ob53);
  sofia.bounceOff(ob54);
  sofia.bounceOff(ob55);
  sofia.bounceOff(ob56);
  sofia.bounceOff(ob57);
  sofia.bounceOff(ob58);
  sofia.bounceOff(ob59);
  sofia.bounceOff(ob60);

  sofia.bounceOff(ob61);
  sofia.bounceOff(ob62);
  sofia.bounceOff(ob63);
  sofia.bounceOff(ob64);
  sofia.bounceOff(ob65);
  sofia.bounceOff(ob66);

  // MOVEMENT OF SOFIA
  if(keyDown("w")){
    sofia.velocityY=-5;
  }
  if(keyDown("s")){
    sofia.velocityY=5;
  }
  if(keyDown("a")){
    sofia.velocityX=-5;
  }
  if(keyDown("d")){
    sofia.velocityX=5;
   } 

  if(sofia.isTouching(target)){
    gameState = END
  }
  }
  else if(gameState === END){
    sofia.velocityX=0;
    sofia.velocityY=0;
    text (COMPLETED ,400,400);
    textSize(50);
    fill(red);

  }
  drawSprites();
}