function factorial(num) {
	if (num <= 1) {
		return num;
	}
	return num * factorial(num - 1);
}

console.log(factorial(3));

// 5 is not equal to one
//  return 5 times factorial(4)
//      4 is not equal to one
//          return 4 * factorial (3)
//              3 is not equal to one
//                  return 4 * factorial(2)
//                      2 is not equal to one
//                          return 2 * factorial(1)
//                              1 is equal to one
//                              pass up 1
//                          pass up 2 * 1
//                      pass up 3 * 2 (6)
//                  pass up 4 * 6 (24)
//              pass up 24 * 5 (120)
