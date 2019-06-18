






let userObj = (fname, lname) => {
  var firstName = fname;
  var lastname = lname;

  return {
    setFirstName: fname => {
      firstName = fname;
    },
    getFirstName: () => {
      return firstName;
    },
    setLastName: lname => {
      lastName = lname;
    },
    getLastName: () => {
      return lastname;
    }
  };
};
var ramesh = userObj("ramesh", "kumar");
ramesh.setFirstName("mohan");
console.log(ramesh.getFirstName());