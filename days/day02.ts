// deno-lint-ignore-file no-explicit-any
import { assertEquals } from "https://deno.land/std@0.166.0/testing/asserts.ts";

type Elf = "A" | "B" | "C";
type You = "X" | "Y" | "Z";

type Round = [Elf, You];

const parseRounds = (input: string): Round[] => {
  return input
    .trim()
    .split("\n")
    .map((round) => round.split(" ") as Round);
};

const part1 = (input: string) =>
  parseRounds(input).reduce((score, round) => roundScore1(round) + score, 0);

const part2 = (input: string) =>
  parseRounds(input).reduce((score, round) => roundScore2(round) + score, 0);

const roundScore2 = ([elf, outcome]: Round) => {
  const picks = {
    AX: "Z",
    AY: "X",
    AZ: "Y",
    BX: "X",
    BY: "Y",
    BZ: "Z",
    CX: "Y",
    CY: "Z",
    CZ: "X",
  } as any;

  const you = picks[elf + outcome];

  return roundScore1([elf, you]);
};

const roundScore1 = ([elf, you]: Round) => {
  const pickScore = ["X", "Y", "Z"].indexOf(you) + 1;
  switch (elf + you) {
    case "AX":
    case "BY":
    case "CZ":
      return pickScore + 3;
    case "AY":
    case "BZ":
    case "CX":
      return pickScore + 6;
  }
  return pickScore;
};

Deno.test("part1", () => {
  const input = Deno.readTextFileSync("./day02.input.txt");
  assertEquals(part1(input), 10718);
});

Deno.test("part2", () => {
  const input = Deno.readTextFileSync("./day02.input.txt");
  assertEquals(part2(input), 14652);
});

Deno.test("example part1", () => {
  const input = Deno.readTextFileSync("./day02.example.txt");
  assertEquals(part1(input), 15);
});

Deno.test("example part2", () => {
  const input = Deno.readTextFileSync("./day02.example.txt");
  assertEquals(part2(input), 12);
});
