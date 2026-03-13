"use client";

import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import {
  Tabs as ShadcnTabs,
  TabsList as ShadcnTabsList,
  TabsTrigger as ShadcnTabsTrigger,
  TabsContent as ShadcnTabsContent,
  tabsListVariants as shadcnTabsListVariants,
} from "@/components/external/shadcn/ui/tabs";

export function Tabs({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnTabs>) {
  return <ShadcnTabs className={cn("gap-r1 grid", className)} {...props} />;
}

export function TabsList({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnTabsList>) {
  return (
    <ShadcnTabsList
      className={cn(
        "group-data-[orientation=horizontal]/tabs:flex-wrap group-data-[orientation=horizontal]/tabs:justify-start group-data-[orientation=vertical]/tabs:justify-start group-data-[orientation=vertical]/tabs:items-stretch gap-r0 bg-white shadow-[var(--shadow-blocky-sm)_var(--color-aqua-300)] p-0.5 border border-black w-auto group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=horizontal]/tabs:min-h-10",
        className,
      )}
      {...props}
    />
  );
}

export function TabsTrigger({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnTabsTrigger>) {
  return (
    <ShadcnTabsTrigger
      className={cn(
        "data-[state=active]:bg-aqua-200 hover:bg-aqua-100 data-[state=active]:shadow-[var(--shadow-blocky-xs)_var(--color-aqua-400)] px-r1 py-r0 border border-transparent data-[state=active]:border-black rounded-none group-data-[orientation=vertical]/tabs:h-auto! font-mono data-[state=active]:text-aqua-ink hover:text-aqua-ink text-base leading-snug transition-all",
        className,
      )}
      {...props}
    />
  );
}

export function TabsContent({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnTabsContent>) {
  return (
    <ShadcnTabsContent
      className={cn(
        "bg-white shadow-[var(--shadow-blocky-sm)_var(--color-tang-300)] p-r2 border border-black group-data-[orientation=vertical]/tabs:min-h-full font-mono text-base leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

export const tabsListVariants = shadcnTabsListVariants;
