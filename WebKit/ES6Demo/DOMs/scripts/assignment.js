let validateForm = function(){    
    let isValid=true;    
    let errorsHolder = document.querySelector("#errors");
   
    while(errorsHolder.hasChildNodes()){
        errorsHolder.removeChild(errorsHolder.lastChild);
    }
    let userName = regForm.f1.value
    , noOfAdults = regForm.f2.value
    , noOfChild = regForm.f3.value
    , typeOfRoom = regForm.f4.value
    , noOfDays = regForm.f5.value
    ,isAccepted = regForm.chk1.checked;
    if(userName===undefined || userName.length<8 || userName.length>25){        
        isValid=false;        
        let err = document.createElement("li");        
        err.textContent='User Name cannot be empty and is requried to have 8-25 letters in length';        
        errorsHolder.appendChild(err);    
    }
    if(noOfAdults === undefined || noOfAdults <= 0 ){        
        isValid=false;        
        let err = document.createElement("li");        
        err.textContent='Number of adults should be greater than 0';        
        errorsHolder.appendChild(err);    
    }
    if(noOfChild === undefined || noOfChild < 0 ){        
        isValid=false;        
        let err = document.createElement("li");        
        err.textContent='Number of children should not be negative';        
        errorsHolder.appendChild(err);    
    }
    if(typeOfRoom = ""){
        isValid=false;        
        let err = document.createElement("li");        
        err.textContent="A room has to be choosen";        
        errorsHolder.appendChild(err);  
    }
    if(typeOfRoom="AC" && (noOfAdults>2 || noOfChild>2) ){        
        isValid=false;        
        let err = document.createElement("li");        
        err.textContent='AC room can have only maximum 2 children and 2 adults';        
        errorsHolder.appendChild(err);    
    }
    if(typeOfRoom="Non AC" && (noOfAdults>2 || noOfChild>2) ){        
        isValid=false;        
        let err = document.createElement("li");        
        err.textContent='Non AC room can have only maximum 2 children and 2 adults';        
        errorsHolder.appendChild(err);    
    }
    if(typeOfRoom="Suite" && (noOfAdults>4 || noOfChild>6) ){        
        isValid=false;        
        let err = document.createElement("li");        
        err.textContent='Suite room can have only maximum 6 children and 4 adults';        
        errorsHolder.appendChild(err);    
    }
    if(typeOfRoom="AC Extra Bed" && (noOfAdults>3 || noOfChild>2) ){        
        isValid=false;        
        let err = document.createElement("li");        
        err.textContent='AC with Extra bed room can have only maximum 2 children and 3 adults';        
        errorsHolder.appendChild(err);    
    }
    if(noOfDays ===undefined || noOfDays <= 0 ){        
        isValid=false;        
        let err = document.createElement("li");        
        err.textContent='Number of days should be greater than 0';        
        errorsHolder.appendChild(err);    
    }
    if(!isAccepted){        
        isValid=false;        
        let err = document.createElement("li");        
        err.textContent='Terms and conditions must be accepted';        
        errorsHolder.appendChild(err);    
}
/*if(typeOfRoom="AC"){
    alert("The Price is "+ 1500*noOfDays +"/-"); 
}
if(typeOfRoom="Non AC"){
    alert("The Price is "+ 1000*noOfDays +"/-"); 
}
if(typeOfRoom="Suite"){
    alert("The Price is "+ 5000*noOfDays +"/-"); 
}
if(typeOfRoom="AC Extra Bed"){
    alert("The Price is "+ 1800*noOfDays +"/-"); 
}
*/
return isValid;
}

