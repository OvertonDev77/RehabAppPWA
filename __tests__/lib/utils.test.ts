import { cn } from "../../src/lib/utils";

describe("cn utility function", () => {
  it("returns an empty string when no arguments are provided", () => {
    expect(cn()).toBe("");
  });

  it("merges a single class name", () => {
    expect(cn("foo")).toBe("foo");
  });

  it("merges multiple class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("handles falsy values", () => {
    expect(cn("foo", false, null, undefined, "", "bar")).toBe("foo bar");
  });

  it("merges Tailwind classes correctly (conflicting classes)", () => {
    expect(cn("p-2", "p-4")).toBe("p-4"); // twMerge should keep the last
  });

  it("handles arrays and objects (clsx features)", () => {
    expect(cn(["foo", { bar: true, baz: false }])).toBe("foo bar");
  });
});
