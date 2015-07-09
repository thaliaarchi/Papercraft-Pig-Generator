////////////////////////////////////////////////////////////////////////////////
//
// MINECRAFT PIG PAPERCRAFT GENERATOR 
//
//            ,.                      
//           (_|,.                    
//          ," /, )_______   _        
//       __j o``-"        `."-)"      
//      (")                 \"        
//       `-j                |         
//         `-._(           /          
//            |_\  |--^.  /           
//           /_]"|_| /_)_/            
//              /_]"  /_]"            
//
// Created by TepigMC
//
// 06 Feb 2015 lostminer: Add user variables
// 13 Feb 2015 lostminer: Update to use new version of generator
// 25 Feb 2015 TepigMC: Modified images; Fix drawing errors
// 26 Feb 2015 TepigMC: Removed missing texture checks; Rename files
// 27 Feb 2015 TepigMC: Compacted backgrounds and folds into sprite files
// 28 Feb 2015 TepigMC: Compacted labels and titles into sprite files; Added "Advanced (Standard)" head
//                      Added "Show Helmet Overlay" option; Added texture options
//
// NOTES:
//
// This generator creates a pig papercraft with an optional saddle, helmet, and boots.
// There are also options for a flat nose and simple head that don't follow real minecraft, but are easier to make.
// There is also a bonus matching ultra mini pig that was inspired by Maki.
//
// Sizing:
//   The saddle, helmet, and boots can vary in texture size, so there may need to be some trimming to fit it over the pig.
//
//   The accessories page (second page) works the best if printed slightly larger than the pig page so it fits onto the pig better.
//   In Windows Photo Viewer, this can be solved by:
//     - Unchecking 'Fit picture to frame' when you print the pig page
//     - and Checking 'Fit picture to frame' for the accessories page.
//
// Textures:
//   - Pig texture found at "assets\minecraft\textures\entity\pig\pig.png"
//   - Saddle texture found at "assets\minecraft\textures\entity\pig\pig_saddle.png"
//   - Armor texture (Layer 1) found at "assets\minecraft\textures\models\armor\diamond_layer_1.png"
//
////////////////////////////////////////////////////////////////////////////////

// Input names
var pigTexture = "Pig";
var saddleTexture = "Saddle";
var armorTexture = "Armor (Layer 1)";
var bgSprite = "Background Sprites";
var foldSprite = "Fold Sprites";
var labelSprite = "Label Sprites";
var titleSprite = "Title Sprites";

var bgSprites = {
  body: { w:312, h:304, x:0, y:0 },
  boot: { w:152, h:104, x:280, y:504 },
  headAdvanced: { w:296, h:176, x:0, y:304 },
  headSimple: { w:280, h:192, x:312, y:200 },
  headStandardAdvanced: { w:280, h:200, x:312, y:0 },
  helmet: { w:280, h:128, x:0, y:480 },
  leg: { w:152, h:160, x:440, y:392 },
  nose3D: { w:80, h:80, x:296, y:392 },
  opaque: { w:32, h:32, x:296, y:472 },
  ultraMini: { w:36, h:28, x:328, y:472 }
};

var foldSprites = {
  body: { w:312, h:304, x:0, y:0 },
  boot: { w:152, h:104, x:448, y:448 },
  headAdvanced: { w:296, h:176, x:0, y:632 },
  headAdvancedCuts: { w:296, h:176, x:304, y:632 },
  headSimple: { w:280, h:192, x:320, y:256 },
  headStandardAdvanced: { w:280, h:200, x:0, y:304 },
  helmet: { w:280, h:128, x:0, y:504 },
  leg: { w:152, h:160, x:280, y:448 },
  nose3D: { w:80, h:80, x:432, y:552 },
  saddle: { w:288, h:256, x:312, y:0 }
};

var labelSprites = {
  bodyHead: { w:64, h:48, x:0, y:0 },
  bodyLeg1: { w:32, h:32, x:128, y:0 },
  bodyLeg2: { w:32, h:32, x:160, y:0 },
  bodyLeg3: { w:32, h:24, x:128, y:32 },
  bodyLeg4: { w:32, h:24, x:160, y:32 },
  head: { w:64, h:48, x:64, y:0 },
  headNose3D: { w:32, h:24, x:128, y:56 },
  headStandardAdvanced: { w:16, h:48, x:192, y:0 },
  leg1: { w:32, h:32, x:0, y:48 },
  leg2: { w:32, h:32, x:32, y:48 },
  leg3: { w:32, h:32, x:64, y:48 },
  leg4: { w:32, h:32, x:96, y:48 },
  nose3D: { w:32, h:24, x:160, y:56 }
};

var titleSprites = {
  body: { w:46, h:16, x:34, y:30 },
  boot: { w:42, h:14, x:44, y:16 },
  head: { w:46, h:14, x:138, y:0 },
  helmet: { w:60, h:14, x:184, y:0 },
  leg: { w:34, h:16, x:0, y:23 },
  nose3D: { w:46, h:14, x:244, y:0 },
  pixelPapercraft: { w:208, h:34, x:86, y:14 },
  saddle: { w:64, h:14, x:74, y:0 },
  tepigmc: { w:74, h:16, x:0, y:0 },
  ultraMini: { w:44, h:7, x:0, y:16 }
};

// Function to help with defining the inputs
Generator.makeTextureInput = function(texture, width, height, choices) {
  Generator.defineInput(texture, {
    type: "texture", 
    standardWidth: width, 
    standardHeight: height,
    choices: choices
  });
};

// Define user inputs
Generator.makeTextureInput(pigTexture, 64, 32, [
  "Pig (Vanilla)","Pig (Faithful)","Pig (Space Pig)","Tepig (by Audra)","Tepig (by Elpis)"
]);
Generator.makeTextureInput(saddleTexture, 64, 32, [
  "Saddle (Vanilla)","Saddle (Faithful)","Saddle (Space Pig)"
]);
Generator.makeTextureInput(armorTexture, 64, 32, [
  "Diamond Armor (Vanilla)","Gold Armor (Vanilla)","Chainmail Armor (Vanilla)","Iron Armor (Vanilla)",
  "Diamond Armor (Faithful)","Gold Armor (Faithful)","Chainmail Armor (Faithful)","Iron Armor (Faithful)",
  "Armor (Space Pig)"
]);

// Function to easily draw a section of an image
Generator.drawSprite = function(sprite, spriteJson, x, y) {
  Generator.drawImage(sprite,
    {x:spriteJson.x, y:spriteJson.y, w:spriteJson.w, h:spriteJson.h},
    {x:x, y:y, w:spriteJson.w, h:spriteJson.h}
  );
}
// Function to easily draw a section of an image and stretch it
Generator.drawSpriteSized = function(sprite, spriteJson, x, y, width, height) {
  Generator.drawImage(bgSprite,
    {x:spriteJson.x, y:spriteJson.y, w:spriteJson.w, h:spriteJson.h},
    {x:x, y:y, w:width, h:height}
  );
}

// Define Layer variables
var showFolds = Generator.defineBooleanVariable("Show Folds", true);
var showLabels = Generator.defineBooleanVariable("Show Labels", true);
var showTitles = Generator.defineBooleanVariable("Show Titles", true);
var showHelmetOverlay = Generator.defineBooleanVariable("Show Helmet Overlay", true);
var isTransparent =  Generator.defineBooleanVariable("Transparent Background", true);

// Define Texture variables
var noseStyle = Generator.defineSelectVariable("Nose Style", ["Flat", "3D"]);
var headStyle = Generator.defineSelectVariable("Head Style", ["Simple", "Advanced", "Advanced (Standard)"]);
var saddleStyle = Generator.defineSelectVariable("Saddle Style", ["None", "Attached", "Seperate"]);
var helmetStyle = Generator.defineSelectVariable("Helmet Style", ["None", "Attached", "Seperate"]);
var bootsStyle = Generator.defineSelectVariable("Boots Style", ["None", "Attached", "Seperate"]);

var useSaddle = saddleStyle !== "None";
var useHelmet = helmetStyle !== "None";
var useBoots = bootsStyle !== "None";

var flatNose = noseStyle === "Flat";
var simpleHead = headStyle === "Simple";
var standardAdvancedHead = headStyle === "Advanced (Standard)";
var seperateSaddle = saddleStyle === "Seperate";
var seperateHelmet = helmetStyle === "Seperate";
var seperateBoots = bootsStyle === "Seperate";

// Head Functions
Generator.drawHeadAdvanced = function(texture, x, y, isHelmet, drawLabels) {
  if (!isHelmet) {
    if (!standardAdvancedHead) { Generator.drawSprite(bgSprite, bgSprites.headAdvanced, x, y); }
    else { Generator.drawSprite(bgSprite, bgSprites.headStandardAdvanced, x+16, y); }
  }

  Generator.drawHeadAdvancedShape(texture, x+16, y, 0, 0);
  if (isHelmet && showHelmetOverlay) { Generator.drawHeadAdvancedShape(texture, x+16, y, 32, 0); }

  if (!standardAdvancedHead) {
    Generator.drawSprite(foldSprite, foldSprites.headAdvancedCuts, x, y);
    if (showFolds)  { Generator.drawSprite(foldSprite, foldSprites.headAdvanced, x, y); }
  }
  else {
    if (showFolds)  { Generator.drawSprite(foldSprite, foldSprites.headStandardAdvanced, x+16, y); }
  }

  if (drawLabels && showLabels) {
    if (!standardAdvancedHead) { Generator.drawSprite(labelSprite, labelSprites.head, x+192, y+80); }
    else {
      Generator.drawSprite(labelSprite, labelSprites.headStandardAdvanced, x+16, y+80);
      Generator.drawSprite(labelSprite, labelSprites.headStandardAdvanced, x+192, y+80);
    }
    if (!flatNose)  { Generator.drawSprite(labelSprite, labelSprites.headNose3D, x+96, y+96); }
    if (showTitles) { Generator.drawSprite(titleSprite, titleSprites.head, x+22, y+12); }
  }
}
Generator.drawHeadAdvancedShape = function(texture, x, y, tx, ty) {
  Generator.drawImage(texture, {x:tx,    y:ty+8,  w:8, h:2}, {x:x,     y:y+64,  w:64, h:16}); // Right 1
  Generator.drawImage(texture, {x:tx+2,  y:ty+10, w:6, h:6}, {x:x+16,  y:y+80,  w:48, h:48}); // Right 2
  Generator.drawImage(texture, {x:tx+8,  y:ty+8,  w:8, h:8}, {x:x+64,  y:y+64,  w:64, h:64}); // Face
  Generator.drawImage(texture, {x:tx+16, y:ty+8,  w:8, h:2}, {x:x+128, y:y+64,  w:64, h:16}); // Left 1
  Generator.drawImage(texture, {x:tx+16, y:ty+10, w:6, h:6}, {x:x+128, y:y+80,  w:48, h:48}); // Left 2
  Generator.drawImage(texture, {x:tx+8,  y:ty,    w:8, h:8}, {x:x+64,  y:y,     w:64, h:64}); // Top
  Generator.drawImage(texture, {x:tx+16, y:ty,    w:8, h:6}, {x:x+64,  y:y+128, w:64, h:48}); // Bottom
  Generator.drawImage(texture, {x:tx+24, y:ty+8,  w:8, h:2}, {x:x+192, y:y+64,  w:64, h:16}); // Back 1
  if (!standardAdvancedHead) {
    Generator.drawImage(texture, {x:tx+24, y:ty+10, w:8, h:6}, {x:x+176, y:y+80,  w:64, h:48}); // Back 2
    Generator.drawImage(texture, {x:tx+24, y:ty+10, w:8, h:2}, {x:x,     y:y+144, w:64, h:16}, {rotate:270}); // Back 3
  }
}
Generator.drawHeadSimple = function(texture, x, y, isHelmet, drawLabels) {
  if (!isHelmet) { Generator.drawSprite(bgSprite, bgSprites.headSimple, x, y);}

  Generator.drawHeadSimpleShape(texture, x, y, 0);
  if (isHelmet && showHelmetOverlay) { Generator.drawHeadSimpleShape(texture, x, y, 32); }

  if (showFolds)  { Generator.drawSprite(foldSprite, foldSprites.headSimple, x, y); }
  if (drawLabels) { 
    if (showLabels) {
      Generator.drawSprite(labelSprite, labelSprites.head, x+192, y+88);
      if (!flatNose) { Generator.drawSprite(labelSprite, labelSprites.headNose3D, x+80, y+96); }
    }
    if (showTitles) { Generator.drawSprite(titleSprite, titleSprites.head, x+6, y+12); }
  }
}
Generator.drawHeadSimpleShape = function(texture, x, y, textureOffsetX) {
  Generator.drawImage(texture, {x:textureOffsetX,    y:8, w:8, h:8}, {x:x,     y:y+64,  w:64, h:64}); // Right
  Generator.drawImage(texture, {x:textureOffsetX+8,  y:8, w:8, h:8}, {x:x+64,  y:y+64,  w:64, h:64}); // Face
  Generator.drawImage(texture, {x:textureOffsetX+16, y:8, w:8, h:8}, {x:x+128, y:y+64,  w:64, h:64}); // Left
  Generator.drawImage(texture, {x:textureOffsetX+24, y:8, w:8, h:8}, {x:256,   y:y+64,  w:64, h:64}); // Back
  Generator.drawImage(texture, {x:textureOffsetX+8,  y:0, w:8, h:8}, {x:x+64,  y:y,     w:64, h:64}); // Top
  Generator.drawImage(texture, {x:textureOffsetX+16, y:0, w:8, h:8}, {x:x+64,  y:y+128, w:64, h:64}); // Bottom
}
//Nose Functions
Generator.drawNose3D = function(texture, x, y) {
  Generator.drawSprite(bgSprite, bgSprites.nose3D, x, y);

  Generator.drawImage(texture, {x:16, y:17, w:1, h:3}, {x:x+16,    y:y+32, w:8,  h:24}); // Right
  Generator.drawImage(texture, {x:17, y:17, w:4, h:3}, {x:x+24,  y:y+32, w:32, h:24}); // Center
  Generator.drawImage(texture, {x:21, y:17, w:1, h:3}, {x:x+56, y:y+32, w:8,  h:24}); // Left
  Generator.drawImage(texture, {x:10, y:12, w:4, h:3}, {x:x+24,  y:y,    w:32, h:24}, {rotate:"vertical"}); // Back
  Generator.drawImage(texture, {x:17, y:16, w:4, h:1}, {x:x+24,  y:y+24, w:32, h:8}); // Top
  Generator.drawImage(texture, {x:21, y:16, w:4, h:1}, {x:x+24,  y:y+56, w:32, h:8}); // Bottom

  if (showFolds)  { Generator.drawSprite(foldSprite, foldSprites.nose3D, x, y); }
  if (showLabels) { Generator.drawSprite(labelSprite, labelSprites.nose3D, x+24, y); }
  if (showTitles) { Generator.drawSprite(titleSprite, titleSprites.nose3D, x+68, y+6); }
}
Generator.drawNoseFlat = function(texture, x, y) {
  Generator.drawImage(texture, {x:17, y:17, w:4, h:3}, {x:x+80,  y:y+96,  w:32, h:24});
}

// Body Function
Generator.drawBody = function(texture, x, y, isSaddle, drawLabels) {
  if (!isSaddle) { Generator.drawSprite(bgSprite, bgSprites.body, x, y); }

  Generator.drawImage(texture, {x:28, y:16, w:8,  h:16}, {x:x,     y:y+88,  w:64, h:128}); // Right
  Generator.drawImage(texture, {x:36, y:16, w:10, h:16}, {x:x+64,  y:y+88,  w:80, h:128}); // Bottom
  Generator.drawImage(texture, {x:46, y:16, w:8,  h:16}, {x:x+144, y:y+88,  w:64, h:128}); // Left
  Generator.drawImage(texture, {x:54, y:16, w:10, h:16}, {x:x+208, y:y+88,  w:80, h:128}); // Top
  Generator.drawImage(texture, {x:36, y:8,  w:10, h:8},  {x:x+64,  y:y+24,  w:80, h:64}); // Front
  Generator.drawImage(texture, {x:46, y:8,  w:10, h:8},  {x:x+64,  y:y+216, w:80, h:64}, {flip:"vertical"}); // Back

  if (showFolds)  { Generator.drawSprite(foldSprite, foldSprites.body, x, y); }
  if (drawLabels) {
    if (showLabels) {
      Generator.drawSprite(labelSprite, labelSprites.bodyHead, x+72, y+24);
      Generator.drawSprite(labelSprite, labelSprites.bodyLeg1, x+64, y+96);
      Generator.drawSprite(labelSprite, labelSprites.bodyLeg2, x+112, y+96);
      Generator.drawSprite(labelSprite, labelSprites.bodyLeg3, x+64, y+192);
      Generator.drawSprite(labelSprite, labelSprites.bodyLeg4, x+112, y+192);
    }
    if (showTitles) { Generator.drawSprite(titleSprite, titleSprites.body, x+6, y+36); }
  }
}
// Leg Function
Generator.drawLeg = function(texture, x, y, labelID) { //all legs on a pig are the same, so no flipping needed
  Generator.drawSprite(bgSprite, bgSprites.leg, x, y);

  Generator.drawImage(texture, {x:0,  y:20, w:4, h:6}, {x:x,    y:y+56,  w:32, h:48}); // Right
  Generator.drawImage(texture, {x:4,  y:20, w:4, h:6}, {x:x+32, y:y+56,  w:32, h:48}); // Front
  Generator.drawImage(texture, {x:8,  y:20, w:4, h:6}, {x:x+64, y:y+56,  w:32, h:48}); // Left
  Generator.drawImage(texture, {x:12, y:20, w:4, h:6}, {x:x+96, y:y+56,  w:32, h:48}); // Back
  Generator.drawImage(texture, {x:4,  y:16, w:4, h:4}, {x:x+32, y:y+24,  w:32, h:32}); // Top
  Generator.drawImage(texture, {x:8,  y:16, w:4, h:4}, {x:x+32, y:y+104, w:32, h:32}); // Bottom

  if (showFolds)  { Generator.drawSprite(foldSprite, foldSprites.leg, x, y); }
  var sprite = {};
  if (labelID == 1) { sprite = labelSprites.leg1; }
  if (labelID == 2) { sprite = labelSprites.leg2; }
  if (labelID == 3) { sprite = labelSprites.leg3; }
  if (labelID == 4) { sprite = labelSprites.leg4; }
  if (showLabels) { Generator.drawSprite(labelSprite, sprite, x+32, y+24); }
  if (showTitles) { Generator.drawSprite(titleSprite, titleSprites.leg, x+76, y+4); }
}


// Saddle Function (only for seperate saddle)
Generator.drawSaddleSeperate = function(texture, x, y) {
  // Top
  Generator.drawImage(texture, {x:41, y:16, w:5,  h:16}, {x:x,     y:y, w:40, h:128}); // Bottom Left
  Generator.drawImage(texture, {x:46, y:16, w:8,  h:16}, {x:x+40,  y:y, w:64, h:128}); // Left
  Generator.drawImage(texture, {x:54, y:16, w:10, h:16}, {x:x+104, y:y, w:80, h:128}); // Top
  Generator.drawImage(texture, {x:28, y:16, w:8,  h:16}, {x:x+184, y:y, w:64, h:128}); // Right
  Generator.drawImage(texture, {x:41, y:16, w:5,  h:16}, {x:x+248, y:y, w:40, h:128}); // Bottom Right
  // Bottom
  Generator.drawImage(texture, {x:41, y:16, w:5,  h:16}, {x:x,     y:y+128, w:40, h:128}, {flip:"vertical"}); // Bottom Left
  Generator.drawImage(texture, {x:46, y:16, w:8,  h:16}, {x:x+40,  y:y+128, w:64, h:128}, {flip:"vertical"}); // Left
  Generator.drawImage(texture, {x:54, y:16, w:10, h:16}, {x:x+104, y:y+128, w:80, h:128}, {flip:"vertical"}); // Top
  Generator.drawImage(texture, {x:28, y:16, w:8,  h:16}, {x:x+184, y:y+128, w:64, h:128}, {flip:"vertical"}); // Right
  Generator.drawImage(texture, {x:41, y:16, w:5,  h:16}, {x:x+248, y:y+128, w:40, h:128}, {flip:"vertical"}); // Bottom Right

  if (showFolds)  { Generator.drawSprite(foldSprite, foldSprites.saddle, x, y); }
  if (showTitles) { Generator.drawSprite(titleSprite, titleSprites.saddle, x, y-26); }
}
// Helmet Functions (only for seperate helmet)
Generator.drawHelmetSeperate = function(texture, x, y) {
  Generator.drawSprite(bgSprite, bgSprites.helmet, x, y);

  Generator.drawHelmetSeperateShape(texture, x, y, 0, 0);
  if (showHelmetOverlay) { Generator.drawHelmetSeperateShape(texture, x, y, 32, 0); }

  if (showFolds)  { Generator.drawSprite(foldSprite, foldSprites.helmet, x, y); }
  if (showTitles) { Generator.drawSprite(titleSprite, titleSprites.helmet, x-8, y+12); }
}
Generator.drawHelmetSeperateShape = function(texture, x, y, tx, ty) {
  Generator.drawImage(texture, {x:tx,    y:ty+8,  w:8, h:3}, {x:x,     y:y+64,  w:64, h:24}); // Right 1
  Generator.drawImage(texture, {x:tx+2,  y:ty+11, w:6, h:5}, {x:x+16,  y:y+88,  w:48, h:40}); // Right 2
  Generator.drawImage(texture, {x:tx+8,  y:ty+8,  w:8, h:8}, {x:x+64,  y:y+64,  w:64, h:64}); // Face
  Generator.drawImage(texture, {x:tx+16, y:ty+8,  w:8, h:3}, {x:x+128, y:y+64,  w:64, h:24}); // Left 1
  Generator.drawImage(texture, {x:tx+16, y:ty+11, w:6, h:5}, {x:x+128, y:y+88,  w:48, h:40}); // Left 2
  Generator.drawImage(texture, {x:tx+24, y:ty+8,  w:8, h:3}, {x:x+192, y:y+64,  w:64, h:24}); // Back
  Generator.drawImage(texture, {x:tx+8,  y:ty,    w:8, h:8}, {x:x+64,  y:y,     w:64, h:64}); // Top
}
// Boot Function
Generator.drawBoot = function(texture, x, y, seperate) {
  if (seperate) { Generator.drawSprite(bgSprite, bgSprites.boot, x, y); }

  Generator.drawImage(texture, {x:0,  y:26, w:4, h:6}, {x:x,    y:y+0, w:32, h:48}); // Right
  Generator.drawImage(texture, {x:4,  y:26, w:4, h:6}, {x:x+32, y:y+0, w:32, h:48}); // Front
  Generator.drawImage(texture, {x:8,  y:26, w:4, h:6}, {x:x+64, y:y+0, w:32, h:48}); // Left
  Generator.drawImage(texture, {x:12, y:26, w:4, h:6}, {x:x+96, y:y+0, w:32, h:48}); // Back
  Generator.drawImage(texture, {x:8,  y:16, w:4, h:4}, {x:x+32, y:y+48, w:32, h:32}); // Bottom


  if (showFolds) { Generator.drawSprite(foldSprite, foldSprites.boot, x, y); }
  if (seperate && showTitles) { Generator.drawSprite(titleSprite, titleSprites.boot, x, y-26); }
}

// Ultra Mini Functions
Generator.drawUltraMini = function(x, y) {
  Generator.drawSprite(bgSprite, bgSprites.ultraMini, x, y);

  Generator.drawUltraMiniBody(pigTexture, x, y);
  Generator.drawUltraMiniLegs(armorTexture, x, y);
  Generator.drawUltraMiniEnds(pigTexture, x, y);
  if (useSaddle) { Generator.drawUltraMiniBody(saddleTexture, x, y);  }
  if (useHelmet) { Generator.drawUltraMiniHelmet(armorTexture, x, y); }
  if (useBoots)  { Generator.drawUltraMiniLegs(armorTexture, x, y);   }
  if (showTitles) { Generator.drawSprite(titleSprite, titleSprites.ultraMini, x-8, y-15); }
}
Generator.drawUltraMiniBody = function(texture, x, y) {
  Generator.drawImage(texture, {x:46, y:16, w:8,  h:16}, {x:x,    y:y+8,  w:8, h:12}, {flip:"vertical"}); // Right
  Generator.drawImage(texture, {x:36, y:16, w:10, h:16}, {x:x+24, y:y+8,  w:8, h:12}, {flip:"vertical"}); // Top
  Generator.drawImage(texture, {x:28, y:16, w:8,  h:16}, {x:x+16, y:y+8,  w:8, h:12}, {flip:"vertical"}); // Left
  Generator.drawImage(texture, {x:54, y:16, w:10, h:16}, {x:x+8,  y:y+8,  w:8, h:12}, {flip:"vertical"}); // Bottom
}
Generator.drawUltraMiniLegs = function(texture, x, y) {
  Generator.drawImage(texture, {x:8,  y:16, w:4,  h:4},  {x:x+24, y:y+8,  w:3, h:3}); // Foot 4
  Generator.drawImage(texture, {x:8,  y:16, w:4,  h:4},  {x:x+29, y:y+8,  w:3, h:3}); // Foot 3
  Generator.drawImage(texture, {x:8,  y:16, w:4,  h:4},  {x:x+24, y:y+16, w:3, h:3}); // Foot 2
  Generator.drawImage(texture, {x:8,  y:16, w:4,  h:4},  {x:x+29, y:y+16, w:3, h:3}); // Foot 1
}
Generator.drawUltraMiniEnds = function(texture, x, y) {
  Generator.drawImage(texture, {x:8,  y:8,  w:8,  h:8},  {x:x+8,  y:y+20, w:8, h:8});  // Face
  Generator.drawImage(texture, {x:17, y:17, w:4,  h:3},  {x:x+10, y:y+24, w:4, h:3});  // Nose
  Generator.drawImage(texture, {x:46, y:8,  w:10, h:8},  {x:x+8,  y:y,    w:8, h:8}, {flip:"vertical"}); // Back
}
Generator.drawUltraMiniHelmet = function(texture, x, y) {
  //Generator.drawImage(texture, {x:8,  y:0,  w:8, h:2}, {x:x+8,  y:y+18, w:8, h:2}); // Top
  Generator.drawImage(texture, {x:8,  y:8,  w:8, h:3}, {x:x+8,  y:y+20, w:8, h:3}); // Front 1
  Generator.drawImage(texture, {x:10, y:11, w:4, h:1}, {x:x+10, y:y+23, w:4, h:1}); // Front 2
  //Generator.drawImage(texture, {x:8, y:8, w:8, h:8}, {x:x+8, y:y+20, w:8, h:8}); // Full Helmet
}
// Function to draw TepigMC and Pixel Papercraft
Generator.drawCredits = function() {
  Generator.drawSprite(titleSprite, titleSprites.tepigmc, 19, 805); // TepigMC
  Generator.drawSprite(titleSprite, titleSprites.pixelPapercraft, 368, 788); // Pixel Papercraft
}
// Opaque Background Function
Generator.drawOpaque = function() {
  if (!isTransparent) {
    Generator.drawSpriteSized(bgSprite, bgSprites.opaque, 0, 0, 595, 842);
  }
}


///// PAGE 1 - Pig /////
Generator.usePage("Pig");
Generator.drawOpaque();
Generator.drawCredits();

if (simpleHead) { Generator.drawHeadSimple(pigTexture, 64, 96, false, !useHelmet || seperateHelmet);   }
else            { Generator.drawHeadAdvanced(pigTexture, 48, 96, false, !useHelmet || seperateHelmet); }

Generator.drawBody(pigTexture, 56, 304, false, !useSaddle || seperateSaddle);
Generator.drawLeg(pigTexture, 392, 104, 1);
Generator.drawLeg(pigTexture, 392, 288, 2);
Generator.drawLeg(pigTexture, 392, 472, 3);
Generator.drawLeg(pigTexture, 240, 584, 4);

if (flatNose) { Generator.drawNoseFlat(pigTexture, 64, 96); }
else          { Generator.drawNose3D(pigTexture, 248, 272); }

// Draw the accessories on the pig
if (useHelmet && !seperateHelmet) {
  if (simpleHead) { Generator.drawHeadSimple(armorTexture, 64, 96, true, true); }
  else            { Generator.drawHeadAdvanced(armorTexture, 48, 96, true, true); }
}
if (useSaddle && !seperateSaddle) { Generator.drawBody(saddleTexture, 56, 304, true, true); }
if (useBoots && !seperateBoots) {
  Generator.drawBoot(armorTexture, 392, 160, false);
  Generator.drawBoot(armorTexture, 392, 344, false);
  Generator.drawBoot(armorTexture, 392, 528, false);
  Generator.drawBoot(armorTexture, 240, 640, false);
}

Generator.drawUltraMini(120, 650);


///// PAGE 2 - Accessories /////
if (useSaddle && seperateSaddle || useHelmet && seperateHelmet || useBoots && seperateBoots) { // Only use if needed
  Generator.usePage("Accessories");
  Generator.drawOpaque();
  Generator.drawCredits();

  if (useSaddle && seperateSaddle) { Generator.drawSaddleSeperate(saddleTexture, 56, 328); }
  if (useHelmet && seperateHelmet) { Generator.drawHelmetSeperate(armorTexture, 64, 96);  }
  if (useBoots && seperateBoots) {
    Generator.drawBoot(armorTexture, 392, 160, true);
    Generator.drawBoot(armorTexture, 392, 344, true);
    Generator.drawBoot(armorTexture, 392, 528, true);
    Generator.drawBoot(armorTexture, 240, 640, true);
  }
}
