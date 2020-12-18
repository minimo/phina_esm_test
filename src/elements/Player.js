import { Sprite, Vector2 } from "phina.js/build/phina.esm";
import { GameObject } from "./GameObject";

export class Player extends GameObject {
  constructor(options) {
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
  }

  update(app) {
    if (this.time % 5 == 0) {
      this.animationSeqIndex++;
      if (this.animationSeqIndex == this.animationSeq.length) this.animationSeqIndex = 0;
      const idx = this.animationSeq[this.animationSeqIndex];
      this.sprite.setFrameIndex(idx);
    }

    if (!this.isStart) return;

    this.position.add(this.velocity);
    this.velocity.y += 0.49;

    if (this.y > 640) {
      this.y = 640;
      this.velocity.y = 0;
      if (!this.isDead) {
        this.flare("dead");
        this.isDead = true;
      }
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
