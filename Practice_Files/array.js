let users = [
  { id: 23, name: "vinay", city: "banglore", age: 21 },
  { id: 32, name: "sanjay", city: "chennai", age: 22 },
  { id: 24, name: "vinod", city: "mumbai", age: 34 },
  { id: 34, name: "mahesh", city: "pune", age: 30 },
  { id: 40, name: "dinesh", city: "banglore", age: 24 }
];

users
  .filter(users => {
    users.age < 30;
  })
  .map(users => {
    users.name + " " + users.age;
  })
  .sort()
  .forEach(name => {
    console.log(name);
  });
