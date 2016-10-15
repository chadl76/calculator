
$(document).ready(function(){

		
	
	var total = $(".screen");
    var number = "";
    var newNumber = "";
    var operator = "";

	$(".digit").on("click", function(){
		//checks to make sure number doesn't exceed screen width
		if(number.length > 7){
			number = "ERR";
			total.text(number);
				}

		
		//gets values and inputs to console & screen;
		number = number + $(this).text();
		total.text(number);
		console.log(number);
		})
	//gets addition operator and stores value in new variable & logs new variable
	$(".plus").on("click", function(){
		operator = $(this).text();
		newNumber = number;
		number = "";
		console.log(newNumber);
		})
	//checks to see if subtraction button press and stores value in new variable
	$(".minus").on("click", function(){
		operator = $(this).text();
		newNumber = number;
		number = "";
		})
	//checks if = sign is clicked and evalutes the two integers
	$(".equals").on("click", function(){
		//changes string into integers for evalutation
		number = parseInt(number);
		newNumber = parseInt(newNumber);
			if(operator === "+"){
				var answer = number + newNumber;
					if(answer =="80085"){
						answer = "NO";
						}
							total.text(answer);
							console.log(answer);
			}
			if(operator === "-"){
				var answer = newNumber - number;
				total.text(answer);
				console.log(answer);
			}
	})
	//when clear button pressed erase the current number
	$(".clear").on("click", function(){
		number = "";
		total.text()
	})
	//clears all numbers and replaces screen w/ "0"
	$(".allClear").on("click", function(){
		number = "";
		newNumber = "";
		total.text("0");
	})
})

