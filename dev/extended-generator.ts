/// <reference path="generator.d.ts" />

/**
 * An extended generator simplified generation tools
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
  export function defineComponents(shapes: IShapeCollection): void {
    definitions.shapes = shapes;
  }
  export function defineComponent(name: string, shape: IShape): void {
    definitions.shapes[name] = shape;
  }
  export function defineSprites(sprites: ISpriteCollection): void {
    definitions.sprites = sprites;
  }
  export function defineSprite(name: string, sprite: ISprite): void {
    definitions.sprites[name] = sprite;
  }
  export function getImages(): IImageCollection {
    return definitions.images;
  }
  export function getImage(name: string): string {
    return definitions.images[name];
  }
  export function getComponents(): IShapeCollection {
    return definitions.shapes;
  }
  export function getComponent(name: string): IShape {
    return definitions.shapes[name];
  }
  export function getSprites(): ISpriteCollection {
    return definitions.sprites;
  }
  export function getSprite(name: string): ISprite {
    return definitions.sprites[name];
  }

  /** Shortcut for defining an input */
  export function defineInput(type: string, texture: string, choices: string[] = undefined, width: number = 64, height: number = 32) {
    Generator.defineInput(definitions.images[texture], {
      type: type, 
      standardWidth: width, 
      standardHeight: height,
      choices: choices
    });
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
    if (component.condition === false) {
      return;
    }
    var image = definitions.images[component.image];
    if (!Generator.hasImage(image)) {
      console.error(`Image ${image} does not exist. drawComponent(${JSON.stringify(component)})`);
      return;
    }
    if (component.shape != null) {
      drawShape(image, component.shape, component.offset);
    }
  }

  export function drawShape(image: string, name: string, offset: IOffset) {
    var shape = definitions.shapes[name];
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
        Generator.drawImage(image, offsetIn, offsetOut, side.transform || {});
      }
    }
    else {
      for (var side of shape) {
        drawSide(image, side);
      }
    }
  }

  export function drawSide(image: string, side: ISide) {
    Generator.drawImage(image, side.in, side.out, side.transform || {});
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
