const year = () => {
  const data = [];
  for (let index = 1960, key = 0; index < 2022; index++, key++) {
    data.push({key, value: index});
  }
  return data;
};

export default year;
