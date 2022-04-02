export const findItemInArrayById = (arr: any[], id: number) => {
  if (arr.find((el) => el.id === id)) {
    return true;
  }
  return false;
};
