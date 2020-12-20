import { Sprite, Vector2 } from "phina.js/build/phina.esm";
import { $safe } from "../extensions/Utils";
import { GameObject } from "./GameObject";

export class Player extends GameObject {
  constructor(options) {
    options = $safe.call({}, options, { width: 64, height: 64 });
    super(options);
    this.sprite = new Sprite("tomapiyo", 64, 64)
      .addChildTo(this)
      .setFrameIndex(1);

    this.animationSeq = [1, 2, 3];
    this.animationSeqIndex = 0;

    this.velocity = new Vector2(0, 0);
    this.jumpPower = 10;

    this.isStart = false;
    this.isDead = false;

    this.on('start', () => {
      this.isStart = true;
      this.jump(15);
    });

    this.on('dead', () => {
      this.off('dead');
      this.isDead = true;
    });
  }

  update(app) {
    if (!this.isDead && this.time % 5 == 0) {
      this.animationSeqIndex++;
      if (this.animationSeqIndex == this.animationSeq.length) this.animationSeqIndex = 0;
      const idx = this.animationSeq[this.animationSeqIndex];
      this.sprite.setFrameIndex(idx);
    }

    if (!this.isStart) return;

    if (this.isDead) {
      this.sprite.setFrameIndex(4);
    } else if (app.pointer.getPointing()) {
      this.jump();
    }

    this.position.add(this.velocity);
    this.velocity.y += 0.49;

    if (this.y > 640) {
      this.flare("dead");
    }
    if (this.y > 800) {
      this.flare("dead_end");
    }

    this.time++;
  }

  jump(power) {
    power = power || this.jumpPower;
    if (this.velocity.y < 0) return;
    this.velocity.y = -this.jumpPower;
    return this;
  }
}
