import { Sprite, Vector2 } from "phina.js/build/phina.esm";
import { $safe } from "../extensions/Utils";
import { GameObject } from "./GameObject";

export class Tube extends GameObject {
  constructor(options) {
    options = $safe.call({}, options, {
      width: 52,
      height: 320,
      isBottom: false,
    });
    super(options);
    this.sprite = new Sprite(`tube${options.isBottom ? "2" : "1"}`).addChildTo(this);
    if (options.isBottom) {
      this.setOrigin(0.5, 0.0);
    } else {
      this.setOrigin(0.5, 1.0);
    }
  }
}
