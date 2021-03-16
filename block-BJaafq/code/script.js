function sum(numA, numB) {
    let sum = numA + numB;
    return sum;
}

function test(message, callback) {
    try {
        callback()
        console.log("success", message)
    } catch (error) {
        console.log(error)
    }
}


function sumTest() {
    let result = sum(5, 6);
    let expected = 10

    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`)
    }
}

function sumTest2() {
    let result = sum(5, 5);
    let expected = 10

    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`)
    }
}

function sumTest3() {
    let result = sum(5, 3);
    let expected = 11

    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`)
    }
}

function sumTest4() {
    let result = sum(5, 10);
    let expected = 15;

    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`)
    }
}

function sumTest5() {
    let result = sum(5, 9);
    let expected = 10

    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`)
    }
}

test('adding two number', sumTest)
test('adding two number', sumTest2)
test('adding two number', sumTest3)
test('adding two number', sumTest4)
test('adding two number', sumTest5)

// multiply
function multiply(numA, numB) {
    let multiply = numA * numB;
    return multiply;
}


function multiplyTest() {
    let result = multiply(5, 6);
    let expected = 30

    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`)
    }
}

function multiplyTest2() {
    let result = multiply(5, 5);
    let expected = 10

    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`)
    }
}

function multiplyTest3() {
    let result = multiply(5, 3);
    let expected = 15

    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`)
    }
}

function multiplyTest4() {
    let result = multiply(5, 10);
    let expected = 15;

    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`)
    }
}

function multiplyTest5() {
    let result = multiply(5, 9);
    let expected = 45

    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`)
    }
}

test('multiplying two number', multiplyTest2)
test('multiplying two number', multiplyTest)
test('multiplying two number', multiplyTest3)
test('multiplying two number', multiplyTest4)
test('multiplying two number', multiplyTest5)