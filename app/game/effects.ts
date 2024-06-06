import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";


let effectsLayer: Konva.Layer;

function onClick(e: KonvaEventObject<MouseEvent>) {
  runFireworks(e.evt.layerX, e.evt.layerY);
}

export function createEffectsLayer(stage: Konva.Stage) {
  effectsLayer = new Konva.Layer();
  stage.add(effectsLayer);
  // stage.on("click", onClick);
}

export function removeEffectsLayer(stage: Konva.Stage) {
  // stage.off("click", onClick);
  effectsLayer.remove();
}

export function runFireworks(x: number, y: number) {
  let shapes: Konva.Star[] = [];
  let numShapes = 30;
  let vY0: number[] = [];
  let vX0: number[] = [];
  let rotations: number[] = [];

  for (let i = 0; i < numShapes; i++) {
    let shape = new Konva.Star({
      x,
      y,
      numPoints: 5,
      innerRadius: 4,
      outerRadius: 7,
      fill: 'red',
    });
    shape.cache();
    effectsLayer.add(shape);
    shapes.push(shape);
    const direction = Math.PI * 2 * Math.random();
    vX0.push(Math.sin(direction) * (10 * Math.random() + 5));
    vY0.push(Math.cos(direction) * (10 * Math.random() + 5));
    rotations[i] = (Math.random() * 2 - 1) * 360;
  }



  let aY = 10;
  let aX = 0;
  let distanceScale = 20;
  let anim = new Konva.Animation(function (frame) {
    if (!frame) return;

    let t = frame.time / 1000;

    if (t > 1) {
      anim.stop();
      for (const shape of shapes) {
        shape.remove();
      }
      return;
    }
    for (let i = 0; i < numShapes; i++) {
      const shape = shapes[i];
      shape.y(y + (t * vY0[i] + aY * t * t / 2) * distanceScale);
      shape.x(x + (t * vX0[i] + aX * t * t / 2) * distanceScale);
      shape.opacity(1 - Math.pow(t, 4));
      shape.rotation(t * rotations[i]);
    }

    // shape.y(shape.y() + 1);
    // update stuff
  }, effectsLayer);

  anim.start();
}