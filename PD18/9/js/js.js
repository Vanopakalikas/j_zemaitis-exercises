let calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return 'Error: Division by zero';
    }
  },
  addModule: function(name, operation) {
    this[name] = operation;
  }
};

// Add sin operation as a module
calculator.addModule('sin', Math.sin);

// Add cos operation as a module
calculator.addModule('cos', Math.cos);

// Add log operation as a module
calculator.addModule('log', Math.log);

console.log(calculator.sin(Math.PI / 2));  // Outputs: 1
console.log(calculator.cos(Math.PI));  // Outputs: -1
console.log(calculator.log(1));  // Outputs: 0