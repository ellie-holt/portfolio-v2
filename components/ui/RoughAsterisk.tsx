"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";
import { resolveCanvasColour } from "@/lib/resolveCanvasColour";

type RoughAsteriskProps = {
  stroke?: string;
  strokeWidth?: number;
  roughness?: number;
  className?: string;
};

export default function RoughAsterisk({
  stroke = "#f27941",
  strokeWidth = 2.2,
  roughness = 1,
  className,
}: RoughAsteriskProps) {
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
      const cx = w / 2;
      const cy = h / 2;
      const r = Math.min(w, h) * 0.38;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, w, h);
      const rc = rough.canvas(canvas);

      const drawArm = (angle: number) => {
        const dx = Math.cos(angle) * r;
        const dy = Math.sin(angle) * r;

        rc.line(cx - dx, cy - dy, cx + dx, cy + dy, {
          stroke: resolvedStroke,
          strokeWidth,
          roughness,
        });
      };

      drawArm(0);
      drawArm(Math.PI / 3);
      drawArm((2 * Math.PI) / 3);
    };

    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(canvas);

    return () => observer.disconnect();
  }, [stroke, strokeWidth, roughness]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
