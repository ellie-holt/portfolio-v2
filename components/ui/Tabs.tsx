"use client";

import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import {
  Tabs as ShadcnTabs,
  TabsList as ShadcnTabsList,
  TabsTrigger as ShadcnTabsTrigger,
  TabsContent as ShadcnTabsContent,
  tabsListVariants as shadcnTabsListVariants,
} from "@/components/external/shadcn/tabs";

export function Tabs({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnTabs>) {
  return <ShadcnTabs className={cn("grid gap-r1", className)} {...props} />;
}

export function TabsList({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ShadcnTabsList>) {
  return (
    <ShadcnTabsList
      className={cn(
        "w-auto gap-r0 border border-black bg-white p-0.5 group-data-[orientation=horizontal]/tabs:min-h-10 group-data-[orientation=horizontal]/tabs:justify-start group-data-[orientation=horizontal]/tabs:flex-wrap group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:items-stretch group-data-[orientation=vertical]/tabs:justify-start",
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
        "rounded-none border border-transparent px-r1 py-r0 font-mono text-base leading-snug transition-all data-[state=active]:border-black group-data-[orientation=vertical]/tabs:h-auto!",
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
        "border border-black bg-white p-r2 font-mono text-base leading-relaxed group-data-[orientation=vertical]/tabs:min-h-full",
        className,
      )}
      {...props}
    />
  );
}

export const tabsListVariants = shadcnTabsListVariants;
