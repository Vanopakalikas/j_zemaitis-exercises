let person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Developer',
    location: 'New York'
  };
  
  function printPersonDetails() {
    for (let property in person) {
      console.log(`${property}: ${person[property]}`);
    }
  }
  
  printPersonDetails();