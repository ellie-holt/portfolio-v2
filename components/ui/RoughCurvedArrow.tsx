"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";
import { resolveCanvasColor } from "@/lib/resolveCanvasColor";

type CurvedDirection =
  | "up-right"
  | "down-right"
  | "up-left"
  | "down-left"
  | "down";

type RoughCurvedArrowProps = {
  direction?: CurvedDirection;
  stroke?: string;
  strokeWidth?: number;
  roughness?: number;
  bowing?: number;
  className?: string;
};

export default function RoughCurvedArrow({
  direction = "up-right",
  stroke = "#f27941",
  strokeWidth = 5,
  roughness = 1,
  bowing = 1,
  className,
}: RoughCurvedArrowProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width));
      canvas.height = Math.max(1, Math.floor(rect.height));
      const resolvedStroke = resolveCanvasColor(canvas, stroke);

      const w = canvas.width;
      const h = canvas.height;

      const padX = w / 6;
      const padY = h / 6;

      let start = { x: padX, y: h - padY };
      let control1 = { x: w * 0.34, y: h * 0.95 };
      let control2 = { x: w * 0.68, y: h * 0.28 };
      let end = { x: w - padX, y: padY };
      let curvePoints = [start, control1, control2, end];
      let headFrom = control2;

      if (direction === "down-right") {
        start = { x: padX, y: padY };
        control1 = { x: w * 0.32, y: h * 0.06 };
        control2 = { x: w * 0.72, y: h * 0.72 };
        end = { x: w - padX, y: h - padY };
        curvePoints = [start, control1, control2, end];
        headFrom = control2;
      }

      if (direction === "up-left") {
        start = { x: w - padX, y: h - padY };
        control1 = { x: w * 0.66, y: h * 0.95 };
        control2 = { x: w * 0.32, y: h * 0.28 };
        end = { x: padX, y: padY };
        curvePoints = [start, control1, control2, end];
        headFrom = control2;
      }

      if (direction === "down-left") {
        start = { x: w - padX, y: padY };
        control1 = { x: w * 0.68, y: h * 0.06 };
        control2 = { x: w * 0.28, y: h * 0.72 };
        end = { x: padX, y: h - padY };
        curvePoints = [start, control1, control2, end];
        headFrom = control2;
      }

      if (direction === "down") {
        start = { x: w * 0.34, y: padY };
        control1 = { x: w * 0.68, y: h * 0.32 };
        control2 = { x: w * 0.24, y: h * 0.62 };
        const settle = { x: w / 2, y: h * 0.76 };
        end = { x: w / 2, y: h - padY * 0.5 };
        curvePoints = [start, control1, control2, settle, end];
        headFrom = settle;
      }

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, w, h);
      const rc = rough.canvas(canvas);

      rc.curve(
        curvePoints.map((point) => [point.x, point.y]),
        {
          stroke: resolvedStroke,
          strokeWidth,
          roughness,
          bowing,
        },
      );

      const headLength = Math.min(w, h) / 6;
      const theta = Math.atan2(end.y - headFrom.y, end.x - headFrom.x);
      const phi = Math.PI / 4;

      const x3 = end.x - headLength * Math.cos(theta - phi);
      const y3 = end.y - headLength * Math.sin(theta - phi);
      const x4 = end.x - headLength * Math.cos(theta + phi);
      const y4 = end.y - headLength * Math.sin(theta + phi);

      rc.line(end.x, end.y, x3, y3, { stroke: resolvedStroke, strokeWidth });
      rc.line(end.x, end.y, x4, y4, { stroke: resolvedStroke, strokeWidth });
    };

    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(canvas);

    return () => observer.disconnect();
  }, [direction, stroke, strokeWidth, roughness, bowing]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
