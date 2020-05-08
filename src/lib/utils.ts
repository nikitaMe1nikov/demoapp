export const EMPTY_STRING = '';

export type PromiseResult<T> = T extends Promise<infer U> ? U : T;
