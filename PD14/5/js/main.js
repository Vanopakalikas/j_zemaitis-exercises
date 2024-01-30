let salary = [824.25, 1225.12, 459.16, 1500];

for (let i = 0; i < salary.length; i++) {
    if (salary[i] <= 1000) {
        salary[i] += salary[i] *= 0.05
    }
    else {
        salary[i] += salary[i] *= 0.1
    }
}

console.log(salary);