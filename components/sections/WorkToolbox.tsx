"use client";

import { useState } from "react";

import Button from "@/components/ui/Button/Button";
import RoughArrow from "@/components/ui/RoughArrow";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { toolbox } from "@/data/tools";

const toCliSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

type WorkToolboxProps = {
  className?: string;
};

export default function WorkToolbox({ className }: WorkToolboxProps) {
  const [activeToolGroup, setActiveToolGroup] = useState(toolbox[0].title);

  return (
    <div className={className}>
      <div className="stack-3 bg-white px-hpad py-r3 h-full">
        <div className="stack-1">
          <h3 className="text-section-display max-w-[18ch]">Toolbox</h3>
        </div>

        <div className="stack-1">
          <Tabs
            value={activeToolGroup}
            onValueChange={setActiveToolGroup}
            className="w-full min-w-0 gap-0"
          >
            <div className="overflow-hidden border-2 border-black w-full shadow-[var(--shadow-blocky-sm)_var(--color-tang-200)]">
              <div className="flex items-center gap-r1 bg-aqua-200 px-r1 py-r0.5 border-b-2 border-black min-h-10">
                <p
                  aria-hidden="true"
                  className="min-w-0 flex-1 truncate font-mono text-xs tracking-wide text-black self-center"
                >
                  ellie@portfolio:~/toolbox/{toCliSlug(activeToolGroup)}$
                </p>

                <div className="flex shrink-0 items-center gap-r0">
                  <TabsList className="self-center flex-nowrap justify-end items-center bg-transparent shadow-none p-0 pr-1 border-0 min-h-0 w-auto max-w-full overflow-visible">
                    {toolbox.map((group) => (
                      <TabsTrigger
                        key={group.title}
                        value={group.title}
                        className="relative shrink-0 rounded-none justify-center w-auto h-auto cursor-pointer font-mono text-xs uppercase tracking-wide px-2 py-1 border border-black bg-aqua-100 text-aqua-ink hover:bg-aqua-50 data-[state=active]:z-10 data-[state=active]:shadow-blocky-xs data-[state=active]:bg-white data-[state=active]:text-black"
                      >
                        {group.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  <div
                    aria-hidden="true"
                    className="flex items-center gap-1 pl-r0"
                  >
                    <span className="bg-black rounded-full w-2 h-2" />
                    <span className="bg-black rounded-full w-2 h-2" />
                    <span className="bg-black rounded-full w-2 h-2" />
                  </div>
                </div>
              </div>

              {toolbox.map((group) => (
                <TabsContent
                  key={group.title}
                  value={group.title}
                  className="bg-white border-0 shadow-none p-0 m-0 w-full min-h-56 flex flex-col"
                >
                  <ul
                    role="list"
                    className="space-y-r0 px-r2 py-r1 text-aqua-ink flex-1"
                  >
                    {group.items.map((tool) => (
                      <li
                        key={tool}
                        className="flex items-start gap-r0 font-mono text-sm leading-snug"
                      >
                        <span className="text-tang-500 select-none">{">"}</span>
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="px-r2 py-r1 border-t border-black/40 bg-aqua-50 font-mono text-xs text-aqua-ink">
                    <span className="text-tang-500">$</span> ls -1 "
                    {toCliSlug(group.title)}"
                    <span
                      aria-hidden="true"
                      className="inline-block bg-black ml-1 mb-1 w-2 h-4 align-middle animate-pulse"
                    />
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>

        <div className="mt-auto pt-r1">
          <Button
            href="https://github.com/ellie-holt"
            target="_blank"
            rel="noreferrer"
          >
            <span>Browse repos</span>
            <RoughArrow
              direction="right"
              stroke="#f27941"
              strokeWidth={1.4}
              className="w-7 h-7"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
