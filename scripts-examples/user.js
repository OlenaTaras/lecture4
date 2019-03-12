const user = {
    firstName: 'FirstName',
    lastName: 'LastName',
    greeting: function() {
        console.log(this.firstName, this.lastName)
    },
    get getFullname() {
      return this.firstName + ' ' + this.lastName
    },
    set setFullName(newFullName) {
        let fullName = newFullName.split(' ');
        this.firstName = fullName[0];
        this.lastName = fullName[1]
    }
};

console.log(user.getFullname);
user.setFullName = 'NewFirstName NewLastName';
console.log(user.getFullname);





