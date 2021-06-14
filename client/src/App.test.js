import { TSP } from './components/TSP';

let A = [
  [-1, 20, 30, 10, 11],
  [15, -1, 16, 4, 2],
  [3, 5, -1, 2, 4],
  [19, 6, 18, -1, 3],
  [16, 4, 7, 16, -1]
];

let B = [
  [-1, 2, 7, 8],
  [6, -1, 3, 7],
  [5, 8, -1, 4],
  [7, 6, 9, -1]
]

test("TSP", () => {
  let res = TSP(A);
  expect(res.path).toStrictEqual([0, 3, 1, 4, 2, 0]);
  expect(res.cost).toBe(28);

  let res2 = TSP(B);
  expect(res2.path).toStrictEqual([0, 1, 2, 3, 0]);
  expect(res2.cost).toBe(16);
});