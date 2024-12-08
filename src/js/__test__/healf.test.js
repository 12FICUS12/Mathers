import sortedHealth from "../health";

test("return correctly value 1", () => {
  const heroes = sortedHealth([
    { name: "bowman", health: 10 },
    { name: "swordsman", health: 100 },
    { name: "magician", health: 80 },
  ]);
  const result = [
    { name: "swordsman", health: 100 },
    { name: "magician", health: 80 },
    { name: "bowman", health: 10 },
  ];
  expect(heroes).toEqual(result);
});

test("return correctly value 2", () => {
  const heroes = sortedHealth([
    { name: "bowman", health: 10 },
    { name: "swordsman", health: 100 },
    { name: "magician", health: 80 },
  ]);
  const result = [
    { name: "bowman", health: 10 },
    { name: "swordsman", health: 100 },
    { name: "magician", health: 80 },
  ];
  expect(heroes).not.toBe(result);
});