$(document).ready(function() {
    
    // listens for 'click' event on element with "addButton" ID
	$('#addButton').on('click', function(event) {
		// gets the value of whatever was entered into input field with "newTask" ID
		var input = $('#newTask').val();
		// makes the input into a list item
		var newLI = $('<li>' + input + '</li>')
		// adds the new list item to the end of the unordered list with "list" ID
		$('#list').append(newLI);
	})

	// listens for 'click' event on element with "removeButton" ID
	$('#removeButton').on('click', function(event) {
		// 1) target list; 2) find all 'li' child elements; 3) get the last 'li' element; 4) remove that 'li'
		$('#list').find('li').last().remove();
	})

})