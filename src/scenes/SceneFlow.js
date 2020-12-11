import { LoadingScene, ManagerScene, TitleScene } from "phina.js/build/phina.esm";
import { AssetCatalog } from "../assets/AssetCatalog";
import { MainScene } from "./MainScene";

export class SceneFlow extends ManagerScene {
  constructor() {
    super({
      startLabel: "loading",
      scenes: [{
        label: "loading",
        className: LoadingScene,
        arguments: {
          assets: AssetCatalog,
        },
        nextLabel: "title",
      },{
        label: "title",
        className: TitleScene,
        nextLabel: "main",
      },{
        label: "main",
        className: MainScene,
        nextLabel: "title",
      }],
    });
  }
}
