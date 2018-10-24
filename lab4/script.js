function validateFirstname() {
	var firstname = document.forms["myForm"]["firstname"].value;

	if (firstname.length < 3) {
		document.getElementsByName("firstname")[0].style.backgroundColor = "orange";
    } else {
    	document.getElementsByName("firstname")[0].style.backgroundColor = "white";
    }
}

function validateLastname() {
	var lastname = document.forms["myForm"]["lastname"].value;

	if (lastname.length < 3) {
		document.getElementsByName("lastname")[0].style.backgroundColor = "orange";
    } else {
    	document.getElementsByName("lastname")[0].style.backgroundColor = "white";
    }

}

function validateAddress() {
	
	var address = document.forms["myForm"]["address"].value;
	var special = /[@#$%^&*]/;
	
	if (address.length < 3 || !/\d/.test(address) || special.test(address)) {
		document.getElementsByName("address")[0].style.backgroundColor = "orange";
    } else {
    	document.getElementsByName("address")[0].style.backgroundColor = "white";
    }

}

function validateBirthday() {
	var birthday = document.forms["myForm"]["birthday"].value;

	if (!(birthday.substring(2,3)=='/') || !(birthday.substring(5,6)=='/')) {
		document.getElementsByName("birthday")[0].style.backgroundColor = "orange";
    } else {
    	document.getElementsByName("birthday")[0].style.backgroundColor = "white";
    }

}

function validateEmail() {
	var email = document.forms["myForm"]["email"].value;

	if (email.indexOf('@')) {
		document.getElementsByName("email")[0].style.backgroundColor = "orange";
    } else {
    	document.getElementsByName("email")[0].style.backgroundColor = "white";
    }

}

function validatePhone() {
	var phoneno = document.forms["myForm"]["phoneno"].value;
	var only_digits = /^[0-9]*$/;
	
	var first = phoneno.substring(0,3);
	var second = phoneno.substring(4);
	
if (!(phoneno.substring(3,4)=='-') || !(only_digits.test(first)) || !(only_digits.test(second))) {
		document.getElementsByName("phoneno")[0].style.backgroundColor = "orange";
    } else {
    	document.getElementsByName("phoneno")[0].style.backgroundColor = "white";
    }

}

function validateForm(){
	validateFirstname();
	validateLastname();
	validateAddress();
	validateBirthday();
	validateEmail();
	validatePhone();
	
	return false;
	
}


$(document).ready
(
	function()
		{
			$("#open").on
			(
				"click",function()
				{
					$("#authW").animate
						(
							{width:"300px"},
							300,
								function()
								{
									$("#authText").text("Chat with us!");
									$("#close").css("display","inline-flex");
									$("#authW").animate
										(
											{height:"300px"},
											300
										)
								}
						)
				}
			)
		}
)

$("#authWH").on
(
	"click",function(e)
	{
		if ($(e.target).is("#open"))
		{
			e.preventDefault();
			return;
		}
		$("#authW").animate
		(
			{height:"50px"},
			300,
			function()
			{
				$("#authText").text(""),
				$("#close").css("display","none");
				$("#authW").animate
				(
					{width:"55px",
					height:"30px"},
					500
				)
			}
		)
		
	}
)

$("#authForm").submit
(
	function(event)
	{
		var u = $("#username").val();
		var p = $("#password").val();
		
		if ((u === "admin") & (p ==="1234"))
		{
			displayMessage("Success",'"fa fa-check"',"#FFFFFF");
		}
		else
		{
			displayMessage("Eroare",'"fa fa-exclamation-triangle"',"#97202E");
		}
		event.preventDefault();
	}
)


function displayMessage(msg,cls,rgb)
{
	$("#authForm p").css("color",rgb).html('<i class=' + cls + '></i>'+msg);
}






