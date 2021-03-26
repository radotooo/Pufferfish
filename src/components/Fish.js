import { Sprite, Texture } from 'pixi.js';
import gsap from 'gsap';

/**
 * Initializes a new instance of Fish
 * @class
 * @extends {PIXI.Sprite}
 */
export default class Fish extends Sprite {
  /**
   * @param {String} texture fish texture name
   */
  constructor(texture) {
    super(texture);
    this.name = 'fish';
    this.anchor.set(0.5);
    this.interactive = true;
    this.buttonMode = true;

    this.on('click', () => {
      this._expand();
      setTimeout(() => this._contract(), 5000);
    });
  }

  /**
   * @private
   */
  async _expand() {
    this.texture = Texture.from('bigFish');
    await gsap.to(this.scale, {
      x: 1.5,
      y: 1.5,
      duration: 0.5,
    });
  }

  /**
   * @private
   */
  async _contract() {
    this.texture = Texture.from('smallFish');
    await gsap.to(this.scale, { x: 1, y: 1, duration: 0.5 });
  }
}
