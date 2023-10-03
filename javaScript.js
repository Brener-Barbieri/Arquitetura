var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("list-menu");

menuButton.addEventListener("click", function() {
  if (menu.style.display === "block"){
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

var elms = document.getElementsByClassName( 'splide' );

for ( var i = 0; i < elms.length; i++ ) {
  new Splide( elms[ i ],{grid: {
		rows: 2,
		cols: 5,
    gap : {
			row: '1.5rem',
			col: '1.5rem',
		},
  } }).mount(window.splide.Extensions );
}


