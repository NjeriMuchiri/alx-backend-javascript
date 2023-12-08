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
