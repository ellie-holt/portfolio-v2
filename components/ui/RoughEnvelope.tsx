"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";
import { resolveCanvasColour } from "@/lib/resolveCanvasColour";

type RoughEnvelopeProps = {
  className?: string;
  stroke?: string;
  strokeWidth?: number;
};

export default function RoughEnvelope({
  className,
  stroke = "#ff935f",
  strokeWidth = 3,
}: RoughEnvelopeProps) {
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
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, w, h);
      const rc = rough.canvas(canvas);

      const x = w * 0.1;
      const y = h * 0.22;
      const bw = w * 0.8;
      const bh = h * 0.56;

      const left = x;
      const right = x + bw;
      const top = y;
      const bottom = y + bh;
      const midX = x + bw / 2;
      const flapY = y + bh * 0.59;
      const flapHalf = bw * 0.075;
      const flapLeftX = midX - flapHalf;
      const flapRightX = midX + flapHalf;

      rc.rectangle(x, y, bw, bh, {
        stroke: resolvedStroke,
        strokeWidth,
        roughness: 1.4,
      });

      rc.line(left, top, flapLeftX, flapY, {
        stroke: resolvedStroke,
        strokeWidth,
        roughness: 1.15,
      });
      rc.line(right, top, flapRightX, flapY, {
        stroke: resolvedStroke,
        strokeWidth,
        roughness: 1.15,
      });
      rc.line(flapLeftX, flapY, flapRightX, flapY, {
        stroke: resolvedStroke,
        strokeWidth,
        roughness: 1.1,
      });

      rc.line(left, bottom, flapLeftX, flapY, {
        stroke: resolvedStroke,
        strokeWidth: Math.max(1, strokeWidth - 1),
        roughness: 1.2,
      });
      rc.line(right, bottom, flapRightX, flapY, {
        stroke: resolvedStroke,
        strokeWidth: Math.max(1, strokeWidth - 1),
        roughness: 1.2,
      });

      rc.line(left, top, right, top, {
        stroke: resolvedStroke,
        strokeWidth: Math.max(1, strokeWidth - 1),
        roughness: 1.1,
      });
    };

    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(canvas);

    return () => observer.disconnect();
  }, [stroke, strokeWidth]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
