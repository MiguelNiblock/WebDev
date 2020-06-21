// your code here


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

function isFizzBuzz(seqItem) {
  if (seqItem === 'fizz') {return 'fizz'}
  else if (seqItem === 'buzz') {return 'buzz'}
  else if (seqItem === 'fizzbuzz') {return 'fizzbuzz'}
}

function fizzBuzzGen() {

  console.log('function is running');

  $('#number-chooser').submit(function(e) {

    $(".js-results").empty();
    
    console.log('callback triggered');

    e.preventDefault();
    
    const countTo = $(this).find('#number-choice').val();

    console.log(countTo);

    let sequence = fizzBuzz(countTo);

    console.log(sequence);

    sequence.forEach(seqItem =>

      $('.js-results').append(
      `<div class="fizz-buzz-item ${isFizzBuzz(seqItem)}">
        <span>${seqItem}</span>
      </div>`
      )
    
    );
    

  });
}

$(fizzBuzzGen);