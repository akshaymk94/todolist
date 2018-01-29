$(document).ready(function() {
    
    var pending = 0;
    var completed = 0;
    
    function trackCount() {
        var total = $('.newListItem').length;
        completed = $('input.newCheckBox:checked').length;
        pending = total-completed;
        displayCounts();
    }
    
    function displayCounts() {
        $('#countPending').html(pending);
        $('#countCompleted').html(completed);
    }
    
    $('body') .on('click', '.btnSubmit', function() {
        
           var newText = $('#textInput').val();
            $('<li class="newListItem"><strong class="taskValue">' + newText + '</strong></li>').appendTo('.list');
            $('#textInput').val(null);
            trackCount();
        
    });
    
    $('body').on('click','.taskValue', function() {
        /*var oldText = $(this).text();
        alert(oldText);
        var edited = window.prompt("Edit your task:",oldText);
        if(edited == null) {
            $(this).html(oldText);
        }
        else {
            $(this).html(edited);
        }*/
        
        $(this).hide();
        $('<form class="formUpdateTask"></form>').appendTo($(this).parent());
        $('<input type="text" id="textUpdateTask">').appendTo('.formUpdateTask');
        $('<button type="button" class="btnSave">Save</button>').appendTo('.formUpdateTask');
        $('<button type="button" class="btnCancel">Cancel</button>').appendTo('.formUpdateTask');
        $('.formUpdateTask').show();
        
        
    });
    
    $('body').on('click','.btnSave',function() {
        var updatedTask = $('#textUpdateTask').val();
        $(this).parent().prev().html(updatedTask);
        $('.formUpdateTask').remove();
        $('.taskValue').show();
    });
});