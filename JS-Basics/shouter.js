function shouter(whatToShout) {
  return `${whatToShout.toUpperCase()}!!!`
}

// tests

function testShouter() {
  const whatToShout = 'as you can hear i am whispering';
  const expected = 'AS YOU CAN HEAR I AM WHISPERING!!!';
  if (shouter(whatToShout) === expected) {
    console.log('SUCCESS: `shouter` is working');
  } else {
    console.log('FAILURE: `shouter` is not working');
  }
}

testShouter();

