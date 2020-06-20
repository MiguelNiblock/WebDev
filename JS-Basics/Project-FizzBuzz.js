let fizzBuzz = countTo => {
  // your code here

  let isDivisible = num => {
        if ((num % 3 == 0)&&(num % 5 === 0)) {return 'fizzbuzz'}
    else if (num % 3 === 0) {return 'fizz'}
    else if (num % 5 === 0) {return 'buzz'}
    else {return num}
  };

  array = [];

  for (let i = 1; i <= countTo; i++) {
    array.push(isDivisible(i))
  };

  return array
};

/* From ere down, youare ot expected t s
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests
(function testFizzBuzz() {
  // we'll use the variables in our test cases
  const countTo = 16;
  const expected = [
    1,
    2,
    'fizz',
    4,
    'buzz',
    'fizz',
    7,
    8,
    'fizz',
    'buzz',
    11,
    'fizz',
    13,
    14,
    'fizzbuzz',
    16,
  ];

  const actual = fizzBuzz(countTo) || [];

  if (
    expected.length === actual.length &&
    expected.every(function(item, index) {
      return actual[index] === item;
    })
  ) {
    console.log('SUCCESS: fizzBuzz is working');
  } else {
    console.log('FAILURE: fizzBuzz is not working');
  }
})();

