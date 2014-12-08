// window.onload = function(){

// Variables//////////////

	var blackHole = document.getElementById("Black Hole");
	var matt = document.getElementById("Matt");
	var earth = document.getElementById("Earth");
	var player = document.getElementById("player");
	var h3 = document.getElementsByTagName("h3")[0];
	var win_column = document.getElementById("win");
	var tie_column = document.getElementById("tie");
	var loss_column = document.getElementById("loss");
	var blackHoleImg = "img/blackhole.jpg";
	var mattImg = "img/matt.png";
	var earthImg = "img/earth.png";
	var win_counter = 0;
	var loss_counter = 0;
	var tie_counter = 0;

// Functions/////////////


	window.delayedAlert = function() {
  		timeoutID = window.setTimeout(slowAlert, 1000);
	};


	window.rando = function(min, max) {
	  return Math.floor(Math.random() * (max - min) + min);
	};

	 window.outcome = function() {
		var num = rando(1, 4);
		var result = "";
		if (num == 1) {
			result = "You Lose!";
			loss_counter += 1;
			loss_column.innerHTML = loss_counter.toString();
		}
		else if (num == 2){
			result = "Tie";
			tie_counter += 1;
			tie_column.innerHTML = tie_counter.toString();
		}
		else if (num == 3){
			result = "You Win!";
			win_counter += 1;
			win_column.innerHTML = win_counter.toString();
		}
		return result;
	};


	blackHole.addEventListener("click", function(){
		var outcomeText = outcome();
		comp.src = "";
		player.src = blackHoleImg;
		h3.innerHTML = outcomeText;
		if (outcomeText == "You Lose!"){
			comp.src = mattImg;
		}
		else if (outcomeText == "You Win!"){
			comp.src = earthImg;
		}
		else if (outcomeText == "Tie"){
			comp.src  = blackHoleImg;
		}
	});

	matt.addEventListener("click", function(){
		var outcomeText = outcome();
		player.src = mattImg;
		h3.innerHTML = outcomeText;
		if (outcomeText == "You Lose!"){
			comp.src  = earthImg;
		}
		else if (outcomeText == "You Win!"){
			comp.src = blackHoleImg;
		}
		else if (outcomeText == "Tie"){
			comp.src  = mattImg;
		}
	});

	earth.addEventListener('click', function(){
		var outcomeText = outcome();
		player.src = earthImg;
		h3.innerHTML = outcomeText;
		if (outcomeText == "You Lose!"){
			comp.src  = blackHoleImg;
		}
		else if (outcomeText == "You Win!"){
			comp.src = mattImg;
		}
		else if (outcomeText == "Tie"){
			comp.src  = earthImg;
		}
	});


// };