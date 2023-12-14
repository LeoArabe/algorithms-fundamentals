const employees = [
    { name: 'Leandro Aragão' , age: 25 , salary: 4000 },
    { name: 'Adriana Aragão' , age: 48 , salary: 3500 },
    { name: 'Bianca Aragão' , age: 27 , salary: 6500 },
    { name: 'Matheus Aragão' , age: 23 , salary: 3500 }, 
];

const salaryDeductions = employees.map(employee => ({
    name: employee.name,
    age: employee.age,
    salary: employee.salary,
    netSalary: employee.salary * 0.9,
}));

salaryDeductions.forEach(employee => {
    console.log('-------------------------------------------------');
    console.log(`${employee.name}: salário bruto R$${employee.salary},00\n
               salário liquido R$${employee.netSalary},00`)
    });

