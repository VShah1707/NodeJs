const hobbies = ['Sports', 'Readings', true, false]
for (let i of hobbies) {
    console.log(i);
}
// map, forEach, filter, etc

// Spread Operators
const copiedObj = { ...hobbies }
const newArray = ['valshil', ...hobbies]
// console.log(newArray);
// console.log(copiedObj);



// Rest Operators
const array = (...b) => {
    return b
}
// console.log(array(1,2,3));



// Destructuring
const person = {
    name: 'Varshil',
    age: 23,
    number: 123456,
    greet() {
        console.log('Hi there!!', this.name)
    }
}

// const { name, greet } = person
// console.log(name);
// greet()

