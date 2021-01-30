import { Sprite, Texture } from 'pixi.js';
import gsap from 'gsap';

/**
 * @param {texture} - Sprite Texture
 */
export default class Fish extends Sprite {
  constructor(texture) {
    super(texture);

    this.name = 'fish';
    this.anchor.set(0.5);
    this.interactive = true;
    this.buttonMode = true;

    this.on('click', () => this.expand());
  }

  /**
   * @private
   */
  async expand() {
    this.texture = Texture.from('bigFish');
    gsap.to(this.scale, {
      x: 1.5,
      y: 1.5,
      duration: 0.5,

      onComplete: () =>
        new Promise(() => {
          setTimeout(() => this.contract(), 5000);
        }),
    });
  }

  /**
   * @private
   */
  contract() {
    this.texture = Texture.from('smallFish');
    gsap.to(this.scale, { x: 1, y: 1, duration: 0.5 });
  }
}
