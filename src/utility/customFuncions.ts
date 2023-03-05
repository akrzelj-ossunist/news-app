export const concatArrayOfArray = (arr: any[]): any[] => {
    let newArray: any[] = [];
    arr.map((el) => (newArray = newArray.concat(el.articles)));
    return newArray;
  };
  
  export const isInArray = (arr: any[], el: any): boolean => {
    arr.map(e => { if(JSON.stringify(e) === JSON.stringify(el)) return true })
    return false
  }