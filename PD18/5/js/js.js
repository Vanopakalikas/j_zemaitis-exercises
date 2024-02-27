function filterProperties(obj) {
    let newObj = {};
    for (let property in obj) {
      if (obj[property] > 10) {
        newObj[property] = obj[property];
      }
    }
    return newObj;
  }
  
  let originalObj = {
    a: 5,
    b: 15,
    c: 20,
    d: 8
  };
  
  let filteredObj = filterProperties(originalObj);
  console.log(filteredObj);  // Outputs: { b: 15, c: 20 }