import { DisplayScene, Sprite } from "phina.js/build/phina.esm";
import { SpriteEx } from "../extensions/SpriteEx"

export class MainScene extends DisplayScene {
  constructor() {
    super({
      backgroundColor: 'black',
    });
    this.player = new Sprite("tomapiyo", 64, 64)
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
