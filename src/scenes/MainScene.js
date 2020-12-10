import { DisplayScene, TriangleShape } from "phina.js"

/* scene定義 */
export class MainScene extends DisplayScene {
  constructor(options) {
    super(options);
    this.player = new TriangleShape()
      .addChildTo(this)
      .setPosition(this.width/2, this.height/2)
  }

  update(app) {
    if (app.pointer.getPointingStart()) {
      this.player.setPosition(app.pointer.x, app.pointer.y)
    }
  }
}
