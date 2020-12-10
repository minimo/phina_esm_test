import { phina, CanvasApp } from "phina.js"
import {} from "/src/scenes/MainScene"

/* main */
phina.main(()=> {
  const app = new CanvasApp();
  const mainScene = new MainScene();
  app.replaceScene(mainScene);
});
