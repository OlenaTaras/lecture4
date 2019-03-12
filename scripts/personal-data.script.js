console.log(usersData);

class UserInfo {
    constructor(user) {
        this.fullName = user.fullName;
        this.age = user.age;
    }

    parseFullName() {
        let names = {};
        names.firstName = this.fullName.split(' ')[0];
        names.lastName = this.fullName.split(' ')[1];
        return names
    }
}

let OlenaInfo = new UserInfo({fullName: 'Olena Taras', age: 16});

console.log(OlenaInfo);
console.log(OlenaInfo.parseFullName());

function getUserByIndex(data, index) {
    return _.find(data, {'index': Number(index)})
}

let currentUser = new UserInfo(getUserByIndex(usersData.items, 1));

console.log(currentUser);
