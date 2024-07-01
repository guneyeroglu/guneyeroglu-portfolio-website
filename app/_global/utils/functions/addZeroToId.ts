export const addZeroToId = (id: number): string => {
  if (id <= 9) {
    return `0${id}`;
  } else {
    return `${id}`;
  }
};
