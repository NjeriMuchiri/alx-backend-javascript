interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const studentOne: Student = {
    firstName: "Ann",
    lastName: "Muchiri",
    age: 24,
    location: "London",
  };
  
  const studentTwo: Student = {
    firstName: "Ken",
    lastName: "Kamau",
    age: 27,
    location: "SouthAfrica",
  };
  
  const studentsList: Student[] = [studentOne, studentTwo];
  
  const table = document.createElement("table");
  
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
  
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });
  
  document.body.appendChild(table);
  
  console.log("No type errors found.");