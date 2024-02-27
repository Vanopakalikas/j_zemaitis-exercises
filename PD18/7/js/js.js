function copyObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}

let originalObj = {
  name: 'John',
  age: 30,
  occupation: 'Software Developer'
};

let copiedObj = copyObject(originalObj);

copiedObj.name = 'Jane';  // Change a property in the copied object

console.log(originalObj);  // Outputs: { name: 'John', age: 30, occupation: 'Software Developer' }
console.log(copiedObj);  // Outputs: { name: 'Jane', age: 30, occupation: 'Software Developer' }