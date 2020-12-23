import { TitleScene } from "phina.js/build/phina.esm";

export class GameTitleScene extends TitleScene {

  constructor(options) {
    super(options);
    this.off('pointend');

    this.time = 0;
  }

  update(app) {
    if (this.time > 60 && app.pointer.getPointing()) {
      this.exit();
    }
  }
}
