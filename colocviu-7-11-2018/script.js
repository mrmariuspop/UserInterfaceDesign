$("#form1").submit(function(e) {
    e.preventDefault();
});

	var error = 0;
	
function validateFirstName() {
	var name = document.forms["myForm"]["fname"].value;
	

	
	if (name.length < 3) {
		
		document.getElementById("fnamelbl").style.color = "red";
		document.getElementsByName("aux")[0].style.backgroundColor = "red";
		document.getElementsByName("aux")[0].style.color = "white";
		error = 1;

    }else
	{
		if ((/\d/.test(name)))
	{
		document.getElementById("fnamelbl").style.color = "red";
		document.getElementsByName("aux")[0].style.backgroundColor = "red";
		document.getElementsByName("aux")[0].style.color = "white";
		error = 1;
		
	}
	else
	{
		document.getElementById("fnamelbl").style.color = "black";
		document.getElementsByName("aux")[0].style.backgroundColor = "white";
		document.getElementsByName("aux")[0].style.color = "black";
		error = 0;
	}
	
	}
	
	
	
	
	
	
	
}

function validateLastName() {
	var name = document.forms["myForm"]["lname"].value;
	var only_digits = /^[0-9]*$/;

	if (name.length < 3) {
		
		document.getElementById("lnamelbl").style.color = "red";
		document.getElementsByName("aux1")[0].style.backgroundColor = "red";
		document.getElementsByName("aux1")[0].style.color = "white";
		error = 1;

    }else
	{
		if ((/\d/.test(name)))
	{
		document.getElementById("lnamelbl").style.color = "red";
		document.getElementsByName("aux1")[0].style.backgroundColor = "red";
		document.getElementsByName("aux1")[0].style.color = "white";
		error = 1;
		
	}	
	}
	

	
	
	
	
	
		
	
	
	
}

function validateEmail() {
	var email = document.forms["myForm"]["email"].value;
	var n = email.indexOf('@');
	var t = email.charAt(n-1);
	var b = email.charAt(n+1);
	var dot = email.indexOf('.');
	var special = /[#^&]/;
	
	if (n===0)
	{
		document.getElementById("emaillbl").style.color = "red";
		document.getElementsByName("emailaddr")[0].style.backgroundColor = "red";
		document.getElementsByName("emailaddr")[0].style.color = "white";
		error = 1;
		
	}else
	{
		if (dot < n)
	{
		document.getElementById("emaillbl").style.color = "red";
		document.getElementsByName("emailaddr")[0].style.backgroundColor = "red";
		document.getElementsByName("emailaddr")[0].style.color = "white";
		error = 1;
	}
	else{
		if (special.test(email))
	{
		document.getElementById("emaillbl").style.color = "red";
		document.getElementsByName("emailaddr")[0].style.backgroundColor = "red";
		document.getElementsByName("emailaddr")[0].style.color = "white";
		error = 1;
	}
		
	}
	}
	
	
	
	
	
}

function validateMessage() {
	
	var msg = document.forms["myForm"]["msg"].value;
	var n = msg.length;
	var l = 50 - n;
	
	if (l > 0 )
	{
		document.getElementById("cleft").innerHTML = "Characters left " + l ;
	    document.getElementsByName("colorat")[0].style.color = "green";
	}else
	{
		document.getElementById("cleft").innerHTML = "No more characters left " + l ;
	    document.getElementsByName("colorat")[0].style.color = "red";
		error = 1;
	}
	
	
	
}



function validateForm(){
	validateFirstName();
	validateLastName();
	validateEmail();
	validateMessage();
	
	if (error === 0)
	{
		document.getElementById("sub").value = "Send message" ;
	}
	
	
	conditie = document.getElementById("sub").value === "Send message";
	
	
	
	return false;
}

