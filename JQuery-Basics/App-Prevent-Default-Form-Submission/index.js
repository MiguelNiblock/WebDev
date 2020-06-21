$(function() {
  $('.js-form').submit(event => {
    // this stops the default form submission behavior
    event.preventDefault();
    const userTextElement = $(event.currentTarget).find('#user-text');
    $(".js-display-user-text").text(`user text is:  ${userTextElement.val()}`);
    userTextElement.val("");
  });  
})

