
/*
* this form can use vehicle reg number or mobile number
* as user id to log in to the RTO web site.
* validateLogInForm method has to validate it.
*/
function validateLogInForm(){
	isValid=true;
	
	unmTextbox = document.getElementById("txtUnm");
	pwdTextbox = document.getElementById("txtPwd");
	unmErrSpan = document.getElementById("unmErr");
	
	unm = unmTextbox.value;
	pwd = pwdTextbox.value;
	
	if(!isValidVehicleRegNumber(unm) && !isValidMobileNumber(unm)){
		isValid=false;
		unmErrSpan.innerHTML="<br />Not a valid Mobile number or vehicle registration number";
	}
	
	
	return isValid;
}

function isValidVehicleRegNumber(vehRegNum){
	vehRegNumPattern = new RegExp("[A-Z]{2}\\d{2}\\s([a-z]{2}\\s)?\\d{1,4}");
	
	return vehRegNum.match(vehRegNumPattern);
}

function isValidMobileNumber(mobileNumber){
	mobileNumberPattern = /\d{10}/;
	return mobileNumber.match(mobileNumberPattern);
}