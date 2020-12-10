import { phina, CanvasApp } from "phina.js"
import { MainScene } from "/src/scenes/MainScene"

/* main */
phina.main(()=> {
  const app = new CanvasApp();
  const mainScene = new MainScene();
  app.replaceScene(mainScene);
  app.run();
});
