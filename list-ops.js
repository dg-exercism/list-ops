//
// This is only a SKELETON file for the 'List - Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values) {
    this.values = values || [];
  }

  append(toAdd) {
    if (toAdd.values.length) {
      this.values = [...this.values, ...toAdd.values]
    }
    return this
  }

  concat(toConcat) {
    if (toConcat.values.every(value => typeof value === 'object')) {
      const internalValues = toConcat.values.map(value => [...value.values]).flat()
      this.values = [...this.values, ...internalValues]
    } else if (toConcat.values.length) {
      this.values = [...this.values, ...toConcat.values]
    }
    return this
  }

  filter(condition = () => {}) {
    let returnValues = [];
    this.values.forEach(value => {
      condition(value) ? returnValues.push(value) : null
    });
    this.values = [...returnValues]
    return this
  }

  map(transformation = () => {}) {
    let returnValues = [];
    this.values.forEach(value => {
      returnValues.push(transformation(value))
    });
    this.values = [...returnValues];
    return this
  }

  length() {
    let count = 0;
    this.values.forEach(value => count++);
    return count
  }

  foldl() {
    throw new Error("Remove this statement and implement this function");
  }

  foldr() {
    throw new Error("Remove this statement and implement this function");
  }

  reverse() {
    throw new Error("Remove this statement and implement this function");
  }
}
