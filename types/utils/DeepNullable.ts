export type DeepNullable<T> = {
    [P in keyof T]: T[P] extends object ? DeepNullable<T[P]> | null : T[P] | null;
  };