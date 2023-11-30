class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    if (typeof this.name === string) {
      return this._name;
    }
    throw new TypeError(`${this.name} must be a string.`);
  }

  set name(theName) {
    this.name = this.validateString(theName, 'name');
  }

  get length() {
    if (typeof this.length === Number) {
      return this._length;
    }
    throw new TypeError(`${this.length} must be a number.`);
  }

  set length(theLength) {
    this._length = this.validateNumber(theLength, 'length');
  }

  get students() {
    if (typeof this.students === Array) {
      return this._students;
    }
    throw new TypeError(`${this.students} must be an array`);
  }

  set students(theStudents) {
    this._students = this.validateArray(theStudents, 'students');
  }
}
export default HolbertonCourse;
