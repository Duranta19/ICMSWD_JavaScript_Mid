function parseString(...params) {
    let isAllNumbers = true;
    let result;
  
    for (const param of params) {
      if (isNaN(Number(param))) {
        isAllNumbers = false;
        break;
      }
    }
  
    if (isAllNumbers) {
      result = params.reduce((sum, param) => sum + Number(param), 0);
    } else {
      result = params.join(' ');
    }
  
    return result;
  }

  console.log(parseString("21", "24", "40"));     
  console.log(parseString("Hello", "Alpha"));     
  console.log(parseString("Summer", "2022"));  