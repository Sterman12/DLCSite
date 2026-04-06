function sortTable(n) {
let table = document.getElementById("dlc_request_table");
let rows;
let i, x, y, count = 0;
let switching = true;
let direction = 'descending';
while (switching) {
    switching = false;
    rows = table.rows;
    for(i=1; i<rows.length-1; i++) {
        Switch = false;

        x = rows[i].getElementsByTagName('TD')[n];
        y = rows[i + 1].getElementsByTagName('TD')[n];
        if ((y === undefined) || (x === undefined)) {break;} // added break statement prevent reading of undefined
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
function sortTableTime(n) {
let table = document.getElementById("dlc_request_table");
let rows;
let i, x, y, count = 0;
let switching = true;
let direction = 'descending';
while (switching) {
    switching = false;
    rows = table.rows;
    for(i=1; i<rows.length-1; i++) {
        Switch = false;

        x = rows[i].getElementsByTagName('TD')[n];
        y = rows[i + 1].getElementsByTagName('TD')[n];

        if ((y === undefined) || (x === undefined)) {break;} // added break statement prevent reading of undefined
        if (direction == 'ascending') {
            if (Date.parse(x.innerHTML) > Date.parse(y.innerHTML)) {
                Switch = true;
                break;
            }
        }
        else if (direction == 'descending') {
            if (Date.parse(x.innerHTML) < Date.parse(y.innerHTML)) {
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
function hideColumn(tableID, columnNumber) {
let tableObj = document.getElementById(tableID);
let rows = tableObj.rows[columnNumber];
for (i=1; i<rows.length-1; i++) {
let x = rows[i].getElementsByTagName('TD');
if (x.style.display === "none") {
    columns.style.display = "block"
    break;
}
else if (x.style.display === "block") {
    columns.style.display = "none"
    break;
}
}
}