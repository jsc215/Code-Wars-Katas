var isAnagram = function(test, original) {
  if (test.length !== original.length) {
    return false;
	};

	let sortedTest = test.toLowerCase().split('').sort().join('')
	let sortedOrig = original.toLowerCase().split('').sort().join('')

	return sortedTest === sortedOrig
}
