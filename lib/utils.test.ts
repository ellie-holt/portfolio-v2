import { cn } from "@/lib/utils";

describe("cn", () => {
  it("merges Tailwind classes with last one winning", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
  });

  it("keeps non-conflicting classes", () => {
    expect(cn("p-2", "text-sm")).toBe("p-2 text-sm");
  });
});
