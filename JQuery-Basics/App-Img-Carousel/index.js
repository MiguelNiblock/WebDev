$('.thumbnail').on('click', function(e) {

  let img = $(this).children()
  let newAlt = $(img).prop('alt')
  let newSrc = $(img).prop('src')
  
  // console.log(newAlt);
  // console.log(newSrc);
  // console.log($('.hero img').prop('src')
  
  $('.hero img').attr('src',newSrc)
  $('.hero img').attr('alt',newAlt)
  )
});
