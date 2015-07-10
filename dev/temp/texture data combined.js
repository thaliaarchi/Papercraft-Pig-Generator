var shapes = {
  headAdvanced: {
    texture: [
      {source: {x:0,  y:8,  w:8, h:2}, draw: {x:0,   y:64,  w:64, h:16}}, // Right 1
      {source: {x:2,  y:10, w:6, h:6}, draw: {x:16,  y:80,  w:48, h:48}}, // Right 2
      {source: {x:8,  y:8,  w:8, h:8}, draw: {x:64,  y:64,  w:64, h:64}}, // Face
      {source: {x:16, y:8,  w:8, h:2}, draw: {x:128, y:64,  w:64, h:16}}, // Left 1
      {source: {x:16, y:10, w:6, h:6}, draw: {x:128, y:80,  w:48, h:48}}, // Left 2
      {source: {x:8,  y:0,  w:8, h:8}, draw: {x:64,  y:0,   w:64, h:64}}, // Top
      {source: {x:16, y:0,  w:8, h:6}, draw: {x:64,  y:128, w:64, h:48}}, // Bottom
      {source: {x:24, y:8,  w:8, h:2}, draw: {x:192, y:64,  w:64, h:16}}, // Back 1
      {source: {x:24, y:10, w:8, h:6}, draw: {x:176, y:80,  w:64, h:48}}, // Back 2
      {source: {x:24, y:10, w:8, h:2}, draw: {x:0,   y:144, w:64, h:16}, transform: {rotate:270}} // Back 3
    ],
    label: [
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}},
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}
    ],
    background: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    fold: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    title: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}]
  },
  headStandardAdvanced: {
    texture: [
      {source: {x:0,  y:8,  w:8, h:2}, draw: {x:0,   y:64,  w:64, h:16}}, // Right 1
      {source: {x:2,  y:10, w:6, h:6}, draw: {x:16,  y:80,  w:48, h:48}}, // Right 2
      {source: {x:8,  y:8,  w:8, h:8}, draw: {x:64,  y:64,  w:64, h:64}}, // Face
      {source: {x:16, y:8,  w:8, h:2}, draw: {x:128, y:64,  w:64, h:16}}, // Left 1
      {source: {x:16, y:10, w:6, h:6}, draw: {x:128, y:80,  w:48, h:48}}, // Left 2
      {source: {x:8,  y:0,  w:8, h:8}, draw: {x:64,  y:0,   w:64, h:64}}, // Top
      {source: {x:16, y:0,  w:8, h:6}, draw: {x:64,  y:128, w:64, h:48}}, // Bottom
      {source: {x:24, y:8,  w:8, h:2}, draw: {x:192, y:64,  w:64, h:16}}  // Back 1
    ],
    label: [
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}},
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}
    ],
    background: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    fold: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    title: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}]
  },
  headSimple: {
    texture: [
      {source: {x:0,  y:8, w:8, h:8}, draw: {x:0,   y:64,  w:64, h:64}}, // Right
      {source: {x:8,  y:8, w:8, h:8}, draw: {x:64,  y:64,  w:64, h:64}}, // Face
      {source: {x:16, y:8, w:8, h:8}, draw: {x:128, y:64,  w:64, h:64}}, // Left
      {source: {x:24, y:8, w:8, h:8}, draw: {x:256, y:64,  w:64, h:64}}, // Back
      {source: {x:8,  y:0, w:8, h:8}, draw: {x:64,  y:0,   w:64, h:64}}, // Top
      {source: {x:16, y:0, w:8, h:8}, draw: {x:64,  y:128, w:64, h:64}}  // Bottom
    ],
    label: [
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}},
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}
    ],
    background: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    fold: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    title: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}]
  },
  nose3D: {
    texture: [
      {source: {x:16, y:17, w:1, h:3}, draw: {x:16, y:32, w:8,  h:24}}, // Right
      {source: {x:17, y:17, w:4, h:3}, draw: {x:24, y:32, w:32, h:24}}, // Center
      {source: {x:21, y:17, w:1, h:3}, draw: {x:56, y:32, w:8,  h:24}}, // Left
      {source: {x:10, y:12, w:4, h:3}, draw: {x:24, y:0,  w:32, h:24}, transform: {rotate:"vertical"}}, // Back
      {source: {x:17, y:16, w:4, h:1}, draw: {x:24, y:24, w:32, h:8}}, // Top
      {source: {x:21, y:16, w:4, h:1}, draw: {x:24, y:56, w:32, h:8}}  // Bottom
    ],
    label: [
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}},
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}
    ],
    background: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    fold: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    title: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}]
  },
  noseFlat: {
    texture: [{source: {x:17, y:17, w:4, h:3}, draw: {x:80, y:96,  w:32, h:24}}],
    label: [
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}},
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}
    ],
    background: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    fold: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    title: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}]
  },
  body: {
    texture: [
      {source: {x:28, y:16, w:8,  h:16}, draw: {x:0,   y:88,  w:64, h:128}}, // Right
      {source: {x:36, y:16, w:10, h:16}, draw: {x:64,  y:88,  w:80, h:128}}, // Bottom
      {source: {x:46, y:16, w:8,  h:16}, draw: {x:144, y:88,  w:64, h:128}}, // Left
      {source: {x:54, y:16, w:10, h:16}, draw: {x:208, y:88,  w:80, h:128}}, // Top
      {source: {x:36, y:8,  w:10, h:8},  draw: {x:64,  y:24,  w:80, h:64}}, // Front
      {source: {x:46, y:8,  w:10, h:8},  draw: {x:64,  y:216, w:80, h:64}, transform: {flip:"vertical"}} // Back
    ],
    label: [
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}},
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}
    ],
    background: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    fold: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    title: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}]
  },
  leg: {
    texture: [
      {source: {x:0,  y:20, w:4, h:6}, draw: {x:0,  y:56,  w:32, h:48}}, // Right
      {source: {x:4,  y:20, w:4, h:6}, draw: {x:32, y:56,  w:32, h:48}}, // Front
      {source: {x:8,  y:20, w:4, h:6}, draw: {x:64, y:56,  w:32, h:48}}, // Left
      {source: {x:12, y:20, w:4, h:6}, draw: {x:96, y:56,  w:32, h:48}}, // Back
      {source: {x:4,  y:16, w:4, h:4}, draw: {x:32, y:24,  w:32, h:32}}, // Top
      {source: {x:8,  y:16, w:4, h:4}, draw: {x:32, y:104, w:32, h:32}}  // Bottom
    ],
    label: [
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}},
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}
    ],
    background: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    fold: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    title: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}]
  },
  saddle: {
    texture: [
      // Top
      {source: {x:41, y:16, w:5,  h:16}, draw: {x:0,   y:0,w:40, h:128}}, // Bottom Left
      {source: {x:46, y:16, w:8,  h:16}, draw: {x:40,  y:0,w:64, h:128}}, // Left
      {source: {x:54, y:16, w:10, h:16}, draw: {x:104, y:0,w:80, h:128}}, // Top
      {source: {x:28, y:16, w:8,  h:16}, draw: {x:184, y:0,w:64, h:128}}, // Right
      {source: {x:41, y:16, w:5,  h:16}, draw: {x:248, y:0,w:40, h:128}},  // Bottom Right
      // Bottom
      {source: {x:41, y:16, w:5,  h:16}, draw: {x:0,   y:128, w:40, h:128}, transform: {flip:"vertical"}}, // Bottom Left
      {source: {x:46, y:16, w:8,  h:16}, draw: {x:40,  y:128, w:64, h:128}, transform: {flip:"vertical"}}, // Left
      {source: {x:54, y:16, w:10, h:16}, draw: {x:104, y:128, w:80, h:128}, transform: {flip:"vertical"}}, // Top
      {source: {x:28, y:16, w:8,  h:16}, draw: {x:184, y:128, w:64, h:128}, transform: {flip:"vertical"}}, // Right
      {source: {x:41, y:16, w:5,  h:16}, draw: {x:248, y:128, w:40, h:128}, transform: {flip:"vertical"}}  // Bottom Right
    ],
    label: [
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}},
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}
    ],
    background: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    fold: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    title: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}]
  },
  helmetSeperate: {
    texture: [
      {source: {x:0,  y:8,  w:8, h:3}, draw: {x:0,   y:64, w:64, h:24}}, // Right 1
      {source: {x:2,  y:11, w:6, h:5}, draw: {x:16,  y:88, w:48, h:40}}, // Right 2
      {source: {x:8,  y:8,  w:8, h:8}, draw: {x:64,  y:64, w:64, h:64}}, // Face
      {source: {x:16, y:8,  w:8, h:3}, draw: {x:128, y:64, w:64, h:24}}, // Left 1
      {source: {x:16, y:11, w:6, h:5}, draw: {x:128, y:88, w:48, h:40}}, // Left 2
      {source: {x:24, y:8,  w:8, h:3}, draw: {x:192, y:64, w:64, h:24}}, // Back
      {source: {x:8,  y:0,  w:8, h:8}, draw: {x:64,  y:0,  w:64, h:64}}  // Top
    ],
    label: [
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}},
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}
    ],
    background: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    fold: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    title: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}]
  },
  boot: {
    texture: [
      {source: {x:0,  y:26, w:4, h:6}, draw: {x:0,  y:0,  w:32, h:48}}, // Right
      {source: {x:4,  y:26, w:4, h:6}, draw: {x:32, y:0,  w:32, h:48}}, // Front
      {source: {x:8,  y:26, w:4, h:6}, draw: {x:64, y:0,  w:32, h:48}}, // Left
      {source: {x:12, y:26, w:4, h:6}, draw: {x:96, y:0,  w:32, h:48}}, // Back
      {source: {x:8,  y:16, w:4, h:4}, draw: {x:32, y:48, w:32, h:32}}  // Bottom
    ],
    label: [
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}},
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}
    ],
    background: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    fold: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    title: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}]
  },
  ultraMiniBody: {
    texture: [
      {source: {x:46, y:16, w:8,  h:16}, draw: {x:0,  y:8, w:8, h:12}, transform: {flip:"vertical"}}, // Right
      {source: {x:36, y:16, w:10, h:16}, draw: {x:24, y:8, w:8, h:12}, transform: {flip:"vertical"}}, // Top
      {source: {x:28, y:16, w:8,  h:16}, draw: {x:16, y:8, w:8, h:12}, transform: {flip:"vertical"}}, // Left
      {source: {x:54, y:16, w:10, h:16}, draw: {x:8,  y:8, w:8, h:12}, transform: {flip:"vertical"}}  // Bottom
    ],
    label: [
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}},
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}
    ],
    background: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    fold: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    title: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}]
  },
  ultraMiniLegs: {
    texture: [
      {source: {x:8,  y:16, w:4,  h:4}, draw: {x:24, y:8,  w:3, h:3}}, // Foot 4
      {source: {x:8,  y:16, w:4,  h:4}, draw: {x:29, y:8,  w:3, h:3}}, // Foot 3
      {source: {x:8,  y:16, w:4,  h:4}, draw: {x:24, y:16, w:3, h:3}}, // Foot 2
      {source: {x:8,  y:16, w:4,  h:4}, draw: {x:29, y:16, w:3, h:3}}  // Foot 1
    ],
    label: [
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}},
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}
    ],
    background: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    fold: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    title: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}]
  },
  ultraMiniEnds: {
    texture: [
      {source: {x:8,  y:8,  w:8,  h:8}, draw: {x:8,  y:20, w:8, h:8}}, // Face
      {source: {x:17, y:17, w:4,  h:3}, draw: {x:10, y:24, w:4, h:3}}, // Nose
      {source: {x:46, y:8,  w:10, h:8}, draw: {x:8,  y:0,  w:8, h:8}, transform: {flip:"vertical"}} // Back
    ],
    label: [
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}},
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}
    ],
    background: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    fold: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    title: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}]
  },
  ultraMiniHelmet: {
    texture: [
      //{source: {x:8,  y:8,  w:8, h:8}, draw: {x:8,  y:20, w:8, h:8}}, // Full Helmet
      //{source: {x:8,  y:0,  w:8, h:2}, draw: {x:8,  y:18, w:8, h:2}}, // Top
      {source: {x:8,  y:8,  w:8, h:3}, draw: {x:8,  y:20, w:8, h:3}}, // Front 1
      {source: {x:10, y:11, w:4, h:1}, draw: {x:10, y:23, w:4, h:1}}  // Front 2
    ],
    label: [
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}},
      {source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}
    ],
    background: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    fold: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}],
    title: [{source: {x:, y:, w:, h:}, draw: {x:, y:, w:, h:}}]
  }
};