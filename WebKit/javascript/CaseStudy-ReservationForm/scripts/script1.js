 function isTitleSelected(){
	selected=false;
	
	r1 = document.getElementById("rbMr");
	r2 = document.getElementById("rbMrs");
	r3 = document.getElementById("rbMis");
	
	if(r1.checked || r2.checked ||r3.checked){
		selected=true;
	}
	
	return selected;
 }
 
 function isValidShowDate(){
	 isValid=false;
	 
	 sdElement = document.getElementById("txtSD");
	 sd = new Date(sdElement.value);
	 today = new Date();
	 
	 if(sd>=today){
		 isValid=true;
	 }
	 
	 return isValid;
 }
 
 function validate(){
	var isValid = true;
	
	if(!isTitleSelected()){
		isValid=false;
		alert("Please select a title");
	} 
	
	if(!isValidShowDate()){
		isValid=false;
		alert("The shpw date should be today or later.");
	}
	
	if(isValid){
		display();
	}
	
	return isValid;
 }
 
 function getTotalFare(){
	 
	classElement = document.getElementById("selClass");
	adultsElement = document.getElementById("txtAdults");
	childElement = document.getElementById("txtChild");
	
	clazz = classElement.value;
	adCount = parseInt(adultsElement.value);
	cdCount = parseInt(childElement.value);
	
	var fare;
	
	if(clazz=="DC")		fare = 560;
	else if(clazz=="GC")fare = 350;
	else if(clazz=="SC")fare = 250;
	
	totalFare = fare*adCount + ((fare/2)*cdCount);
	
	return totalFare;
 }
 
 function display(){
	 
	 r1 = document.getElementById("rbMr");
	 r2 = document.getElementById("rbMrs");
	 r3 = document.getElementById("rbMis");
	 
	 var title;
	 
	 if(r1.checked) 	title="Mr.";
	 else if(r2.checked)title="Mrs.";
	 else 				title="Miss.";
	 
	 name = document.getElementById("txtName").value;
	 showDate = document.getElementById("txtSD").value;
	 clazz = document.getElementById("selClass").value;
	 totalFare = getTotalFare();
	 
	 alert(title +" "+name+" Please pay RS."+totalFare+" to book show on "+showDate);
	 
	 outputWin = open();
	 
	 outputWin.document.writeln(
		"<h2>"+title +" "+name+" Please pay RS."+totalFare+" to book show on "+showDate+"</h2>");
 }