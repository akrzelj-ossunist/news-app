export const concatArrayOfArray = (arr: any[]): any[] => {
    let newArray: any[] = [];
    arr.map((el) => (newArray = newArray.concat(el.articles)));
    return newArray;
  };
  