
// toggle between grid and list

function toggle() {
	var x = document.getElementById('container-content');	
	
	if (x.className === 'list') {
		x.className = 'grid';	
	} else {
		x.className = 'list';
	}
}

// dropdown menu, show-hide

var x = document.getElementsByClassName('icon');
var y = document.getElementsByClassName('dropdown-menu');

d = x.length;
var i;
var m;
var countBlock= 0;


for (i=0; i<d; i++) {		
		x[i].setAttribute("id", i);				 
}	


function dropdownMenu() {		
	
	
	var i = window.event.target.id;	

	// show hide logic for dropdown

	if (y[i].style.display === 'block') {		
		y[i].style.display = 'none';

			

		countBlock -= 1;	
					
	} else {
				
		// for block 

		countBlock += 1;				
	
		// to be open only one  
		if (countBlock >1) {
			for (m=0; m<d; m++) {
				y[m].style.display = 'none';
			}
			countBlock -= 1;			
		}
				
		// end of else   
		y[i].style.display = 'block';	

								
		}
}

		
// close menu outside

window.onclick = function(event) {

	if (!event.target.matches('.icon')) {

		for (i=0; i<d; i++) {	
			if (y[i].style.display === 'block') {							
				y[i].style.display = 'none';	

									
			}
		}
	}
}


	
