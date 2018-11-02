addPara = function(){
    let parentDiv = document.querySelector("#contentHolder");
    let textareaEle = document.querySelector("#paraContent");

    let myPara = document.createElement("p");
    myPara.textContent = textareaEle.value;
    parentDiv.appendChild(myPara);
}