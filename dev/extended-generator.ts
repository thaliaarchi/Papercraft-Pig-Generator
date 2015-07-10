/// <reference path="generator.d.ts" />

/**
 * An extended generator simplified generation tools
 * @author TepigMC http://pixelpapercraft.com/user/tepigmc
 */
module ExtendedGenerator {
  module definitions {
    export var images: IImageCollection = {};
    export var components: IComponentCollection = {};
    export var sprites: ISpriteCollection = {};
  }

  export function defineImages(images: IImageCollection): void {
    definitions.images = images;
  }
  export function defineImage(name: string, image: string): void {
    definitions.images[name] = image;
  }
  export function defineComponents(components: IComponentCollection): void {
    definitions.components = components;
  }
  export function defineComponent(name: string, component: IComponent): void {
    definitions.components[name] = component;
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
  export function getComponents(): IComponentCollection {
    return definitions.components;
  }
  export function getComponent(name: string): IComponent {
    return definitions.components[name];
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

  export function drawComponentsLayered(position: IPosition, layers: ILayer[]) {
    for (var layer of layers) {
      var offsetLocation;
      if (layer.offset != null) {
        offsetLocation = {
          x: layer.offset.x + position.x,
          y: layer.offset.y + position.y
        };
      }
      else {
        offsetLocation = location;
      }
      drawComponent(layer.image, layer.shape, offsetLocation);
    }
  }

  export function drawComponent(imageName: string, componentName: string, offset?: IComponentOffset) {
    var image = definitions.images[imageName],
        component = definitions.components[componentName];
    if (!Generator.hasImage(image)) {
      console.error(`Image ${image} does not exist`);
      return;
    }
    if (offset != null) {
      var ix = offset.ix || 0, iy = offset.iy || 0,
          ox = offset.ox || 0, oy = offset.oy || 0;
      for (var shape of component) {
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
        Generator.drawImage(image, offsetIn, offsetOut, shape.transform || {});
      }
    }
    else {
      for (var shape of component) {
        drawShape(image, shape);
      }
    }
  }

  export function drawShape(image: string, shape: IShape) {
    Generator.drawImage(image, shape.in, shape.out, shape.transform || {});
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

  export interface IComponentCollection {
    [name: string]: IComponent;
  }

  export interface IComponent extends Array<IShape> { }

  export interface IComponentOffset {
    ix?: number;
    iy?: number;
    ox?: number;
    oy?: number;
  }

  export interface IShape {
    in: Generator.ISelection;
    out: Generator.ISelection;
    transform?: Generator.ITransform;
  }

  export interface IPosition {
    x: number;
    y: number;
  }

  export interface ILayer {
    image: string;
    shape: string;
    offset?: IPosition;
  }
}
