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
//
// Originally written by TepigMC
//
// 06 Feb 2015 lostminer: Add user variables
// 13 Feb 2015 lostminer: Update to use new version of generator
// 25 Feb 2015 TepigMC: Modify images; Fix drawing errors
// 26 Feb 2015 TepigMC: Remove missing texture checks; Rename files
//
// NOTES:
//
// This generator creates a pig papercraft with an optional saddle, helmet, and boots that can be removable.
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
var armorTexture = "Armor";

// Function to help with defining the inputs
Generator.makeTextureInput = function(texture, width, height) {
  Generator.defineInput(texture, {
    type: "texture", 
    standardWidth: width, 
    standardHeight: height
  });
};

// Define user inputs
Generator.makeTextureInput(pigTexture,    64, 32);
Generator.makeTextureInput(saddleTexture, 64, 32);
Generator.makeTextureInput(armorTexture,  64, 32);

// Define Layer variables
var showFolds =  Generator.defineBooleanVariable("Show Folds", true);
var showLabels =  Generator.defineBooleanVariable("Show Labels", true);
var isTransparent =  Generator.defineBooleanVariable("Transparent Background", true);

// Define Texture variables
var noseStyle = Generator.defineSelectVariable("Nose Style", ["Flat", "3D"]);
var headStyle = Generator.defineSelectVariable("Head Style", ["Simple", "Advanced"]);
var saddleStyle = Generator.defineSelectVariable("Saddle Style", ["None", "Attached", "Seperate"]);
var helmetStyle = Generator.defineSelectVariable("Helmet Style", ["None", "Attached", "Seperate"]);
var bootsStyle = Generator.defineSelectVariable("Boots Style", ["None", "Attached", "Seperate"]);

var useSaddle = saddleStyle !== "None";
var useHelmet = helmetStyle !== "None";
var useBoots = bootsStyle !== "None";

var flatNose = noseStyle === "Flat";
var simpleHead = headStyle === "Simple";
var seperateSaddle = saddleStyle === "Seperate";
var seperateHelmet = helmetStyle === "Seperate";
var seperateBoots = bootsStyle === "Seperate";

// Head Functions
Generator.drawHeadAdvanced = function(texture, x, y) {
  Generator.drawImage(texture, {x:0,  y:8,  w:8, h:2}, {x:x,     y:y+64,  w:64, h:16}); // Right 1
  Generator.drawImage(texture, {x:2,  y:10, w:6, h:6}, {x:x+16,  y:y+80,  w:48, h:48}); // Right 2
  Generator.drawImage(texture, {x:8,  y:8,  w:8, h:8}, {x:x+64,  y:y+64,  w:64, h:64}); // Face
  Generator.drawImage(texture, {x:16, y:8,  w:8, h:2}, {x:x+128, y:y+64,  w:64, h:16}); // Left 1
  Generator.drawImage(texture, {x:16, y:10, w:6, h:6}, {x:x+128, y:y+80,  w:48, h:48}); // Left 2
  Generator.drawImage(texture, {x:24, y:8,  w:8, h:2}, {x:x+192, y:y+64,  w:64, h:16}); // Back 1
  Generator.drawImage(texture, {x:24, y:10, w:8, h:6}, {x:x+176, y:y+80,  w:64, h:48}); // Back 2
  Generator.drawImage(texture, {x:24, y:10, w:8, h:2}, {x:x,     y:y+144, w:64, h:16}, {rotate:270}); // Back 3
  Generator.drawImage(texture, {x:8,  y:0,  w:8, h:8}, {x:x+64,  y:y,     w:64, h:64}); // Top
  Generator.drawImage(texture, {x:16, y:0,  w:8, h:6}, {x:x+64,  y:y+128, w:64, h:48}); // Bottom
}
Generator.drawHeadSimple = function(texture, x, y) {
  Generator.drawImage(texture, {x:0,  y:8, w:8, h:8}, {x:x,     y:y+64,  w:64, h:64}); // Right
  Generator.drawImage(texture, {x:8,  y:8, w:8, h:8}, {x:x+64,  y:y+64,  w:64, h:64}); // Face
  Generator.drawImage(texture, {x:16, y:8, w:8, h:8}, {x:x+128, y:y+64,  w:64, h:64}); // Left
  Generator.drawImage(texture, {x:24, y:8, w:8, h:8}, {x:256,   y:y+64,  w:64, h:64}); // Back
  Generator.drawImage(texture, {x:8,  y:0, w:8, h:8}, {x:x+64,  y:y,     w:64, h:64}); // Top
  Generator.drawImage(texture, {x:16, y:0, w:8, h:8}, {x:x+64,  y:y+128, w:64, h:64}); // Bottom
}
//Nose Functions
Generator.drawNose3D = function(texture, x, y) {
  Generator.drawImage(texture, {x:16, y:17, w:1, h:3}, {x:x,    y:y+32, w:8,  h:24}); // Right
  Generator.drawImage(texture, {x:17, y:17, w:4, h:3}, {x:x+8,  y:y+32, w:32, h:24}); // Center
  Generator.drawImage(texture, {x:21, y:17, w:1, h:3}, {x:x+40, y:y+32, w:8,  h:24}); // Left
  Generator.drawImage(texture, {x:10, y:12, w:4, h:3}, {x:x+8,  y:y,    w:32, h:24}, {rotate:"vertical"}); // Back
  Generator.drawImage(texture, {x:17, y:16, w:4, h:1}, {x:x+8,  y:y+24, w:32, h:8}); // Top
  Generator.drawImage(texture, {x:21, y:16, w:4, h:1}, {x:x+8,  y:y+56, w:32, h:8}); // Bottom
}
Generator.drawNoseFlat = function(texture, x, y) {
  Generator.drawImage(texture, {x:17, y:17, w:4, h:3}, {x:x+80,  y:y+96,  w:32, h:24});
}

// Body Function
Generator.drawBody = function(texture, x, y) {
  Generator.drawImage(texture, {x:28, y:16, w:8,  h:16}, {x:x,     y:y+64,  w:64, h:128}); // Right
  Generator.drawImage(texture, {x:36, y:16, w:10, h:16}, {x:x+64,  y:y+64,  w:80, h:128}); // Bottom
  Generator.drawImage(texture, {x:46, y:16, w:8,  h:16}, {x:x+144, y:y+64,  w:64, h:128}); // Left
  Generator.drawImage(texture, {x:54, y:16, w:10, h:16}, {x:x+208, y:y+64,  w:80, h:128}); // Top
  Generator.drawImage(texture, {x:36, y:8,  w:10, h:8},  {x:x+64,  y:y,     w:80, h:64}); // Front
  Generator.drawImage(texture, {x:46, y:8,  w:10, h:8},  {x:x+64,  y:y+192, w:80, h:64}, {flip:"vertical"}); // Back
}
// Leg Function
Generator.drawLeg = function(texture, x, y) { //all legs on a pig are the same, so no flipping needed
  Generator.drawImage(texture, {x:0,  y:20, w:4, h:6}, {x:x,    y:y+32, w:32, h:48}); // Right
  Generator.drawImage(texture, {x:4,  y:20, w:4, h:6}, {x:x+32, y:y+32, w:32, h:48}); // Front
  Generator.drawImage(texture, {x:8,  y:20, w:4, h:6}, {x:x+64, y:y+32, w:32, h:48}); // Left
  Generator.drawImage(texture, {x:12, y:20, w:4, h:6}, {x:x+96, y:y+32, w:32, h:48}); // Back
  Generator.drawImage(texture, {x:4,  y:16, w:4, h:4}, {x:x+32, y:y,    w:32, h:32}); // Top
  Generator.drawImage(texture, {x:8,  y:16, w:4, h:4}, {x:x+32, y:y+80, w:32, h:32}); // Bottom
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
}
// Helmet Function (only for seperate helmet)
Generator.drawHelmetSeperate = function(texture, x, y) {
  // Layer 1
  Generator.drawImage(texture, {x:0,  y:8,  w:8, h:3}, {x:x,     y:y+64,  w:64, h:24}); // Right 1
  Generator.drawImage(texture, {x:2,  y:10, w:6, h:5}, {x:x+16,  y:y+80,  w:48, h:40}); // Right 2
  Generator.drawImage(texture, {x:8,  y:8,  w:8, h:8}, {x:x+64,  y:y+64,  w:64, h:64}); // Face
  Generator.drawImage(texture, {x:16, y:8,  w:8, h:3}, {x:x+128, y:y+64,  w:64, h:24}); // Left 1
  Generator.drawImage(texture, {x:16, y:10, w:6, h:5}, {x:x+128, y:y+80,  w:48, h:40}); // Left 2
  Generator.drawImage(texture, {x:24, y:8,  w:8, h:3}, {x:x+192, y:y+64,  w:64, h:24}); // Back
  Generator.drawImage(texture, {x:8,  y:0,  w:8, h:8}, {x:x+64,  y:y,     w:64, h:64}); // Top
  Generator.drawImage(texture, {x:16, y:0,  w:8, h:8}, {x:x+64,  y:y+128, w:64, h:64}); // Bottom
  // Layer 2
  Generator.drawImage(texture, {x:32, y:8,  w:8, h:3}, {x:x,     y:y+64,  w:64, h:24}); // Right 1
  Generator.drawImage(texture, {x:34, y:10, w:6, h:5}, {x:x+16,  y:y+80,  w:48, h:40}); // Right 2
  Generator.drawImage(texture, {x:40, y:8,  w:8, h:8}, {x:x+64,  y:y+64,  w:64, h:64}); // Face
  Generator.drawImage(texture, {x:48, y:8,  w:8, h:3}, {x:x+128, y:y+64,  w:64, h:24}); // Left 1
  Generator.drawImage(texture, {x:48, y:10, w:6, h:5}, {x:x+128, y:y+80,  w:48, h:40}); // Left 2
  Generator.drawImage(texture, {x:56, y:8,  w:8, h:3}, {x:x+192, y:y+64,  w:64, h:24}); // Back
  Generator.drawImage(texture, {x:40, y:0,  w:8, h:8}, {x:x+64,  y:y,     w:64, h:64}); // Top
  Generator.drawImage(texture, {x:48, y:0,  w:8, h:8}, {x:x+64,  y:y+128, w:64, h:64}); // Bottom
}
// Boot Function
Generator.drawBoot = function(texture, x, y) {
  Generator.drawImage(texture, {x:0,  y:26, w:4, h:6}, {x:x,    y:y+32, w:32, h:48}); // Right
  Generator.drawImage(texture, {x:4,  y:26, w:4, h:6}, {x:x+32, y:y+32, w:32, h:48}); // Front
  Generator.drawImage(texture, {x:8,  y:26, w:4, h:6}, {x:x+64, y:y+32, w:32, h:48}); // Left
  Generator.drawImage(texture, {x:12, y:26, w:4, h:6}, {x:x+96, y:y+32, w:32, h:48}); // Back
  Generator.drawImage(texture, {x:8,  y:16, w:4, h:4}, {x:x+32, y:y+80, w:32, h:32}); // Bottom
}

// Ultra Mini Functions
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


///// PAGE 1 - Pig /////
Generator.usePage("Pig");
if (!isTransparent) { Generator.drawImage("Background Opaque"); }
Generator.drawImage("Background Page 1");

if (simpleHead) {
  Generator.drawImage("Background Page 1 Head Simple");
  Generator.drawHeadSimple(pigTexture, 64, 96);
}
else {
  Generator.drawImage("Background Page 1 Head Advanced");
  Generator.drawHeadAdvanced(pigTexture, 64, 96);
}

Generator.drawBody(pigTexture, 56, 328);
Generator.drawLeg(pigTexture, 392, 128);
Generator.drawLeg(pigTexture, 392, 312);
Generator.drawLeg(pigTexture, 392, 496);
Generator.drawLeg(pigTexture, 240, 608);

if (flatNose) { Generator.drawNoseFlat(pigTexture, 64, 96); }
else          { Generator.drawNose3D(pigTexture, 264, 272); }

// Draw the accessories on the pig
if (useHelmet && !seperateHelmet) {
  if (simpleHead) { Generator.drawHeadSimple(armorTexture, 64, 96); }
  else            { Generator.drawHeadAdvanced(armorTexture, 64, 96); }
}
if (useSaddle && !seperateSaddle) { Generator.drawBody(saddleTexture, 56, 328); }
if (useBoots && !seperateBoots) {
  Generator.drawBoot(armorTexture, 392, 128);
  Generator.drawBoot(armorTexture, 392, 312);
  Generator.drawBoot(armorTexture, 392, 496);
  Generator.drawBoot(armorTexture, 240, 608);
}

Generator.drawUltraMiniBody(pigTexture, 120, 650);
Generator.drawUltraMiniLegs(armorTexture, 120, 650);
Generator.drawUltraMiniEnds(pigTexture, 120, 650);
if (useSaddle) { Generator.drawUltraMiniBody(saddleTexture, 120, 650);  }
if (useHelmet) { Generator.drawUltraMiniHelmet(armorTexture, 120, 650); }
if (useBoots)  { Generator.drawUltraMiniLegs(armorTexture, 120, 650);   }

if (showLabels && !flatNose) { Generator.drawImage("Labels Page 1 Nose 3D"); }

// Draw the foregrounds that are dependant on head type
if (simpleHead) {
  if (showFolds)  { Generator.drawImage("Folds Page 1 Head Simple");  }
  if (showLabels) { Generator.drawImage("Labels Page 1 Head Simple"); }
}
else {
  Generator.drawImage("Cuts Page 1 Head Advanced");
  if (showFolds)  { Generator.drawImage("Folds Page 1 Head Advanced"); }
  if (showLabels) { Generator.drawImage("Labels Page 1 Head Advanced"); }
}
if (showFolds)  { Generator.drawImage("Folds Page 1");  }
if (showLabels) { Generator.drawImage("Labels Page 1"); }


///// PAGE 2 - Accessories /////
if (useSaddle && seperateSaddle || useHelmet && seperateHelmet || useBoots && seperateBoots) { // Only use if needed
  Generator.usePage("Accessories");
  if (!isTransparent) { Generator.drawImage("Background Opaque"); }
  Generator.drawImage("Background Page 2");

  if (useSaddle && seperateSaddle) { Generator.drawSaddleSeperate(saddleTexture, 56, 328); }
  if (useHelmet && seperateHelmet) { Generator.drawHelmetSeperate(armorTexture, 64, 96);  }
  if (useBoots && seperateBoots) {
    Generator.drawBoot(armorTexture, 392, 128);
    Generator.drawBoot(armorTexture, 392, 312);
    Generator.drawBoot(armorTexture, 392, 496);
    Generator.drawBoot(armorTexture, 240, 608);
  }
  
  if (showFolds)  { Generator.drawImage("Folds Page 2");  }
  if (showLabels) { Generator.drawImage("Labels Page 2"); }
}