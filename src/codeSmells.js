function func1() {
let arr = ["a", "b", "c"];

let expectedValue = "b";
if (expectedValue in arr) { // Noncompliant, will be always false
    return expectedValue + " found in the array";
} else {
    return expectedValue + " not found";
}
}

func1();