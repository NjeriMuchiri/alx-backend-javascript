class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(theCode) {
    this._code = this.validateString(theCode, 'code');
  }

  get name() {
    return this.name;
  }

  set name(theName) {
    this.__name = this.validateString(theName, 'name');
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  validateString(value, attribute) {
    if (typeof this.value !== 'string') {
      throw new TypeError(`${attribute} must be a string.`);
    }
    return value;
  }
}
export default Currency;
