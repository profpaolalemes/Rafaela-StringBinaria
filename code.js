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



var linha_1 = "1111111111111111";
var linha_2 = "1111111111111111";
var linha_3 = "1111111111111111";
var linha_4 = "1111011111011111";
var linha_5 = "1111011111011111";
var linha_6 = "1111111111111111";
var linha_7 = "1111111111111111";
var linha_8 = "1011111111111101";

var linha_9 = "1101111111111011";
var linha_10 = "1110111111110111";
var linha_11 = "1111000000001111";
var linha_12 = "1111111111111111";
var linha_13 = "1111111111111111";
var linha_14 = "1111111111111111";
var linha_15 = "1111111111111111";
var linha_16 = "1111111111111111";



var linhas = [linha_1, linha_2, linha_3, linha_4, linha_5, linha_6, linha_7, linha_8,linha_9, linha_10, linha_11, linha_12, linha_13, linha_14, linha_15, linha_16];

var ladoquadrado=width/linhas.length

function draw() {
  for (var k=0; k <= linhas.length; k++) {
    line(k*ladoquadrado, 0, k*ladoquadrado, 400);
    line(0, k*ladoquadrado, 400, k*ladoquadrado);
  }
  
  // linhas
  
  for (var r = 0; r < linhas.length; r++) {
    for(var i = 0; i < linhas[r].length; i++) {
      if(linhas[r][i] == "0"){
        // console.log("entered" + i);
        fill("black");
        rect(i*ladoquadrado, r*ladoquadrado, ladoquadrado,ladoquadrado);
      }
    }
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
