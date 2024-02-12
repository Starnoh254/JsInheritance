let person = {
    firstName : "John",
    lastName : "Doe"
}

console.log(person.firstName)
console.log(person.lastName)

console.log(person['firstName'])
console.log(person['lastName'])

let address = {
    'building no' : 3960,
    street : 'North 1st Street',
    state : 'CA',
    country : 'USA'
}

console.log(address["building no"])
// console.log(address.toString())

person.firstName = 'Jane'
person.age = 25
delete person.age

console.log('lastName' in person)
console.log(person)