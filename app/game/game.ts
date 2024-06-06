"use client";

import Konva from "konva";
import { createEffectsLayer, removeEffectsLayer, runFireworks } from "./effects";
import { KonvaEventObject } from "konva/lib/Node";
import { Store } from "../store";

let stage: Konva.Stage;
let gameLayer: Konva.Layer;
export function init(container: HTMLDivElement) {
  stage = new Konva.Stage({
    container: container,
    width: container.clientWidth,
    height: container.clientHeight,
  });

  gameLayer = new Konva.Layer();
  gameLayer.draw();
  stage.add(gameLayer);

  createEffectsLayer(stage);
  stage.on("click", onStageClick);
}

export function destroy() {
  removeEffectsLayer(stage);
  gameLayer.remove();
  stage.off("click", onStageClick);
  stage.remove();
}

function putShapeToFront(e: KonvaEventObject<MouseEvent>) {
  const shape = e.target as Konva.Shape;
  shape.zIndex(gameLayer.children.length - 1);
}


function spawnRectangle(x: number, y: number) {
  runFireworks(x, y);
  Store.gameSpawnMode = false;
  const image = new Image();
  image.src = "/placeholder.svg";
  let shape = new Konva.Image({
    image,
    x,
    y,
    width: 150,
    height: 100,
    // fill: "#228be6",
    stroke: "#333",
  });
  shape.draggable(true);
  shape.on("mousedown touched", putShapeToFront);
  gameLayer.add(shape);
}

function onStageClick(e: KonvaEventObject<MouseEvent>) {
  if (Store.gameSpawnMode) {
    spawnRectangle(e.evt.layerX, e.evt.layerY);
  }
}

export function resize(width: number, height: number) {
  stage.width(width);
  stage.height(height);

  for (const shape of gameLayer.children) {
    const w = shape.width();
    const h = shape.height();
    if (w + shape.x() > width) {
      shape.x(width - w);
    }
    if (h + shape.y() > height) {
      shape.y(height - h);
    }
  }
}