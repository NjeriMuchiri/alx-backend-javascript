interface TheTeacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }
  
  class Teacher {
    private readonly firstName: string;
    private readonly lastName: string;
    private readonly fullTimeEmployee: boolean;
    private readonly location: string;
    private yearsOfExperience?: number;
    [key: string]: any;
  
    constructor(attributes: TheTeacher) {
      this.firstName = attributes.firstName;
      this.lastName = attributes.lastName;
      this.fullTimeEmployee = attributes.fullTimeEmployee;
      this.location = attributes.location;
      this.yearsOfExperience = attributes.yearsOfExperience;
  
      Object.keys(attributes).forEach((key) => {
        if (
          key !== 'firstName' &&
          key !== 'lastName' &&
          key !== 'fullTimeEmployee' &&
          key !== 'location' &&
          key !== 'yearsOfExperience'
        ) {
          this[key] = attributes[key];
        }
      });
    }
  }
  
  const teacher = new Teacher({
    firstName: 'Ann',
    lastName: 'Kamau',
    fullTimeEmployee: true,
    location: 'Nairobi',
    yearsOfExperience: 5,
    contract: true,
  });

  interface Directors extends TheTeacher {
    numberOfReports: number;
  }
  
  const directorOne: Directors = {
    firstName: 'Ken',
    lastName: 'Kamau',
    fullTimeEmployee: true,
    location: 'Nairobi',
    numberOfReports: 17,
  };
  
  console.log(directorOne);
  

interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    const firstLetter = firstName.charAt(0).toUpperCase();
    const fullName = `${firstLetter}. ${lastName}`;
    return fullName;
  };
  
  const result = printTeacher("John", "Doe");
  console.log(result);


  interface StudentInterface {
    new (firstName: string, lastName: string): StudentClass;
  }
  
  class StudentClass implements StudentInterface {
    private firstName: string;
    private lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  const student = new StudentClass('Leyla', 'Kamau');
  console.log(student.workOnHomework());
  console.log(student.displayName());