export const sortBy = (arr, key, order) =>
  arr.sort((a, b) => {
    if (order === 'ASC') {
      return a[key] > b[key] ? 1 : -1;
    } else {
      return a[key] < b[key] ? 1 : -1;
    }
  });
