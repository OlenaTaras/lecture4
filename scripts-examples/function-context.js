
function showFullName() {
    // console.log(this);
    return this.firstName + ' ' + this.lastName
}

function User(firstName, lastName, middleName = '') {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
}

let OlenaTaras = new User('Olena', 'Taras', 'Gennadiivna');
let result = showFullName.call(OlenaTaras);
console.log(result);


function showName(firstPart, secondPart) {
    // console.log(this);
    return this[firstPart] + ' ' + this[secondPart]
}

result = showName.call(OlenaTaras, 'firstName', 'middleName');
console.log(result);

result = showName.apply(OlenaTaras, ['firstName', 'middleName']);
console.log(result);

// Одалживание методов

// Spread rest

