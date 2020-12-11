import { phina, CanvasApp } from "phina.js"
import { Scene } from "phina.js/build/phina.esm";
// import { MainScene } from "/src/scenes/MainScene"
import { SceneFlow } from "/src/scenes/SceneFlow"

if (process.env.NODE_ENV !== 'production') {
  console.log('##### Development mode #####');
}
  
phina.main(()=> {
  const appOption = {
    fps: 60,
  };
  const app = new CanvasApp(appOption);
  app.replaceScene(new SceneFlow());
  app.run();
});
