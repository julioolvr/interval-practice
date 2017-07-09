// @flow
export default function randomFromArray<T>(arr: Array<T>): T {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
