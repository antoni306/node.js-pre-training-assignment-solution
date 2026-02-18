/* eslint-disable @typescript-eslint/no-unused-vars */
// Task 02: Mini functional–utility library
// All helpers are declared but not implemented.

export function mapArray<T, R>(source: readonly T[], mapper: (item: T, index: number) => R): R[] {
  if (source == null || source == undefined) {
    throw new TypeError();
  }
  const result: R[] = []
  for (let i = 0; i < source.length; i++) {
    result.push(mapper(source[i], i))
  }

  return result;
}

export function filterArray<T>(source: readonly T[], predicate: (item: T, index: number) => boolean): T[] {
  if (source == null || source == undefined) {
    throw new TypeError();
  }

  var result: T[] = []

  for (let i = 0; i < source.length; i++) {
    if (predicate(source[i], i)) {
      result.push(source[i])
    }
  }
  return result;
}

export function reduceArray<T, R>(source: readonly T[], reducer: (acc: R, item: T, index: number) => R, initial: R): R {
  if (source == null || source == undefined) {
    throw new TypeError();
  }
  var result: R = initial;
  for (let i = 0; i < source.length; i++) {
    result = reducer(result, source[i], i);
  }

  return result;
}

export function partition<T>(source: readonly T[], predicate: (item: T) => boolean): [T[], T[]] {
  if (source == null || source == undefined) {
    throw new TypeError();
  }
  const result: [T[], T[]] = [[], []]
  for (let i = 0; i < source.length; i++) {
    if (predicate(source[i])) {
      result[0].push(source[i])
    } else {
      result[1].push(source[i])
    }
  }
  return result

}

export function groupBy<T, K extends PropertyKey>(source: readonly T[], keySelector: (item: T) => K): Record<K, T[]> {
  if (source == null || source == undefined) {
    throw new TypeError();
  }
  const result = {} as Record<K, T[]>

  for (let i = 0; i < source.length; i++) {
    const item = source[i];
    const key = keySelector(item);

    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }
  return result;
}

// var mapped = mapArray([1, 2, 3], n => n * 2);                    // [2, 4, 6]
// var filtered = filterArray(['a', 'bb', 'c'], s => s.length === 1); // ['a', 'c']
// var reduced = reduceArray([1, 2, 3], (a, n) => a + n, 0);         // 6
// var partitioned = partition([1, 2, 3, 4], n => n % 2 === 0);          // [[2, 4], [1, 3]]
// const grouped = groupBy([
//   { id: 1, tag: 'home' },
//   { id: 2, tag: 'work' },
//   { id: 3, tag: 'home' }
// ], t => t.tag);
// console.log(mapped);
// console.log(filtered);
// console.log(reduced);
// console.log(partitioned);
// console.log(grouped);