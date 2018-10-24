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










