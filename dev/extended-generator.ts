/// <reference path="generator.d.ts" />

/**
 * An extended generator with simplified generation tools
 * @author TepigMC http://pixelpapercraft.com/user/tepigmc
 */
module ExtendedGenerator {
  module definitions {
    export var images: IImageCollection = {};
    export var shapes: IShapeCollection = {};
    export var sprites: ISpriteCollection = {};
  }

  export function defineImages(images: IImageCollection): void {
    definitions.images = images;
  }
  export function defineImage(name: string, image: string): void {
    definitions.images[name] = image;
  }
  export function defineShapes(shapes: IShapeCollection): void {
    definitions.shapes = shapes;
  }
  export function defineShape(name: string, shape: IShape): void {
    definitions.shapes[name] = shape;
  }
  export function defineSprites(sprites: ISpriteCollection): void {
    definitions.sprites = sprites;
  }
  export function defineSprite(name: string, sprite: ISprite): void {
    definitions.sprites[name] = sprite;
  }
  export function getImages(): IImageCollection { return definitions.images; }
  export function getImage(name: string): string { return definitions.images[name]; }
  export function getShapes(): IShapeCollection { return definitions.shapes; }
  export function getShape(name: string): IShape { return definitions.shapes[name]; }
  export function getSprites(): ISpriteCollection { return definitions.sprites; }
  export function getSprite(name: string): ISprite { return definitions.sprites[name]; }

  /**
   * Shortcut for defining an input.
   * When type is 'texture', the standardWidth and standardHeight become 64 and 32 if not set.
   */
  export function defineInput(imageName: string, options: Generator.IInputOptions) {
    if (options.type === 'texture') {
      if (options.standardWidth == null)  { options.standardWidth = 64; }
      if (options.standardHeight == null) { options.standardHeight = 32; }
    }
    Generator.defineInput(getImage(imageName), options);
  }

  export function drawComponents(components: IComponent[], position: IPosition) {
    if (position != null) {
      for (var component of components) {
        if (component.offset == null) {
          component.offset = {};
        }
        drawComponent({
          image: component.image,
          shape: component.shape,
          offset: {
            ix: component.offset.ix || 0,
            iy: component.offset.iy || 0,
            ox: (component.offset.ox || 0) + (position.x || 0),
            oy: (component.offset.oy || 0) + (position.y || 0)
          },
          condition: component.condition
        });
      }
    }
    else {
      for (var component of components) {
        drawComponent(component);
      }
    }
  }

  export function drawComponent(component: IComponent) {
    if (!hasImage(component.image) || component.condition === false) {
      return;
    }
    drawShape(component.image, component.shape, component.offset);
  }

  export function drawShape(imageName: string, name: string, offset: IOffset) {
    if (!hasImage(imageName)) {
      return;
    }
    var shape = getShape(name);
    if (offset != null) {
      var ix = offset.ix || 0, iy = offset.iy || 0,
          ox = offset.ox || 0, oy = offset.oy || 0;
      for (var side of shape) {
        var offsetIn = {
          x: ix + side.in.x,
          y: iy + side.in.y,
          w: side.in.w,
          h: side.in.h
        };
        var offsetOut = {
          x: ox + side.out.x,
          y: oy + side.out.y,
          w: side.out.w,
          h: side.out.h
        };
        drawImage(imageName, offsetIn, offsetOut, side.transform || {});
      }
    }
    else {
      for (var side of shape) {
        drawSide(imageName, side);
      }
    }
  }

  export function drawSide(imageName: string, side: ISide) {
    drawImage(imageName, side.in, side.out, side.transform || {});
  }

  export function drawSprite(imageName: string, spriteName: string, name: string,
      position: Generator.ISelection, transform?: Generator.ITransform) {
    drawSide(imageName, {
      in: getSprite(spriteName)[name],
      out: position,
      transform: transform
    });
  }

  /** Runs Generator.drawImage and also checks if the image exists. */
  export function drawImage(image: string): void;
  export function drawImage(image: string, x: number, y: number): void;
  export function drawImage(image: string, imageSelection: Generator.ISelection,
      drawSelection: Generator.ISelection, transform?: Generator.ITransform): void;
  export function drawImage(name: string, ...args: any[]) {
    if (!hasImage(name)) {
      return;
    }
    Generator.drawImage.apply(Generator.drawImage, [getImage(name)].concat(args));
  }

  /** Checks if the image exists and logs if it doesn't. */
  export function hasImage(name: string): boolean {
    var image = getImage(name);
    if (!Generator.hasImage(image)) {
      console.error(`Image ${image} does not exist.`);
      return false;
    }
    return true;
  }

  export interface IImageCollection {
    [name: string]: string;
  }

  export interface ISpriteCollection {
    [name: string]: ISprite;
  }

  export interface ISprite {
    [name: string]: Generator.ISelection;
  }

  export interface IComponent {
    image: string;
    shape: string;
    offset?: IOffset;
    condition?: boolean;
  }

  export interface IShapeCollection {
    [name: string]: IShape;
  }

  export interface IShape extends Array<ISide> { }

  export interface IOffset {
    ix?: number;
    iy?: number;
    ox?: number;
    oy?: number;
  }

  export interface ISide {
    in: Generator.ISelection;
    out: Generator.ISelection;
    transform?: Generator.ITransform;
  }

  export interface IPosition {
    x: number;
    y: number;
  }
}
