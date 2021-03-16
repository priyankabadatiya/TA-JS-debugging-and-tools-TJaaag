function fullName(firstName, lastName) {
    let fullName = firstName + lastName;
    return fullName;
}
let result = fullName("Priyanka", "Badatiya");
let expected = "Priyanka Badatiya"
if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}
let finalName = fullName("Priyanka", "Badatiya");
let expect = "PriyankaBadatiya";

let finlName = fullName("Priyanka", "Badatiya");
if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
}

function totalAmount(amount, taxRate) {
    let totalAmount = amount + (amount * taxRate);
    return totalAmount;
}
let result = totalAmount(2, 4);
let expected = 9;
if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}
let finalNum = totalAmount(2, 4);
let expect = 10;

let finalNumber = totalAmount(2, 4);
if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
}