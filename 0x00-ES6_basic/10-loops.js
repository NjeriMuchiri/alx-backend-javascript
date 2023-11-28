export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    this.arrayList = [];
    value = appendString + value;
    this.arrayList.push(value);
  }
  return array;
}
