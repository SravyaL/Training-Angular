
var colors = ["red","green","blue","yellow","white"];

function init(){
	cb = document.getElementById("cbColors");
	for(i=0;i<colors.length;i++){
		option = document.createElement("option");
		option.value=colors[i];
		option.innerHTML = colors[i];
		cbColors.append(option);
	}	
}

function setBckColor(){
	cb = document.getElementById("cbColors");
	//document.bgColor=cb.value;
	
	divEle = document.getElementById("block1");
	divEle.style.backgroundColor=cb.value;
}