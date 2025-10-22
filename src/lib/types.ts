/**
 * Element type of an array.

 * @template T - The array type.
 */
export type ElementOf<T> = T extends (infer E)[] ? E : never;
