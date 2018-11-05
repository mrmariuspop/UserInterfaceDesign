$("#form1").submit(function(e) {
    e.preventDefault();
});


function validateName() {
	var name = document.forms["myForm"]["fname"].value;

	if (name.length < 1) {
		document.getElementById("nameerror").innerHTML = "Name can not be empty";
		document.getElementById("nameerror").style.color = "red";

    }else{if (name.length < 3) {
		document.getElementById("nameerror").innerHTML = "Name can not have less than 3 characters";
		document.getElementById("nameerror").style.color = "red";

    }else{if(name.indexOf(' ') < 0)
	{
		document.getElementById("nameerror").innerHTML = "At least one space is required";
		document.getElementById("nameerror").style.color = "red";
	}else{
		document.getElementById("nameerror").innerHTML = "";
		document.getElementById("fname").style.color = "green";
	}} }	
	
	
	
}

function validateCard()
{
	var card = document.forms["myForm"]["card"].value;
	var only_digits = /^[0-9]*$/;
	
	if (card.length < 1) {
		document.getElementById("carderror").innerHTML = "Card can not be empty";
		document.getElementById("carderror").style.color = "red";

    }else
	{
		if (!only_digits.test(card))
	{
		document.getElementById("carderror").innerHTML = "Card must have has only digits";
		document.getElementById("carderror").style.color = "red";
		
	}
	else
	{
		if (card.length !== 12)
		{
			document.getElementById("carderror").innerHTML = "Card must have length 12 ";
			document.getElementById("carderror").style.color = "red";
		}
		else
		{
			document.getElementById("carderror").innerHTML = "";
		    document.getElementById("card").style.color = "green";
			
		}
	}
	}
	
	
	
	
}

function customEntry()
{
	var name = document.forms["myForm"]["fname"].value;
	var card = document.forms["myForm"]["card"].value;
	
	if (name === 'Petrica Pavelescu')
	{
		if (card === '012345678912')
		{
			document.getElementById("demo").innerHTML = "Payment processed  succesfully";
			document.getElementById("demo").style.color = "green";
		}else
		{
			document.getElementById("demo").innerHTML = "Invalid card information";
			document.getElementById("demo").style.color = "red";	
		}
		
	}else
		{
			document.getElementById("demo").innerHTML = "Invalid card information";
			document.getElementById("demo").style.color = "red";	
		}
	
}

function validateForm(){
	validateName();
	validateCard();
	customEntry();
	return false;
}