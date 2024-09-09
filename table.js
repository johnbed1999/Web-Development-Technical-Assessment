//Generate rows

$('#row-num-button').on('click', generate);

function generate(e) {
    var rows = $('#table-row-num').val();
    var html = '';
    for (var i = 0; i < rows; i++) {
        html += '<tr id="rows">' +
            '<td>' + (i + 1) + '</td>' +
            '<td><input type="text" placeholder="Enter name..."></td>' +
            '<td><select><option>Choice 1</option><option>Choice 2</option><option>Choice 3</option><option>Choice 4</option><option>Choice 5</option><option>Choice 6</option></select></td>' +
            '<td><input type="text" placeholder="Enter offset..."></td>' +
            '<td><input type="text" placeholder="Enter value..."></td>' +
            '<td><select><option>Choice 1</option><option>Choice 2</option><option>Choice 3</option></select></td>' +
            '<td><select><option>Choice 1</option><option>Choice 2</option><option>Choice 3</option><option>Choice 4</option><option>Choice 5</option></select></td>' +
            '<td><select><option>Choice 1</option><option>Choice 2</option><option>Choice 3<option>Choice 4</option></option></select></td>' +
            '<td><div class="auto-container"><span class="auto-text">Manual</span><input type="checkbox" class="auto-checkbox"></div></td>' +
            '</tr>';
    }
    $('#table-gen tbody').html(html);

    //Auto and manual text next to checkbox

    $('.auto-checkbox').on('change', function() {
        var textSpan = $(this).siblings('.auto-text');
        if (this.checked) {
            textSpan.text('Auto');
        } else {
            textSpan.text('Manual');
        }
    });
}

//Highlight disabled rows

$('#enabled-row-button').on('click', highlight);

function highlight() {
    var enabledRows = parseInt($('#enabled-rows').val(), 10);
    var rows = $('#table-gen tbody tr');
    
    //Iterate over rows

    rows.each(function(index) {
        if (index >= enabledRows) {
            $(this).css('background-color', 'yellow');
        } else {
            $(this).css('background-color', '');
        }
    });
}