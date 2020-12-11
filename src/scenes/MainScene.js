import { DisplayScene, TriangleShape } from "phina.js"
import { SpriteEx } from "../extensions/SpriteEx"

/* scene定義 */
export class MainScene extends DisplayScene {
  constructor() {
    super({
      backgroundColor: 'black',
    });
    this.player = new TriangleShape()
      .addChildTo(this)
      .setPosition(this.width/2, this.height/2);
  }

  update(app) {
    if (app.pointer.getPointing()) {
      this.player.setPosition(app.pointer.x, app.pointer.y)
    }
  }
}

//ManagerSceneで使用出来る様にする為
// window.MainScene = MainScene;
