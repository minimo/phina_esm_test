import { DisplayElement, DisplayScene, Sprite } from "phina.js/build/phina.esm";
import { CountDown } from "../elements/CountDown";
import { Player } from "../elements/Player";
import { Tube } from "../elements/Tube";
import { $safe } from "../extensions/Utils";

export class MainScene extends DisplayScene {

  constructor(options) {
    options = $safe.call({}, options, { backgroundColor: 'black' });
    super(options);

    this.isStart = false;
    this.time = 0;

    //バックグラウンド
    this.bg = new Sprite("background").addChildTo(this).setOrigin(0, 0);

    this.background = new DisplayElement().addChildTo(this);
    this.foreground = new DisplayElement().addChildTo(this);

    //プレイヤー
    this.player = new Player()
      .setPosition(this.width / 4, this.height / 2)
      .addChildTo(this.foreground);

    this.player.on('dead', () => {
      this.gameover();
    });

    //カウントダウン
    this.countDown = new CountDown()
      .setPosition(this.width / 2, this.height / 2)
      .addChildTo(this);

    this.countDown.on('countdown_end', () => {
      this.isStart = true;
      this.player.flare('start');
    });
  }

  update(app) {
    if (!this.isStart) return;
    if (app.pointer.getPointing()) {
      // this.player.setPosition(app.pointer.x, app.pointer.y)
      this.player.jump();
    }

    if(this.time % 120) this.enterTube();

    this.time++;
  }

  enterTube() {
    const tube = new Tube();
    tube.setPosition(this.width / 2, this.height / 2).addChildTo(this.background);
  }

  gameover() {
    console.log("game over");
  }
}

//ManagerSceneで使用出来る様にする為
// window.MainScene = MainScene;
