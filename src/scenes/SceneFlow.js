import { ManagerScene } from "phina.js"
import { MainScene } from "./MainScene";

/* scene定義 */
export class SceneFlow extends ManagerScene {
  constructor() {
    super({
      startLabel: "main",
      scenes: [{
        label: "main",
        className: MainScene,
      }],
    });
  }
}
