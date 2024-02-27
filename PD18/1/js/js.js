let student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    getFullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  };
  
  console.log(student.getFullName());  // Outputs: "John Doe"