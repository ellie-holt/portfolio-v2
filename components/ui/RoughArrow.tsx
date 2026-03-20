"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";
import { resolveCanvasColour } from "@/lib/resolveCanvasColour";

type ArrowDirection = "up" | "down" | "left" | "right";

type RoughArrowProps = {
  direction?: ArrowDirection;
  stroke?: string;
  strokeWidth?: number;
  roughness?: number;
  className?: string;
};

export default function RoughArrow({
  direction = "down",
  stroke = "#f27941",
  strokeWidth = 5,
  roughness = 1,
  className,
}: RoughArrowProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width));
      canvas.height = Math.max(1, Math.floor(rect.height));
      const resolvedStroke = resolveCanvasColour(canvas, stroke);

      const w = canvas.width;
      const h = canvas.height;

      let x1 = 0;
      let y1 = 0;
      let x2 = 0;
      let y2 = 0;

      const headLength =
        direction === "left" || direction === "right" ? w / 4 : h / 4;

      if (direction === "down") {
        x1 = w / 2;
        y1 = h / 6;
        x2 = w / 2;
        y2 = h - h / 6;
      }

      if (direction === "up") {
        x1 = w / 2;
        y1 = h - h / 6;
        x2 = w / 2;
        y2 = h / 6;
      }

      if (direction === "right") {
        x1 = w / 6;
        y1 = h / 2;
        x2 = w - w / 6;
        y2 = h / 2;
      }

      if (direction === "left") {
        x1 = w - w / 6;
        y1 = h / 2;
        x2 = w / 6;
        y2 = h / 2;
      }

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, w, h);
      const rc = rough.canvas(canvas);

      const theta = Math.atan2(y2 - y1, x2 - x1);
      const phi = Math.PI / 6;
      const x3 = x2 - headLength * Math.cos(theta - phi);
      const y3 = y2 - headLength * Math.sin(theta - phi);
      const x4 = x2 - headLength * Math.cos(theta + phi);
      const y4 = y2 - headLength * Math.sin(theta + phi);

      rc.line(x1, y1, x2, y2, {
        stroke: resolvedStroke,
        strokeWidth,
        roughness,
      });
      rc.line(x2, y2, x3, y3, {
        stroke: resolvedStroke,
        strokeWidth,
        roughness,
      });
      rc.line(x2, y2, x4, y4, {
        stroke: resolvedStroke,
        strokeWidth,
        roughness,
      });
    };

    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(canvas);

    return () => observer.disconnect();
  }, [direction, stroke, strokeWidth, roughness]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
