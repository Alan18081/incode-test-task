export const nestedSearch = (object,query) => {
  let isThere = false;
  for(let prop in object) {
    if(object.hasOwnProperty(prop)) {
      if(typeof object[prop] === 'object') {
        isThere = nestedSearch(object[prop],query);
        if(isThere) {
          break;
        }
      }
      else if(object[prop].indexOf(query) !== -1) {
        isThere = true;
        break;
      }
    }
  }
  return isThere;
};