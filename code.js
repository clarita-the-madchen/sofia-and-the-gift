var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----




var sofia = createSprite(20, 25,18,18);
sofia.shapeColor = "#FED498";


var box1 = createSprite(10, 70,100,20);
box1.shapeColor = "#AF8657";


var box2 = createSprite(10, 100,20,60);
box2.shapeColor = "#AF8657";

var box3 = createSprite(60, 200,40,60);
box3.shapeColor = "#AF8657";

var box4 = createSprite(100, 100,100,18);
box4.shapeColor = "#AF8657";

var box5 = createSprite(128, 200,20,100);
box5.shapeColor = "#AF8657";

var box6 = createSprite(120, 245,300,30);
box6.shapeColor = "#AF8657";

var box7 = createSprite(253, 280,30,100);
box7.shapeColor = "#AF8657";

var box8 = createSprite(300, 25,47,128);
box8.shapeColor = "#AF8657";

var box9 = createSprite(284, 250,47,128);
box9.shapeColor = "#AF8657";


var presente = createSprite(13, 370,18,18);
presente.shapeColor = "#E1DE00";





function draw() {
  background("#444444");
  
  drawSprites();
  
  createEdgeSprites();
  
  sofia.bounceOff(edges)

 
sofia.bounceOff(box1)
  sofia.bounceOff(box2)
  sofia.bounceOff(box3)
  sofia.bounceOff(box4)
  sofia.bounceOff(box5)
  sofia.bounceOff(box6)
sofia.bounceOff(box7)
 sofia.bounceOff(box8)
  sofia.bounceOff(box9)
  
  if (keyDown("d")) {
  sofia.velocityX =3;
  sofia.velocityY = 4;
}

if (keyDown("s")) {
  sofia.velocityX =0;
  sofia.velocityY = 3;
}

if (keyDown("a")) {
  sofia.velocityX =-3;
  sofia.velocityY = 0;
}


if (sofia.collide(presente)) {
  fill("white")
  text("você venceu!",200,200)
}

  
}
  
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
