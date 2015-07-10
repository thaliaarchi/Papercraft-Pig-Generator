/// <reference path="generator.d.ts" />

/**
 * An extended generator simplified generation tools
 * @author TepigMC http://pixelpapercraft.com/user/tepigmc
 */
module ExtendedGenerator {
  export var images: IImageCollection = {};
  export var components: IComponentCollection = {};

  export function defineImages(images: IImageCollection) {
    ExtendedGenerator.images = images;
  }

  export function defineComponents(components: IComponentCollection) {
    ExtendedGenerator.components = components;
  }

  /** Shortcut for defining an input */
  export function defineInput(type: string, texture: string, choices: string[] = undefined, width: number = 64, height: number = 32) {
    Generator.defineInput(images[texture], {
      type: type, 
      standardWidth: width, 
      standardHeight: height,
      choices: choices
    });
  };

  /** Shortcut for Generator.drawImage() with relative positioning */
  export function drawComponent(imageName: string, componentName: string, offset: IComponentOffset) {
    var image = images[imageName],
        component = components[componentName];
    if (!Generator.hasImage(image)) {
      console.error(`Image ${image} does not exist`);
      return;
    }
    var ix = offset.ix || 0,
        iy = offset.iy || 0,
        ox = offset.ox || 0,
        oy = offset.oy || 0;
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

  export interface IImageCollection {
    [name: string]: string;
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
