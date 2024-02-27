function filterEmployees(employees, salary) {
  return employees.filter(employee => employee.salary > salary);
}

let employees = [
  { firstName: 'John', lastName: 'Doe', salary: 50000 },
  { firstName: 'Jane', lastName: 'Smith', salary: 60000 },
  { firstName: 'Jim', lastName: 'Brown', salary: 70000 },
  { firstName: 'Jill', lastName: 'Johnson', salary: 80000 }
];

let highEarners = filterEmployees(employees, 60000);
console.log(highEarners);  // Outputs: [{ firstName: 'Jim', lastName: 'Brown', salary: 70000 }, { firstName: 'Jill', lastName: 'Johnson', salary: 80000 }]