function deleteItem() {

  $('.shopping-list').on('click','.shopping-item-delete',function(e){

    console.log('deleteItem function triggered')

    e.stopPropagation();

    let item = $(this).parent().siblings('.shopping-item').text()

    console.log(`item deleted: ${item}`)

    $(this).parents('li').remove()
  })

}

function checkItem() {
  $('.shopping-list').on('click','.shopping-item-toggle',function(e){

    console.log('checkItem function triggered')

    e.stopPropagation();
    
    let item = $(this).parent().siblings('.shopping-item').text()

    console.log(`item checked: ${item}`)

    $(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked')

  })
}


function addItem() {

  $('#js-shopping-list-form').submit(function(e){

    console.log('addItem function triggered')

    e.preventDefault();
    
    let item = $(this).find('.js-shopping-list-entry').val()

    console.log(`New item: ${item}`)

    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    )

  })
}


function ShoppingList() {

  console.log('ShoppingList running')

  addItem()

  checkItem()

  deleteItem()

}

$(ShoppingList);