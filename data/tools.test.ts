import { toolbox } from "@/data/tools";

describe("toolbox data integrity", () => {
  it("has at least one tool category", () => {
    expect(toolbox.length).toBeGreaterThan(0);
  });

  it("has unique category titles", () => {
    const titles = toolbox.map((category) => category.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("contains required non-empty fields", () => {
    for (const category of toolbox) {
      expect(category.title.trim()).not.toBe("");
      expect(category.items.length).toBeGreaterThan(0);
      expect(category.items.every((item) => item.trim().length > 0)).toBe(true);
    }
  });
});
