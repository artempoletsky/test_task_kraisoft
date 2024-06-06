"use client";

import Konva from "konva";
import { useEffect, useRef } from "react";
import css from "./game.module.scss";
import { createEffectsLayer, removeEffectsLayer } from "./effects";
import { Button } from "@mantine/core";
import * as game from "./game";


export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  function onWindowResize(e: UIEvent) {
    const { clientWidth, clientHeight } = containerRef.current!;
    game.resize(clientWidth, clientHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", onWindowResize);
    game.init(containerRef.current!);
    return () => {
      game.destroy();
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <div className={css.game}>
    <div ref={containerRef} className={css.konva}></div>
    <div className={css.game_menu}>
      <Button onClick={game.spawnModeOn}>Spawn Rectangle</Button>
    </div>
  </div>;
}