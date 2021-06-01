export type IFilter = {
  year: {
    key: number;
    value: number;
  };
  genres: Array<{id: number; name: string}>;
};
