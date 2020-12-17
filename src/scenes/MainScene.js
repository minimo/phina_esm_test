import { DisplayScene, Sprite } from "phina.js/build/phina.esm";
import { CountDown } from "../elements/CountDown";
import { Player } from "../elements/Player";
import { $safe } from "../extensions/Utils";

export class MainScene extends DisplayScene {
  constructor(options) {
    options = $safe.call({}, options, { backgroundColor: 'black' });
    super(options);

    new Sprite("background").addChildTo(this).setOrigin(0, 0);

    this.player = new Player()
      .setPosition(this.width / 4, this.height / 2)
      .addChildTo(this);

    this.player.on('dead', () => {
      this.gameover();
    });

    //カウントダウン
    this.countDown = new CountDown()
    .setPosition(this.width / 2, this.height / 2)
    .addChildTo(this);
  }

  update(app) {
    if (app.pointer.getPointing()) {
      // this.player.setPosition(app.pointer.x, app.pointer.y)
      this.player.jump();
    }
  }

  gameover() {
    console.log("game over");
  }
}

//ManagerSceneで使用出来る様にする為
// window.MainScene = MainScene;
