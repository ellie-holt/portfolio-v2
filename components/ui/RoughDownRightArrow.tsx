"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";
import { resolveCanvasColour } from "@/lib/resolveCanvasColour";

type RoughDownRightArrowProps = {
  stroke?: string;
  strokeWidth?: number;
  roughness?: number;
  bendAt?: number;
  className?: string;
};

export default function RoughDownRightArrow({
  stroke = "#f27941",
  strokeWidth = 4,
  roughness = 1,
  bendAt = 0.66,
  className,
}: RoughDownRightArrowProps) {
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

      const padX = w / 6;
      const padY = h / 6;
      const bendY = Math.max(padY * 1.5, Math.min(h - padY * 1.5, h * bendAt));

      const start = { x: w / 2, y: padY };
      const end = { x: w - padX, y: bendY };

      const control1 = { x: start.x, y: bendY * 0.95 };
      const control2 = { x: w * 0.62, y: bendY };

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, w, h);
      const rc = rough.canvas(canvas);

      const shaftPath = [
        `M ${start.x} ${start.y}`,
        `C ${control1.x} ${control1.y} ${control2.x} ${control2.y} ${end.x} ${end.y}`,
      ].join(" ");

      rc.path(shaftPath, {
        stroke: resolvedStroke,
        strokeWidth,
        roughness,
        bowing: 0.8,
        fill: "transparent",
      });

      const headLength = Math.min(w, h) / 6;
      const theta = 0;
      const phi = Math.PI / 5;

      const x3 = end.x - headLength * Math.cos(theta - phi);
      const y3 = end.y - headLength * Math.sin(theta - phi);
      const x4 = end.x - headLength * Math.cos(theta + phi);
      const y4 = end.y - headLength * Math.sin(theta + phi);

      rc.line(end.x, end.y, x3, y3, {
        stroke: resolvedStroke,
        strokeWidth,
        roughness,
      });

      rc.line(end.x, end.y, x4, y4, {
        stroke: resolvedStroke,
        strokeWidth,
        roughness,
      });
    };

    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(canvas);

    return () => observer.disconnect();
  }, [stroke, strokeWidth, roughness, bendAt]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
