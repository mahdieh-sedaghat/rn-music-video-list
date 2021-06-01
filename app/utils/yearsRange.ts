const getYearsRange = () => {
  const data = [];
  for (let index = 2021, key = 0; index > 1959; index--, key++) {
    data.push({key, value: index});
  }
  return data;
};

export default getYearsRange;
