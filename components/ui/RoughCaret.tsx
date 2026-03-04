"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";

type CaretDirection = "up" | "down" | "left" | "right";

type RoughCaretProps = {
  direction?: CaretDirection;
  stroke?: string;
  strokeWidth?: number;
  roughness?: number;
  className?: string;
};

export default function RoughCaret({
  direction = "down",
  stroke = "#f27941",
  strokeWidth = 3,
  roughness = 1,
  className,
}: RoughCaretProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width));
      canvas.height = Math.max(1, Math.floor(rect.height));

      const w = canvas.width;
      const h = canvas.height;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, w, h);
      const rc = rough.canvas(canvas);

      const padX = w / 5;
      const padY = h / 5;

      let p1 = { x: padX, y: padY };
      let p2 = { x: w / 2, y: h - padY };
      let p3 = { x: w - padX, y: padY };

      if (direction === "up") {
        p1 = { x: padX, y: h - padY };
        p2 = { x: w / 2, y: padY };
        p3 = { x: w - padX, y: h - padY };
      }

      if (direction === "left") {
        p1 = { x: w - padX, y: padY };
        p2 = { x: padX, y: h / 2 };
        p3 = { x: w - padX, y: h - padY };
      }

      if (direction === "right") {
        p1 = { x: padX, y: padY };
        p2 = { x: w - padX, y: h / 2 };
        p3 = { x: padX, y: h - padY };
      }

      rc.line(p1.x, p1.y, p2.x, p2.y, {
        stroke,
        strokeWidth,
        roughness,
      });
      rc.line(p2.x, p2.y, p3.x, p3.y, {
        stroke,
        strokeWidth,
        roughness,
      });
    };

    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(canvas);

    return () => observer.disconnect();
  }, [direction, stroke, strokeWidth, roughness]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      width={20}
      height={20}
      aria-hidden="true"
    />
  );
}
