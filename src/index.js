import { phina, CanvasApp } from "phina.js"
import { MainScene } from "/src/scenes/MainScene"

if (process.env.NODE_ENV !== 'production') {
  console.log('##### Development mode #####');
}
  
phina.main(()=> {
  const app = new CanvasApp();
  const mainScene = new MainScene();
  app.replaceScene(mainScene);
  app.run();
});
