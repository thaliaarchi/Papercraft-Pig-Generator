var textures = {
  headAdvanced: [
    {texture: {x:0,  y:8,  w:8, h:2}, draw: {x:0,   y:64,  w:64, h:16}}, // Right 1
    {texture: {x:2,  y:10, w:6, h:6}, draw: {x:16,  y:80,  w:48, h:48}}, // Right 2
    {texture: {x:8,  y:8,  w:8, h:8}, draw: {x:64,  y:64,  w:64, h:64}}, // Face
    {texture: {x:16, y:8,  w:8, h:2}, draw: {x:128, y:64,  w:64, h:16}}, // Left 1
    {texture: {x:16, y:10, w:6, h:6}, draw: {x:128, y:80,  w:48, h:48}}, // Left 2
    {texture: {x:8,  y:0,  w:8, h:8}, draw: {x:64,  y:0,   w:64, h:64}}, // Top
    {texture: {x:16, y:0,  w:8, h:6}, draw: {x:64,  y:128, w:64, h:48}}, // Bottom
    {texture: {x:24, y:8,  w:8, h:2}, draw: {x:192, y:64,  w:64, h:16}}, // Back 1
    {texture: {x:24, y:10, w:8, h:6}, draw: {x:176, y:80,  w:64, h:48}}, // Back 2
    {texture: {x:24, y:10, w:8, h:2}, draw: {x:0,   y:144, w:64, h:16}, transform: {rotate:270}} // Back 3
  ],
  headStandardAdvanced: [
    {texture: {x:0,  y:8,  w:8, h:2}, draw: {x:0,   y:64,  w:64, h:16}}, // Right 1
    {texture: {x:2,  y:10, w:6, h:6}, draw: {x:16,  y:80,  w:48, h:48}}, // Right 2
    {texture: {x:8,  y:8,  w:8, h:8}, draw: {x:64,  y:64,  w:64, h:64}}, // Face
    {texture: {x:16, y:8,  w:8, h:2}, draw: {x:128, y:64,  w:64, h:16}}, // Left 1
    {texture: {x:16, y:10, w:6, h:6}, draw: {x:128, y:80,  w:48, h:48}}, // Left 2
    {texture: {x:8,  y:0,  w:8, h:8}, draw: {x:64,  y:0,   w:64, h:64}}, // Top
    {texture: {x:16, y:0,  w:8, h:6}, draw: {x:64,  y:128, w:64, h:48}}, // Bottom
    {texture: {x:24, y:8,  w:8, h:2}, draw: {x:192, y:64,  w:64, h:16}}  // Back 1
  ],
  headSimple: [
    {texture: {x:0,  y:8, w:8, h:8}, draw: {x:0,   y:64,  w:64, h:64}}, // Right
    {texture: {x:8,  y:8, w:8, h:8}, draw: {x:64,  y:64,  w:64, h:64}}, // Face
    {texture: {x:16, y:8, w:8, h:8}, draw: {x:128, y:64,  w:64, h:64}}, // Left
    {texture: {x:24, y:8, w:8, h:8}, draw: {x:256, y:64,  w:64, h:64}}, // Back
    {texture: {x:8,  y:0, w:8, h:8}, draw: {x:64,  y:0,   w:64, h:64}}, // Top
    {texture: {x:16, y:0, w:8, h:8}, draw: {x:64,  y:128, w:64, h:64}}  // Bottom
  ],
  nose3D: [
    {texture: {x:16, y:17, w:1, h:3}, draw: {x:16, y:32, w:8,  h:24}}, // Right
    {texture: {x:17, y:17, w:4, h:3}, draw: {x:24, y:32, w:32, h:24}}, // Center
    {texture: {x:21, y:17, w:1, h:3}, draw: {x:56, y:32, w:8,  h:24}}, // Left
    {texture: {x:10, y:12, w:4, h:3}, draw: {x:24, y:0,  w:32, h:24}, transform: {rotate:"vertical"}}, // Back
    {texture: {x:17, y:16, w:4, h:1}, draw: {x:24, y:24, w:32, h:8}}, // Top
    {texture: {x:21, y:16, w:4, h:1}, draw: {x:24, y:56, w:32, h:8}}  // Bottom
  ],
  noseFlat: [
    {texture: {x:17, y:17, w:4, h:3}, draw: {x:80, y:96,  w:32, h:24}},
  ],
  body: [
    {texture: {x:28, y:16, w:8,  h:16}, draw: {x:0,   y:88,  w:64, h:128}}, // Right
    {texture: {x:36, y:16, w:10, h:16}, draw: {x:64,  y:88,  w:80, h:128}}, // Bottom
    {texture: {x:46, y:16, w:8,  h:16}, draw: {x:144, y:88,  w:64, h:128}}, // Left
    {texture: {x:54, y:16, w:10, h:16}, draw: {x:208, y:88,  w:80, h:128}}, // Top
    {texture: {x:36, y:8,  w:10, h:8},  draw: {x:64,  y:24,  w:80, h:64}}, // Front
    {texture: {x:46, y:8,  w:10, h:8},  draw: {x:64,  y:216, w:80, h:64}, transform: {flip:"vertical"}} // Back
  ],
  leg: [
    {texture: {x:0,  y:20, w:4, h:6}, draw: {x:0,  y:56,  w:32, h:48}}, // Right
    {texture: {x:4,  y:20, w:4, h:6}, draw: {x:32, y:56,  w:32, h:48}}, // Front
    {texture: {x:8,  y:20, w:4, h:6}, draw: {x:64, y:56,  w:32, h:48}}, // Left
    {texture: {x:12, y:20, w:4, h:6}, draw: {x:96, y:56,  w:32, h:48}}, // Back
    {texture: {x:4,  y:16, w:4, h:4}, draw: {x:32, y:24,  w:32, h:32}}, // Top
    {texture: {x:8,  y:16, w:4, h:4}, draw: {x:32, y:104, w:32, h:32}}  // Bottom
  ],
  saddle: [
    // Top
    {texture: {x:41, y:16, w:5,  h:16}, draw: {x:0,   y:0,w:40, h:128}}, // Bottom Left
    {texture: {x:46, y:16, w:8,  h:16}, draw: {x:40,  y:0,w:64, h:128}}, // Left
    {texture: {x:54, y:16, w:10, h:16}, draw: {x:104, y:0,w:80, h:128}}, // Top
    {texture: {x:28, y:16, w:8,  h:16}, draw: {x:184, y:0,w:64, h:128}}, // Right
    {texture: {x:41, y:16, w:5,  h:16}, draw: {x:248, y:0,w:40, h:128}},  // Bottom Right
    // Bottom
    {texture: {x:41, y:16, w:5,  h:16}, draw: {x:0,   y:128, w:40, h:128}, transform: {flip:"vertical"}}, // Bottom Left
    {texture: {x:46, y:16, w:8,  h:16}, draw: {x:40,  y:128, w:64, h:128}, transform: {flip:"vertical"}}, // Left
    {texture: {x:54, y:16, w:10, h:16}, draw: {x:104, y:128, w:80, h:128}, transform: {flip:"vertical"}}, // Top
    {texture: {x:28, y:16, w:8,  h:16}, draw: {x:184, y:128, w:64, h:128}, transform: {flip:"vertical"}}, // Right
    {texture: {x:41, y:16, w:5,  h:16}, draw: {x:248, y:128, w:40, h:128}, transform: {flip:"vertical"}}  // Bottom Right
  ],
  helmetSeperate: [
    {texture: {x:0,  y:8,  w:8, h:3}, draw: {x:0,   y:64, w:64, h:24}}, // Right 1
    {texture: {x:2,  y:11, w:6, h:5}, draw: {x:16,  y:88, w:48, h:40}}, // Right 2
    {texture: {x:8,  y:8,  w:8, h:8}, draw: {x:64,  y:64, w:64, h:64}}, // Face
    {texture: {x:16, y:8,  w:8, h:3}, draw: {x:128, y:64, w:64, h:24}}, // Left 1
    {texture: {x:16, y:11, w:6, h:5}, draw: {x:128, y:88, w:48, h:40}}, // Left 2
    {texture: {x:24, y:8,  w:8, h:3}, draw: {x:192, y:64, w:64, h:24}}, // Back
    {texture: {x:8,  y:0,  w:8, h:8}, draw: {x:64,  y:0,  w:64, h:64}}  // Top
  ],
  boot: [
    {texture: {x:0,  y:26, w:4, h:6}, draw: {x:0,  y:0,  w:32, h:48}}, // Right
    {texture: {x:4,  y:26, w:4, h:6}, draw: {x:32, y:0,  w:32, h:48}}, // Front
    {texture: {x:8,  y:26, w:4, h:6}, draw: {x:64, y:0,  w:32, h:48}}, // Left
    {texture: {x:12, y:26, w:4, h:6}, draw: {x:96, y:0,  w:32, h:48}}, // Back
    {texture: {x:8,  y:16, w:4, h:4}, draw: {x:32, y:48, w:32, h:32}}  // Bottom
  ],
  ultraMiniBody: [
    {texture: {x:46, y:16, w:8,  h:16}, draw: {x:0,  y:8, w:8, h:12}, transform: {flip:"vertical"}}, // Right
    {texture: {x:36, y:16, w:10, h:16}, draw: {x:24, y:8, w:8, h:12}, transform: {flip:"vertical"}}, // Top
    {texture: {x:28, y:16, w:8,  h:16}, draw: {x:16, y:8, w:8, h:12}, transform: {flip:"vertical"}}, // Left
    {texture: {x:54, y:16, w:10, h:16}, draw: {x:8,  y:8, w:8, h:12}, transform: {flip:"vertical"}}  // Bottom
  ],
  ultraMiniLegs: [
    {texture: {x:8,  y:16, w:4,  h:4}, draw: {x:24, y:8,  w:3, h:3}}, // Foot 4
    {texture: {x:8,  y:16, w:4,  h:4}, draw: {x:29, y:8,  w:3, h:3}}, // Foot 3
    {texture: {x:8,  y:16, w:4,  h:4}, draw: {x:24, y:16, w:3, h:3}}, // Foot 2
    {texture: {x:8,  y:16, w:4,  h:4}, draw: {x:29, y:16, w:3, h:3}}  // Foot 1
  ],
  ultraMiniEnds: [
    {texture: {x:8,  y:8,  w:8,  h:8}, draw: {x:8,  y:20, w:8, h:8}}, // Face
    {texture: {x:17, y:17, w:4,  h:3}, draw: {x:10, y:24, w:4, h:3}}, // Nose
    {texture: {x:46, y:8,  w:10, h:8}, draw: {x:8,  y:0,  w:8, h:8}, transform: {flip:"vertical"}} // Back
  ],
  ultraMiniHelmet: [
    //{texture: {x:8,  y:8,  w:8, h:8}, draw: {x:8,  y:20, w:8, h:8}}, // Full Helmet
    //{texture: {x:8,  y:0,  w:8, h:2}, draw: {x:8,  y:18, w:8, h:2}}, // Top
    {texture: {x:8,  y:8,  w:8, h:3}, draw: {x:8,  y:20, w:8, h:3}}, // Front 1
    {texture: {x:10, y:11, w:4, h:1}, draw: {x:10, y:23, w:4, h:1}}  // Front 2
  ]
}