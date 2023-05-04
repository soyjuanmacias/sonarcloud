function func1() {
	const arr = ['a', 'b', 'c'];

	const expectedValue = 'b';
	if (expectedValue in arr) { // Noncompliant, will be always false
		return expectedValue + ' found in the array';
	}

	return expectedValue + ' not found';
}

func1();
