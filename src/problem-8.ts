function validateKeys(obj: any, keys: string[]): boolean {
  for (let i = 0; i < keys.length; i++) {
    if (!(keys[i] in obj)) {
      return false;
    }
  }
  return true;
}

const personData = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(personData, ["name", "age"]));
