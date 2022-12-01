import { assertEquals } from "https://deno.land/std@0.166.0/testing/asserts.ts";

const parseElves = (input: string) => {
  return input
    .split("\n\n")
    .map((elf) => elf.split("\n").map((n) => parseInt(n)));
};

const findCaloriestElf = (input: string, take: number) =>
  parseElves(input)
    .map(sum)
    .sort((a, b) => a - b)
    .slice(-take)
    .reduce((a, b) => a + b);

Deno.test("part1", () => {
  const input = Deno.readTextFileSync("./day01.input.txt");
  assertEquals(findCaloriestElf(input, 1), 72240);
});

Deno.test("part2", () => {
  const input = Deno.readTextFileSync("./day01.input.txt");
  assertEquals(findCaloriestElf(input, 3), 210957);
});

Deno.test("example", () => {
  const input = Deno.readTextFileSync("./day01.example.txt");
  assertEquals(findCaloriestElf(input, 1), 24000);
});

const sum = (arr: number[]) => arr.reduce((a, b) => a + b);
