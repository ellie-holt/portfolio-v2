"use client";

import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import {
  Field as ShadcnField,
  FieldContent as ShadcnFieldContent,
  FieldDescription as ShadcnFieldDescription,
  FieldError as ShadcnFieldError,
  FieldGroup as ShadcnFieldGroup,
  FieldLabel as ShadcnFieldLabel,
  FieldLegend as ShadcnFieldLegend,
  FieldSeparator as ShadcnFieldSeparator,
  FieldSet as ShadcnFieldSet,
  FieldTitle as ShadcnFieldTitle,
} from "@/components/external/shadcn/ui/field";

export function Field({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnField>) {
  return <ShadcnField className={cn(className)} {...props} />;
}

export function FieldGroup({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnFieldGroup>) {
  return <ShadcnFieldGroup className={cn(className)} {...props} />;
}

export function FieldSet({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnFieldSet>) {
  return <ShadcnFieldSet className={cn(className)} {...props} />;
}

export function FieldLegend({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnFieldLegend>) {
  return <ShadcnFieldLegend className={cn(className)} {...props} />;
}

export function FieldLabel({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnFieldLabel>) {
  return <ShadcnFieldLabel className={cn(className)} {...props} />;
}

export function FieldTitle({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnFieldTitle>) {
  return <ShadcnFieldTitle className={cn(className)} {...props} />;
}

export function FieldContent({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnFieldContent>) {
  return <ShadcnFieldContent className={cn(className)} {...props} />;
}

export function FieldDescription({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnFieldDescription>) {
  return <ShadcnFieldDescription className={cn(className)} {...props} />;
}

export function FieldError({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnFieldError>) {
  return <ShadcnFieldError className={cn(className)} {...props} />;
}

export function FieldSeparator({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnFieldSeparator>) {
  return <ShadcnFieldSeparator className={cn(className)} {...props} />;
}
