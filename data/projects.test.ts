import { projects } from "@/data/projects";

describe("projects data integrity", () => {
  it("has at least one project", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("has unique slugs", () => {
    const slugs = projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("contains required non-empty fields with valid URL/image data", () => {
    for (const project of projects) {
      expect(project.slug.trim()).not.toBe("");
      expect(project.title.trim()).not.toBe("");
      expect(project.description.trim()).not.toBe("");

      expect(project.stack.length).toBeGreaterThan(0);
      expect(project.stack.every((item) => item.trim().length > 0)).toBe(true);

      expect(() => new URL(project.liveUrl)).not.toThrow();
      expect(project.liveUrl.startsWith("https://")).toBe(true);

      expect(project.image.src.startsWith("/")).toBe(true);
      expect(project.image.alt.trim()).not.toBe("");
    }
  });
});
