/**
 * Shortcut for Generator.drawImage() with relative positioning
 * 
 * @param {string} texture The name of the texture
 * @param shape The coordinates and size to get the texture from; transform is optional
 *        syntax: [{texture: {x:#, y:#, w:#, h:#}, page: {x:#, y:#, w:#, h:#}, transform: {}]
 * @param location The coordinates to draw the texture at;
 *        syntax: {x:#, y:#}
 */
Generator.drawShape = function(texture, shape, location) {
  if (!Generator.hasImage(texture)) {
    new TypeError("texture does not exist");
    teturn;
  }
  if (shape.constructor !== Array) {
    if (shape.constructor === Object) {
      shape = [shape];
    }
    else {
      new TypeError("shape is not an array or object");
      return;
    }
  }
  if (!("x" in location && "y" in location)) {
    new TypeError("location does not contain coordinates");
    return;
  }
  var x = location.x;
  var y = location.y;
  var tx = ("tx" in location ? location.tx : 0);
  var ty = ("ty" in location ? location.ty : 0);
  var i;
  for (i in shape) {
    if (!("texture" in shape[i] && "page" in shape[i])) {
      console.warn(JSON.stringify(shape) + " is missing texture or shape");
      continue;
    }
    var textureObject = {
      x:tx+shape[i].texture.x,
      y:ty+shape[i].texture.y,
      w:shape[i].texture.w,
      h:shape[i].texture.h
    };
    var pageObject = {
      x:x+shape[i].page.x,
      y:y+shape[i].page.y,
      w:shape[i].page.w,
      h:shape[i].page.h
    };
    if ("transform" in shape[i]) {
      Generator.drawImage(texture, textureObject, pageObject, shape[i].transform);
    }
    else {
      Generator.drawImage(texture, textureObject, pageObject);
    }
  }
};

Generator.drawComponent = function(texture, shape, backgrounds, labels, folds, location) {
  if (backgrounds !== null) {
    Generator.drawShape(backgroundSprite, backgrounds, location);
  }
  if (shape !== null) {
    Generator.drawShape(texture, shape, location);
  }
  if (labels !== null) {
    Generator.drawShape(labelSprite, labels, location);
  }
  if (folds !== null) {
    Generator.drawShape(foldSprite, folds, location);
  }
};