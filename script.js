function sortTable(n) {
var table = document.getElementById("dlc_request_table");
var rows;
var i, x, y, count = 0;
let switching = true;
var direction = 'descending';
while (switching) {
    switching = false;
    let rows = table.rows;
    for(i=0; i<rows.length-1; i++) {
        var Switch=false;

        x = rows[i].getElementsByTagName('TD')[n];
        y = rows[i + 1].getElementsByTagName('TD')[n];

        if (direction == 'ascending') {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                Switch = true;
                break;
            }
        }
        else if (direction == 'descending') {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                Switch = true;
                break;
            }
        }
    }
if (Switch) {
    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    switching = true;
    count++;
} else {
          if (count == 0 && direction == 'ascending') {
            direction = 'descending';
            switching = true;
            }
        }
    }
}