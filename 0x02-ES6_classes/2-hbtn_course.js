class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name, 'name');
    this._length = this.validateNumber(length, 'length');
    this._students = this.validateArray(students, 'students');
  }

  get name() {
    return this._name;
  }

  set name(theName) {
    this._name = this.validateString(theName, 'name');
  }

  get length() {
    return this._length;
  }

  set length(theLength) {
    this._length = this.validateNumber(theLength, 'length');
  }

  get students() {
    return this._students;
  }

  set students(theStudents) {
    this._students = this.validateArray(theStudents, 'students');
  }

  validateString(value, attribute) {
    if (typeof this.value !== 'string') {
      throw new TypeError(`${attribute} must be a string.`);
    }
    return value;
  }

  validateNumber(value, attribute) {
    if (typeof this.value !== 'number') {
      throw new TypeError(`${attribute} must be a number.`);
    }
    return value;
  }

  validateArray(value, attribute) {
    if (!Array.isArray(this.value)) {
      throw new TypeError(`${attribute} must be an array.`);
    }
    return value;
  }
}
export default HolbertonCourse;
