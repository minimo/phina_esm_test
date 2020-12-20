import { Collision, DisplayElement, DisplayScene, Sprite } from "phina.js/build/phina.esm";
import { CountDown } from "../elements/CountDown";
import { Player } from "../elements/Player";
import { Tube } from "../elements/Tube";
import { $safe } from "../extensions/Utils";

export class MainScene extends DisplayScene {

  constructor(options) {
    options = $safe.call({}, options, { backgroundColor: 'black' });
    super(options);

    this.isStart = false;
    this.isGameOver = false;
    this.tubes = [];
    this.time = 0;

    //バックグラウンド
    this.bg = new Sprite("background").addChildTo(this).setOrigin(0, 0);

    this.background = new DisplayElement().addChildTo(this);
    this.foreground = new DisplayElement().addChildTo(this);

    //プレイヤー
    this.player = new Player()
      .setPosition(this.width / 4, this.height / 2)
      .addChildTo(this.foreground);

    this.player.on('dead_end', () => {
      this.player.off('dead_end');
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

    if(this.time % 120 == 0) this.enterTube();

    this.tubes.forEach(tube => {
      tube.x -= 3;
      if (tube.x < -50) {
        tube.remove();
      }
      if (Collision.testRectRect(this.player, tube)) {
        this.player.flare('dead');
      }
    });


    this.time++;
  }

  enterTube() {
    const gap = 300;
    const offset = 0;
    const tube1 = new Tube({ isBottom: false });
    tube1.setPosition(this.width + 30, this.height / 2 - tube1.height / 2 - gap / 2 + offset).addChildTo(this.background);
    const tube2 = new Tube({ isBottom: true });
    tube2.setPosition(this.width + 30, this.height / 2 + tube2.height / 2 + gap / 2 + offset).addChildTo(this.background);
    this.tubes.push(tube1);
    this.tubes.push(tube2);
  }

  gameover() {
    this.isGameOver = true;
    console.log("game over");
  }
}

//ManagerSceneで使用出来る様にする為
// window.MainScene = MainScene;
