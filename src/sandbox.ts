type StringOrNum = string | number; //Defining my own type alias
type objWithName = {name: string, uid: StringOrNum}; //Another example of a type alias.

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: objWithName) => {
  console.log(`${user.name} says Hello!`);
}

