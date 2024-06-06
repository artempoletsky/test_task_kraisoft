"use client";

import Konva from "konva";
import { useEffect, useRef } from "react";
import css from "./game.module.scss";
import { createEffectsLayer, removeEffectsLayer } from "./effects";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current!;

    let stage = new Konva.Stage({
      container: "game",
      width: container.clientWidth,
      height: container.clientHeight,
    });

    createEffectsLayer(stage);

    // then create layer
    var layer = new Konva.Layer();

    // create our shape
    var circle = new Konva.Circle({
      x: stage.width() / 2,
      y: stage.height() / 2,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4
    });

    circle.draggable(true);

    // add the shape to the layer
    layer.add(circle);

    // add the layer to the stage
    stage.add(layer);

    // draw the image
    layer.draw();
    return () => {
      removeEffectsLayer(stage);
    }
  }, []);

  return <div ref={containerRef} id="game" className={css.game}></div>;
}