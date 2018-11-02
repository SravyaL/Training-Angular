
 function submitForm(){
	 isValid = validateForm();
	 
	 if(isValid){
		 getBill();
	 }
	 
	 return isValid;
 }

 function validateForm(){
	txtchin  = document.getElementById("txtchin");
	txtchout = document.getElementById("txtchout");
	
	chinDate = new Date(txtchin.value);
	choutDate = new Date(txtchout.value);
	
	var isValidDate;
	
	if(chinDate<=choutDate)
			isValidDate = true;
	else {
			isValidDate = false;
			alert("Check in can not be past check out");
	}
	
	var isRatingGiven;
	rb1 = document.getElementById("rb1");
	rb2 = document.getElementById("rb2");
	rb3 = document.getElementById("rb3");
	
	if(rb1.checked || rb2.checked || rb3.checked)
		isRatingGiven=true;
	else{
		isRatingGiven=false;
		alert("Please give your valuable rating");
	}
	return isValidDate && isRatingGiven;
 }
 
 function getBill(){

   //load elements into objects
   txtgnm = document.getElementById("txtgnm");
   txtchin  = document.getElementById("txtchin");
   txtchout = document.getElementById("txtchout");	
   txtfb = document.getElementById("txtfb");
   txtnet = document.getElementById("txtnet");
   txtadv = document.getElementById("txtadv");
   txtgst = document.getElementById("txtgst");
   selmode = document.getElementById("selmode");

   //retrive the value of these objects into variables
   gnm = txtgnm.value;
   chinDate = new Date(txtchin.value);
   choutDate = new Date(txtchout.value);	
   fb  = parseFloat(txtfb.value);
   net = parseFloat(txtnet.value);
   adv = parseFloat(txtadv.value);
   gst = parseFloat(txtgst.value);
   mode = selmode.value;
   
   //compute no of days
   sty = (choutDate.getYear() - chinDate.getYear())*365 +
		 (choutDate.getMonth() - chinDate.getMonth())*30 +
		 (choutDate.getDate() - chinDate.getDate());
   
   //compute gross bill amount 
   //(assuming inr 800 per day)
   gbamt = (sty*800) + net + fb ;
   
   //compute net bill amount
   nbamt = gbamt + (gbamt*(gst/100));
   
   //compute payable amount
   pbamt = nbamt - adv;
   
   //display output in a new window
   outputWin = open();
   outputWin.document.writeln("<link rel='stylesheet' href='restStyle.css' />");
      
   outputWin.document.writeln("<h1>Mapple Express Internatonal</h1>");
   outputWin.document.writeln("<table>");
   
   outputWin.document.writeln("<tr>");
   outputWin.document.writeln("<td>Guest Name:</td>");
   outputWin.document.writeln("<td>"+gnm+"</td>");   
   outputWin.document.writeln("</tr>");
   
   outputWin.document.writeln("<tr>");
   outputWin.document.writeln("<td>Stay:</td>");
   outputWin.document.writeln("<td>"+sty+" dys </td>");
   outputWin.document.writeln("</tr>");
   
   outputWin.document.writeln("<tr>");
   outputWin.document.writeln("<td>Food Bill:</td>");
   outputWin.document.writeln("<td>"+fb+"</td>");
   outputWin.document.writeln("</tr>");
   
   outputWin.document.writeln("<tr>");
   outputWin.document.writeln("<td>Net Usage:</td>");
   outputWin.document.writeln("<td>"+net+"</td>");
   outputWin.document.writeln("</tr>");
   
   outputWin.document.writeln("<tr>");
   outputWin.document.writeln("<td>Gross Bill:</td>");
   outputWin.document.writeln("<td>"+gbamt+"</td>");
   outputWin.document.writeln("</tr>");
   
   outputWin.document.writeln("<tr>");
   outputWin.document.writeln("<td>GST:</td>");
   outputWin.document.writeln("<td>"+gst+"%</td>");
   outputWin.document.writeln("</tr>");
   
   outputWin.document.writeln("<tr>");
   outputWin.document.writeln("<td>Net Bill:</td>");
   outputWin.document.writeln("<td>"+nbamt+"</td>");
   outputWin.document.writeln("</tr>");
   
   outputWin.document.writeln("<tr>");
   outputWin.document.writeln("<td>Advance Paid:</td>");
   outputWin.document.writeln("<td>"+adv+"</td>");
   outputWin.document.writeln("</tr>");
   
   outputWin.document.writeln("<tr>");
   outputWin.document.writeln("<td>Payable Bill:</td>");
   outputWin.document.writeln("<td>"+pbamt+"</td>");
   outputWin.document.writeln("</tr>");
   
   outputWin.document.writeln("<tr>");
   outputWin.document.writeln("<td>Payment Mode:</td>");
   outputWin.document.writeln("<td>"+mode+"</td>");
   outputWin.document.writeln("</tr>");
   
   outputWin.document.writeln("</table>");
 }