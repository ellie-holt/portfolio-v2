"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";
import { resolveCanvasColor } from "@/lib/resolveCanvasColor";

type ArrowDirection = "up" | "down" | "left" | "right";
type ArrowVariant =
  | "outline"
  | "hachure"
  | "solid"
  | "zigzag"
  | "cross-hatch"
  | "dots"
  | "dashed"
  | "zigzag-line";

type ArrowFillPattern = Exclude<ArrowVariant, "outline">;

type RoughChunkyOutlineArrowProps = {
  direction?: ArrowDirection;
  variant?: ArrowVariant;
  fillGap?: number;
  fillAngle?: number;
  fillWeight?: number;
  zigzagOffset?: number;
  dashGap?: number;
  dashOffset?: number;
  disableMultiStrokeFill?: boolean;
  stroke?: string;
  fill?: string;
  strokeWidth?: number;
  roughness?: number;
  className?: string;
};

export default function RoughChunkyOutlineArrow({
  direction = "right",
  variant = "outline",
  fillGap,
  fillAngle,
  fillWeight,
  zigzagOffset,
  dashGap,
  dashOffset,
  disableMultiStrokeFill,
  stroke = "#f27941",
  fill,
  strokeWidth = 4,
  roughness = 1.4,
  className,
}: RoughChunkyOutlineArrowProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const draw = () => {
      const cssWidth = Math.max(1, Math.floor(canvas.clientWidth));
      const cssHeight = Math.max(1, Math.floor(canvas.clientHeight));
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(cssWidth * dpr));
      canvas.height = Math.max(1, Math.floor(cssHeight * dpr));
      const resolvedStroke = resolveCanvasColor(canvas, stroke);
      const resolvedFill = fill ? resolveCanvasColor(canvas, fill) : undefined;

      const w = cssWidth;
      const h = cssHeight;
      const pad = Math.max(4, Math.min(w, h) * 0.1);
      const left = pad;
      const right = w - pad;
      const top = pad;
      const bottom = h - pad;
      const midX = w / 2;
      const midY = h / 2;

      const shaftHalfHeight = Math.max(3, (bottom - top) * 0.15);
      const shaftHalfWidth = Math.max(3, (right - left) * 0.15);
      const headStartX = left + (right - left) * 0.58;
      const headStartY = top + (bottom - top) * 0.58;
      const headHalfWidth = Math.max(6, (right - left) * 0.4);
      const headHalfHeight = Math.max(6, (bottom - top) * 0.4);

      let points: [number, number][] = [];

      if (direction === "right") {
        points = [
          [left, midY - shaftHalfHeight],
          [headStartX, midY - shaftHalfHeight],
          [headStartX, midY - headHalfHeight],
          [right, midY],
          [headStartX, midY + headHalfHeight],
          [headStartX, midY + shaftHalfHeight],
          [left, midY + shaftHalfHeight],
        ];
      }

      if (direction === "left") {
        points = [
          [right, midY - shaftHalfHeight],
          [w - headStartX, midY - shaftHalfHeight],
          [w - headStartX, midY - headHalfHeight],
          [left, midY],
          [w - headStartX, midY + headHalfHeight],
          [w - headStartX, midY + shaftHalfHeight],
          [right, midY + shaftHalfHeight],
        ];
      }

      if (direction === "down") {
        points = [
          [midX - shaftHalfWidth, top],
          [midX - shaftHalfWidth, headStartY],
          [midX - headHalfWidth, headStartY],
          [midX, bottom],
          [midX + headHalfWidth, headStartY],
          [midX + shaftHalfWidth, headStartY],
          [midX + shaftHalfWidth, top],
        ];
      }

      if (direction === "up") {
        points = [
          [midX - shaftHalfWidth, bottom],
          [midX - shaftHalfWidth, h - headStartY],
          [midX - headHalfWidth, h - headStartY],
          [midX, top],
          [midX + headHalfWidth, h - headStartY],
          [midX + shaftHalfWidth, h - headStartY],
          [midX + shaftHalfWidth, bottom],
        ];
      }

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const rc = rough.canvas(canvas);
      const isFilled = variant !== "outline";
      const selectedFillStyle = variant as ArrowFillPattern;

      const defaultFillSettingsByStyle: Record<
        ArrowFillPattern,
        {
          gap?: number;
          angle?: number;
          weight?: number;
          zigzag?: number;
          dashGap?: number;
          dashOffset?: number;
          multiStrokeFill?: boolean;
        }
      > = {
        hachure: {
          gap: Math.max(4, strokeWidth * 1.4),
          angle: 60,
          weight: Math.max(1, strokeWidth * 0.45),
          multiStrokeFill: false,
        },
        solid: {
          weight: 0,
          multiStrokeFill: false,
        },
        zigzag: {
          gap: Math.max(5, strokeWidth * 1.6),
          angle: 60,
          weight: Math.max(1, strokeWidth * 1),
          zigzag: Math.max(5, strokeWidth * 1.2),
          multiStrokeFill: true,
        },
        "cross-hatch": {
          gap: Math.max(5, strokeWidth * 1.6),
          angle: 50,
          weight: Math.max(1, strokeWidth * 1.2),
          multiStrokeFill: true,
        },
        dots: {
          gap: Math.max(8, strokeWidth * 2),
          weight: Math.max(1.5, strokeWidth * 1),
          multiStrokeFill: false,
        },
        dashed: {
          gap: Math.max(6, strokeWidth * 1.5),
          angle: 60,
          weight: Math.max(1, strokeWidth * 1.2),
          dashGap: Math.max(6, strokeWidth * 1.6),
          dashOffset: Math.max(3, strokeWidth * 0.8),
          multiStrokeFill: true,
        },
        "zigzag-line": {
          gap: Math.max(7, strokeWidth * 1.7),
          angle: 60,
          weight: Math.max(1, strokeWidth * 0.65),
          zigzag: Math.max(6, strokeWidth * 1.4),
          multiStrokeFill: true,
        },
      };

      const styleDefaults = defaultFillSettingsByStyle[selectedFillStyle];

      rc.polygon(points, {
        stroke: resolvedStroke,
        strokeWidth,
        roughness,
        fill: isFilled ? (resolvedFill ?? resolvedStroke) : undefined,
        fillStyle: isFilled ? selectedFillStyle : undefined,
        hachureGap: isFilled ? (fillGap ?? styleDefaults.gap) : undefined,
        hachureAngle: isFilled ? (fillAngle ?? styleDefaults.angle) : undefined,
        fillWeight: isFilled ? (fillWeight ?? styleDefaults.weight) : undefined,
        zigzagOffset: isFilled
          ? (zigzagOffset ?? styleDefaults.zigzag)
          : undefined,
        dashGap: isFilled ? (dashGap ?? styleDefaults.dashGap) : undefined,
        dashOffset: isFilled
          ? (dashOffset ?? styleDefaults.dashOffset)
          : undefined,
        disableMultiStrokeFill: isFilled
          ? (disableMultiStrokeFill ?? styleDefaults.multiStrokeFill)
          : undefined,
        disableMultiStroke: false,
      });
    };

    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(canvas);

    return () => observer.disconnect();
  }, [
    direction,
    variant,
    fillGap,
    fillAngle,
    fillWeight,
    zigzagOffset,
    dashGap,
    dashOffset,
    disableMultiStrokeFill,
    stroke,
    fill,
    strokeWidth,
    roughness,
  ]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
