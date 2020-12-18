import { Sprite, Vector2 } from "phina.js/build/phina.esm";
import { $safe } from "../extensions/Utils";
import { GameObject } from "./GameObject";

export class Tube extends GameObject {
  constructor(options) {
    options = $safe.call({}, options, { gap: 200 });
    super(options);
    this.upper = new Sprite("tube1")
      .setOrigin(0.5, 1.0)
      .setPosition(0, -options.gap / 2)
      .addChildTo(this);
    this.bottom = new Sprite("tube2")
      .setOrigin(0.5, 0.0)
      .setPosition(0, options.gap / 2)
      .addChildTo(this);
  }
}
