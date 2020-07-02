import { processInput } from './inputProcessor';

const fileArray1 = ["5", "1 B 3 C 5 C", "2 C 3 B 4 C", "5 B"];
const fileArray2 = ["1", "1 C", "1 B"];
const fileArray3 = ["2", "1 C 2 B", "1 B"];
const fileArray4 = ["5", "2 B", "5 C", "1 C", "5 C 1 C 4 B", "3 C", "5 C", "3 C 5 C 1 C", "3 C", "2 B", "5 C 1 C", "2 B", "5 C", "4 B", "5 C 4 B"];

test('can get input file', () => {
  const result1 = processInput(fileArray1);
  const result2 = processInput(fileArray2);
  const result3 = processInput(fileArray3);
  const result4 = processInput(fileArray4);

  expect(result1).toStrictEqual(["C", "C", "C", "C", "B"]);
  expect(result2).toStrictEqual("No solution exists");
  expect(result3).toStrictEqual(["B", "B"]);
  expect(result4).toStrictEqual(["C", "B", "C", "B", "C"]);
});
