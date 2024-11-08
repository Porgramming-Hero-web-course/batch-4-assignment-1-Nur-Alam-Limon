function getProperty(obj: any, key: string): any {
  return obj[key];
}

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
