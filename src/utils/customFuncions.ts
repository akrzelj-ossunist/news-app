export const concatArrayOfArray = (arr: any[]): any[] => {
    let newArray: any[] = [];
    arr.map((el) => (newArray = newArray.concat(el.articles)));
    return newArray;
  };
  
  export const isInArray = (arr: any[], el: any): number => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].title === el) return i;
    }
    return -1
  }