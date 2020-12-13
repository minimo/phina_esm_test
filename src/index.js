import { phina, CanvasApp, DisplayScene } from "phina.js/build/phina.esm";
import { SceneFlow } from "/src/scenes/SceneFlow"

if (process.env.NODE_ENV !== 'production') {
  console.log('##### Development mode #####');
}

DisplayScene.defaults.width = 960;
DisplayScene.defaults.height = 640;

phina.main(()=> {
  const appOption = {
    width: 960,
    height: 640,
    fps: 60,
  };
  const app = new CanvasApp(appOption);
  app.replaceScene(new SceneFlow());
  app.run();
});
