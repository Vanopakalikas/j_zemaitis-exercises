function areObjectsEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

let obj1 = {
  name: 'John',
  age: 30,
  occupation: 'Software Developer'
};

let obj2 = {
  name: 'John',
  age: 30,
  occupation: 'Software Developer'
};

console.log(areObjectsEqual(obj1, obj2));  // Outputs: true