$(document).ready(function () {
    $('#task-input').hide();
    $('#add-task-btn').on('click', function () {
        $('#task-input').toggle(300);
    })

    // Add task on submit or enter key press

    function addTask(e) {
        var inputVal = $('#input').val();
        if (inputVal !== '') {
            // Create a new list item element
            var tasks = $('<li class="text-slate-400 flex items-center justify-between template"><div class="flex items-center gap-5"><i class="fa-regular fa-circle text-xs text-purple-400 hover:font-semibold" id="other-opt"></i><h3 class="font-medium">' + inputVal + '</h3></div></li>');

            // Append the list item to the task list
            $('ul').append(tasks);

            // Add options 
            var options = $('<div class="options flex gap-x-4 items-end" id="more-opt"></div>');
            tasks.append(options); // Append options to the newly created task

            // Done Btn 
            var doneBtn = $('<button class="submit" id="submit-opt"><i class="fa-solid fa-check text-lg text-purple-400 cursor-pointer" id="done-opt"></i></button>').click(function () {
                var doneOpt = $(this).closest('li').toggleClass('done');
            });
            options.append(doneBtn); 

            // Edit Btn with functionality
    var editBtn = $('<button class="Edit outline-none" id="submit-opt"><i class="fa-regular fa-pen-to-square text-lg text-purple-400 cursor-pointer" id="done-opt"></i></button>').click(function() {
        var taskItem = $(this).closest('li');  // Get the task list item
        var taskText = taskItem.find('h3').text(); // Get the current task text
  
        // Toggle view/edit mode
        taskItem.find('h3').prop('contenteditable', true); // Enable editing
        taskItem.find('h3').focus(); // Set focus on the task text
  
        // Handle edit confirmation
        taskItem.find('h3').on('blur keyup', function(e) { // Handle blur (click outside) or Enter key
          if (e.type === 'keyup' && e.keyCode !== 13) return; // Ignore non-Enter keyup events
  
          var newTaskText = $(this).text(); // Get the edited value
          taskItem.find('h3').prop('contenteditable', false); // Disable editing
          taskItem.find('h3').text(newTaskText); // Update the task text
        });
      });
      options.append(editBtn); // Append edit button to options
    
            // Delete Btn
            var deleteBtn = $(' <button><i class="fa-solid fa-trash-can text-purple-400 cursor-pointer"></i></button>').click(function () {
                var deleteOpt = $(this).closest('li').fadeOut(500);
            });
            options.append(deleteBtn); 

            // Clear input field
            $('#input').val('');
        }
    }

    // Function Calling for appending
    $('#submit-btn').on('click', addTask);
    $('#input').on('keyup', function (e) {
        if (e.keyCode === 13) {
            addTask(e);
        }
    });
})






