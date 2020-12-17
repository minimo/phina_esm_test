import { Label } from "phina.js/build/phina.esm";
import { $safe, times } from "../extensions/Utils";
import { GameObject } from "./GameObject";

export class CountDown extends GameObject {
  constructor(options) {
    options = $safe.call({}, options, { startCount: 3, interval: 2000, startScale: 3 });
    super(options);

    this.count = options.startCount;

    this.label = new Label(`${this.count}`)
      .setScale(options.startScale)
      .addChildTo(this);

    this.label.tweener.clear();
    times.call(options.startCount, () => {
      this.label.tweener
        // .set({ scale: options.startScale })
        .to({ scale: 0.1 }, options.interval )
        .call(() => {
          this.count--;
          this.label.text = `${this.count}`;
        })
    });
  }
}
