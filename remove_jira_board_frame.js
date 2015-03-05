alert("Removing the Frame!");

var page = document.getElementById("page");
var the_board = document.getElementById("ghx-pool-column");

page.innerHTML = the_board.innerHTML;

// removing names of the columns (breaks scrolling);
document.getElementById('ghx-column-header-group').outerHTML='';
