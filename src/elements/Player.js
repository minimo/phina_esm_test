import { DisplayElement, Sprite, Vector2 } from "phina.js/build/phina.esm";

export class Player extends DisplayElement {
  constructor() {
    super();
    this.sprite = new Sprite("tomapiyo", 64, 64)
      .addChildTo(this)
      .setFrameIndex(1);

    this.animationSeq = [1, 2, 3];
    this.animationSeqIndex = 0;

    this.velocity = new Vector2(0, 0);
    this.jumpPower = 10;

    this.isDead = false;

    this.time = 0;
  }

  update(app) {
    if (this.time % 5 == 0) {
      this.animationSeqIndex++;
      if (this.animationSeqIndex == this.animationSeq.length) this.animationSeqIndex = 0;
      const idx = this.animationSeq[this.animationSeqIndex];
      this.sprite.setFrameIndex(idx);
    }

    this.position.add(this.velocity);
    this.velocity.y += 0.49;

    if (this.y > 480) {
      this.y = 480;
      this.velocity.y = 0;
      if (!this.isDead) {
        this.flare("dead");
        this.isDead = true;
      }
    }

    this.time++;
  }

  jump() {
    if (this.velocity.y > 0) return;
    this.velocity.y = -this.jumpPower;
  }
}
