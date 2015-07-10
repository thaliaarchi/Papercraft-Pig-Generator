/**
 * The Pixel Papercraft generator module.
 * http://pixelpapercraft.com/generator-builder
 */
declare module Generator {
  export function defineInput(name: string, type: IInputType): void;
  export function hasImage(image: string): boolean;
  export function drawImage(image: string): void;
  export function drawImage(image: string, x: number, y: number): void;
  export function drawImage(image: string, imageSelection: ISelection, drawSelection: ISelection, transform?: ITransform): void;
  export function drawText(text: string): void;
  export function drawText(text: string, x: number, y: number, style?: ITextStyle): void;
  export function usePage(name?: string): void;
  /** Possible options: 'solidColorIsTransparent'. */
  export function setImageOption(image: string, option: string, value: boolean): void;
  export function getVariable(name: string): boolean | number | string;
  /**
   * This will create two variables that will show up as a check box options when you run your generator script.
   * The first argument is the name of the variable.
   * The second argument is the inital value of the variable. It must be either true or false
   */
  export function defineBooleanVariable(name: string, initialValue: string): boolean;
  /**
   * This will create two variables that will appear as sliders on most browsers (in older browsers it will be an input box).
   * The first argument is the name of the variable.
   * The second argument defines the range of values:
   *   min - The first number in the range
   *   max - The last number in the range
   *   value - The initial value
   *   step - How much the slider should jump when choosing values
   */
  export function defineRangeVariable(name: string, config: IRangeConfig): number;
  /**
   * This will create a variable that will appear as select list.
   * The first argument is the name of the variable.
   * The second argument is an array of values the user can choose from. The first item in the array is the default value.
   */
  export function defineSelectVariable(name: string, options: string[]): string;

  export interface IInputType {
    /** The type of texture to be accepted; can be 'minecraft-character-texture' or 'texture'. */
    type: string;
    /** The standard width of the texture file. */
    standardWidth?: number;
    /** The standard height of the texture file. */
    standardHeight?: number;
    /** A list of textures to choose from. */
    choices?: string[];
  }

  export interface ISelection {
    /** The horizontal position. */
    x: number;
    /** The vertical position. */
    y: number;
    /** The width. */
    w: number;
    /** The height. */
    h: number;
  }

  export interface ITransform {
    /** Direction to flip image; can be 'horizontal' or 'vertical'. */
    flip?: string;
    /** Rotation of image in degrees */
    rotate?: number;
  }

  export interface ITextStyle {
    /** The font style; can be 'bold', 'italic', or 'bold italic'. */
    fontStyle?: string;
    /** The font size in px; for example '16px'. */
    fontSize?: string;
    /** The font family; for example 'sans-serif' or 'Minecraft'. */
    fontFamily?: string;
  }

  export interface IRangeConfig {
    /** The first number in the range; default is 1. */
    min?: number;
    /** The last number in the range; default is 100. */
    max?: number;
    /** The initial value; default is 50. */
    value?: number;
    /** How much the slider should jump when choosing values; default is 1; */
    step?: number;
  }
}
