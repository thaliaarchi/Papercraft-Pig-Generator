Generator.drawComponent = function(texture, shape, backgrounds, labels, folds, location) {
  if (backgrounds != null) {
    Generator.drawShape(backgroundSprite, backgrounds, location);
  }
  if (shape != null) {
    Generator.drawShape(texture, shape, location);
  }
  if (labels != null) {
    Generator.drawShape(labelSprite, labels, location);
  }
  if (folds != null) {
    Generator.drawShape(foldSprite, folds, location);
  }
};
