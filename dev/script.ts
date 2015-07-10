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
// 28 Feb 2015 TepigMC: Compacted labels and titles into sprite files; Added 'Advanced (Standard)' head
//                      Added 'Show Helmet Overlay' option; Added texture options
//
////////////////////////////////////////////////////////////////////////////////

/// <reference path="generator.d.ts" />

module Generator {
  /** Help with defining the inputs */
  export function defineTextureInput(texture: string, choices: string[], width: number = 64, height: number = 32) {
    Generator.defineInput(texture, {
      type: 'texture', 
      standardWidth: width, 
      standardHeight: height,
      choices: choices
    });
  };
  
  /**
   * Shortcut for Generator.drawImage() with relative positioning
   * 
   * @param {string} texture The name of the texture
   * @param shape The coordinates and size to get the texture from; transform is optional
   *        syntax: [{texture: {x:#, y:#, w:#, h:#}, page: {x:#, y:#, w:#, h:#}, transform: {}]
   * @param location The coordinates to draw the texture at;
   *        syntax: {x:#, y:#}
   */
  export function drawShape(image: string, shapes: IShape[], offset: IShapeOffset) {
    if (!Generator.hasImage(image)) {
      console.error(`Image ${image} does not exist`);
      return;
    }
    var ix = offset.ix || 0,
        iy = offset.iy || 0,
        ox = offset.ox || 0,
        oy = offset.oy || 0;
    for (var shape of shapes) {
      var offsetIn = {
        x: ix + shape.in.x,
        y: iy + shape.in.y,
        w: shape.in.w,
        h: shape.in.h
      };
      var offsetOut = {
        x: ox + shape.out.x,
        y: oy + shape.out.y,
        w: shape.out.w,
        h: shape.out.h
      };
      if (shape.transform != null) {
        Generator.drawImage(image, offsetIn, offsetOut, shape.transform);
      }
      else {
        Generator.drawImage(image, offsetIn, offsetOut);
      }
    }
  };

  export function drawShapesLayered(position: IPosition, layers: ILayer[]) {
    for (var layer of layers) {
      var dataLocation;
      if (layer.offset != null) {
        dataLocation = {
          x: layer.offset.x + position.x,
          y: layer.offset.y + position.y
        };
      }
      else {
        dataLocation = location;
      }
      Generator.drawShape(layer.image, layer.shape, dataLocation);
    }
  }

  export interface IPosition {
    x: number;
    y: number;
  }

  export interface IShapeOffset {
    ix?: number;
    iy?: number;
    ox?: number;
    oy?: number;
  }

  export interface IShape {
    in: ISelection;
    out: ISelection;
    transform?: ITransform;
  }

  export interface IShapeCollection {
    [name: string]: IShape[];
  }

  export interface ILayer {
    image: string;
    shape: IShape[];
    offset?: IPosition;
  }
}

var images = {
  pig: 'Pig',
  saddleTexture: 'Saddle',
  armorTexture: 'Armor (Layer 1)',
  backgrounds: 'Background Sprite',
  folds: 'Fold Sprite',
  labels: 'Label Sprite',
  titles: 'Title Sprite'
};

var backgroundSprites = {
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


var shapes: Generator.IShapeCollection = {
  headAdvanced: [
    {in: {x:0,  y:8,  w:8, h:2}, out: {x:0,   y:64,  w:64, h:16}}, // Right 1
    {in: {x:2,  y:10, w:6, h:6}, out: {x:16,  y:80,  w:48, h:48}}, // Right 2
    {in: {x:8,  y:8,  w:8, h:8}, out: {x:64,  y:64,  w:64, h:64}}, // Face
    {in: {x:16, y:8,  w:8, h:2}, out: {x:128, y:64,  w:64, h:16}}, // Left 1
    {in: {x:16, y:10, w:6, h:6}, out: {x:128, y:80,  w:48, h:48}}, // Left 2
    {in: {x:8,  y:0,  w:8, h:8}, out: {x:64,  y:0,   w:64, h:64}}, // Top
    {in: {x:16, y:0,  w:8, h:6}, out: {x:64,  y:128, w:64, h:48}}, // Bottom
    {in: {x:24, y:8,  w:8, h:2}, out: {x:192, y:64,  w:64, h:16}}, // Back 1
    {in: {x:24, y:10, w:8, h:6}, out: {x:176, y:80,  w:64, h:48}}, // Back 2
    {in: {x:24, y:10, w:8, h:2}, out: {x:0,   y:144, w:64, h:16}, transform: {rotate:270}} // Back 3
  ],
  headStandardAdvanced: [
    {in: {x:0,  y:8,  w:8, h:2}, out: {x:0,   y:64,  w:64, h:16}}, // Right 1
    {in: {x:2,  y:10, w:6, h:6}, out: {x:16,  y:80,  w:48, h:48}}, // Right 2
    {in: {x:8,  y:8,  w:8, h:8}, out: {x:64,  y:64,  w:64, h:64}}, // Face
    {in: {x:16, y:8,  w:8, h:2}, out: {x:128, y:64,  w:64, h:16}}, // Left 1
    {in: {x:16, y:10, w:6, h:6}, out: {x:128, y:80,  w:48, h:48}}, // Left 2
    {in: {x:8,  y:0,  w:8, h:8}, out: {x:64,  y:0,   w:64, h:64}}, // Top
    {in: {x:16, y:0,  w:8, h:6}, out: {x:64,  y:128, w:64, h:48}}, // Bottom
    {in: {x:24, y:8,  w:8, h:2}, out: {x:192, y:64,  w:64, h:16}}  // Back 1
  ],
  headSimple: [
    {in: {x:0,  y:8, w:8, h:8}, out: {x:0,   y:64,  w:64, h:64}}, // Right
    {in: {x:8,  y:8, w:8, h:8}, out: {x:64,  y:64,  w:64, h:64}}, // Face
    {in: {x:16, y:8, w:8, h:8}, out: {x:128, y:64,  w:64, h:64}}, // Left
    {in: {x:24, y:8, w:8, h:8}, out: {x:256, y:64,  w:64, h:64}}, // Back
    {in: {x:8,  y:0, w:8, h:8}, out: {x:64,  y:0,   w:64, h:64}}, // Top
    {in: {x:16, y:0, w:8, h:8}, out: {x:64,  y:128, w:64, h:64}}  // Bottom
  ],
  nose3D: [
    {in: {x:16, y:17, w:1, h:3}, out: {x:16, y:32, w:8,  h:24}}, // Right
    {in: {x:17, y:17, w:4, h:3}, out: {x:24, y:32, w:32, h:24}}, // Center
    {in: {x:21, y:17, w:1, h:3}, out: {x:56, y:32, w:8,  h:24}}, // Left
    {in: {x:10, y:12, w:4, h:3}, out: {x:24, y:0,  w:32, h:24}, transform: {rotate:'vertical'}}, // Back
    {in: {x:17, y:16, w:4, h:1}, out: {x:24, y:24, w:32, h:8}}, // Top
    {in: {x:21, y:16, w:4, h:1}, out: {x:24, y:56, w:32, h:8}}  // Bottom
  ],
  noseFlat: [
    {in: {x:17, y:17, w:4, h:3}, out: {x:80, y:96,  w:32, h:24}},
  ],
  body: [
    {in: {x:28, y:16, w:8,  h:16}, out: {x:0,   y:88,  w:64, h:128}}, // Right
    {in: {x:36, y:16, w:10, h:16}, out: {x:64,  y:88,  w:80, h:128}}, // Bottom
    {in: {x:46, y:16, w:8,  h:16}, out: {x:144, y:88,  w:64, h:128}}, // Left
    {in: {x:54, y:16, w:10, h:16}, out: {x:208, y:88,  w:80, h:128}}, // Top
    {in: {x:36, y:8,  w:10, h:8},  out: {x:64,  y:24,  w:80, h:64}}, // Front
    {in: {x:46, y:8,  w:10, h:8},  out: {x:64,  y:216, w:80, h:64}, transform: {flip:'vertical'}} // Back
  ],
  leg: [
    {in: {x:0,  y:20, w:4, h:6}, out: {x:0,  y:56,  w:32, h:48}}, // Right
    {in: {x:4,  y:20, w:4, h:6}, out: {x:32, y:56,  w:32, h:48}}, // Front
    {in: {x:8,  y:20, w:4, h:6}, out: {x:64, y:56,  w:32, h:48}}, // Left
    {in: {x:12, y:20, w:4, h:6}, out: {x:96, y:56,  w:32, h:48}}, // Back
    {in: {x:4,  y:16, w:4, h:4}, out: {x:32, y:24,  w:32, h:32}}, // Top
    {in: {x:8,  y:16, w:4, h:4}, out: {x:32, y:104, w:32, h:32}}  // Bottom
  ],
  saddle: [
    // Top
    {in: {x:41, y:16, w:5,  h:16}, out: {x:0,   y:0,w:40, h:128}}, // Bottom Left
    {in: {x:46, y:16, w:8,  h:16}, out: {x:40,  y:0,w:64, h:128}}, // Left
    {in: {x:54, y:16, w:10, h:16}, out: {x:104, y:0,w:80, h:128}}, // Top
    {in: {x:28, y:16, w:8,  h:16}, out: {x:184, y:0,w:64, h:128}}, // Right
    {in: {x:41, y:16, w:5,  h:16}, out: {x:248, y:0,w:40, h:128}},  // Bottom Right
    // Bottom
    {in: {x:41, y:16, w:5,  h:16}, out: {x:0,   y:128, w:40, h:128}, transform: {flip:'vertical'}}, // Bottom Left
    {in: {x:46, y:16, w:8,  h:16}, out: {x:40,  y:128, w:64, h:128}, transform: {flip:'vertical'}}, // Left
    {in: {x:54, y:16, w:10, h:16}, out: {x:104, y:128, w:80, h:128}, transform: {flip:'vertical'}}, // Top
    {in: {x:28, y:16, w:8,  h:16}, out: {x:184, y:128, w:64, h:128}, transform: {flip:'vertical'}}, // Right
    {in: {x:41, y:16, w:5,  h:16}, out: {x:248, y:128, w:40, h:128}, transform: {flip:'vertical'}}  // Bottom Right
  ],
  helmetSeperate: [
    {in: {x:0,  y:8,  w:8, h:3}, out: {x:0,   y:64, w:64, h:24}}, // Right 1
    {in: {x:2,  y:11, w:6, h:5}, out: {x:16,  y:88, w:48, h:40}}, // Right 2
    {in: {x:8,  y:8,  w:8, h:8}, out: {x:64,  y:64, w:64, h:64}}, // Face
    {in: {x:16, y:8,  w:8, h:3}, out: {x:128, y:64, w:64, h:24}}, // Left 1
    {in: {x:16, y:11, w:6, h:5}, out: {x:128, y:88, w:48, h:40}}, // Left 2
    {in: {x:24, y:8,  w:8, h:3}, out: {x:192, y:64, w:64, h:24}}, // Back
    {in: {x:8,  y:0,  w:8, h:8}, out: {x:64,  y:0,  w:64, h:64}}  // Top
  ],
  boot: [
    {in: {x:0,  y:26, w:4, h:6}, out: {x:0,  y:0,  w:32, h:48}}, // Right
    {in: {x:4,  y:26, w:4, h:6}, out: {x:32, y:0,  w:32, h:48}}, // Front
    {in: {x:8,  y:26, w:4, h:6}, out: {x:64, y:0,  w:32, h:48}}, // Left
    {in: {x:12, y:26, w:4, h:6}, out: {x:96, y:0,  w:32, h:48}}, // Back
    {in: {x:8,  y:16, w:4, h:4}, out: {x:32, y:48, w:32, h:32}}  // Bottom
  ],
  ultraMiniBody: [
    {in: {x:46, y:16, w:8,  h:16}, out: {x:0,  y:8, w:8, h:12}, transform: {flip:'vertical'}}, // Right
    {in: {x:36, y:16, w:10, h:16}, out: {x:24, y:8, w:8, h:12}, transform: {flip:'vertical'}}, // Top
    {in: {x:28, y:16, w:8,  h:16}, out: {x:16, y:8, w:8, h:12}, transform: {flip:'vertical'}}, // Left
    {in: {x:54, y:16, w:10, h:16}, out: {x:8,  y:8, w:8, h:12}, transform: {flip:'vertical'}}  // Bottom
  ],
  ultraMiniLegs: [
    {in: {x:8,  y:16, w:4,  h:4}, out: {x:24, y:8,  w:3, h:3}}, // Foot 4
    {in: {x:8,  y:16, w:4,  h:4}, out: {x:29, y:8,  w:3, h:3}}, // Foot 3
    {in: {x:8,  y:16, w:4,  h:4}, out: {x:24, y:16, w:3, h:3}}, // Foot 2
    {in: {x:8,  y:16, w:4,  h:4}, out: {x:29, y:16, w:3, h:3}}  // Foot 1
  ],
  ultraMiniEnds: [
    {in: {x:8,  y:8,  w:8,  h:8}, out: {x:8,  y:20, w:8, h:8}}, // Face
    {in: {x:17, y:17, w:4,  h:3}, out: {x:10, y:24, w:4, h:3}}, // Nose
    {in: {x:46, y:8,  w:10, h:8}, out: {x:8,  y:0,  w:8, h:8}, transform: {flip:'vertical'}} // Back
  ],
  ultraMiniHelmet: [
    //{in: {x:8,  y:8,  w:8, h:8}, out: {x:8,  y:20, w:8, h:8}}, // Full Helmet
    //{in: {x:8,  y:0,  w:8, h:2}, out: {x:8,  y:18, w:8, h:2}}, // Top
    {in: {x:8,  y:8,  w:8, h:3}, out: {x:8,  y:20, w:8, h:3}}, // Front 1
    {in: {x:10, y:11, w:4, h:1}, out: {x:10, y:23, w:4, h:1}}  // Front 2
  ]
}


// Define user inputs
Generator.defineTextureInput(images['pig'], [
  'Pig (Vanilla)', 'Pig (Faithful)', 'Pig (Space Pig)', 'Tepig (by Audra)', 'Tepig (by Elpis)'
]);
Generator.defineTextureInput(images['saddle'], [
  'Saddle (Vanilla)', 'Saddle (Faithful)', 'Saddle (Space Pig)'
]);
Generator.defineTextureInput(images['armor'], [
  'Diamond Armor (Vanilla)', 'Gold Armor (Vanilla)', 'Chainmail Armor (Vanilla)', 'Iron Armor (Vanilla)',
  'Diamond Armor (Faithful)', 'Gold Armor (Faithful)', 'Chainmail Armor (Faithful)', 'Iron Armor (Faithful)',
  'Armor (Space Pig)'
]);

Generator.drawShapesLayered({x: 0, y: 0}, [
  {image: images['pig'], shape: shapes['body']}
]);
