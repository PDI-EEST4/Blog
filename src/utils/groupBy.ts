/**
 * Groups members of an iterable according to the return value of the passed callback.
 * @param items An iterable.
 * @param keySelector A callback which will be invoked for each item in items.
 */
export const groupBy = <T, K extends keyof any>(
  array: T[],
  keyFn: (item: T) => K
): Record<K, T[]> =>
  array.reduce((acc, item) => {
    const key = keyFn(item)
    ;(acc[key] ||= []).push(item)
    return acc
  }, {} as Record<K, T[]>)
