let heading = document.querySelector("h1");
let inputBox = document.querySelector("input");
let submitBtn = document.querySelector("button");
let resultTxt = document.querySelector("h2");


function convertWgt(){
    let inputValue = inputBox.value;
    let weightInKg = inputValue * 	0.45359237;
    if(weightInKg > 80){
        heading.innerHTML = `Mamamia!!😲 You are over weight🤐👀`;
    }

    resultTxt.innerHTML = weightInKg.toFixed(3);
}



submitBtn.addEventListener("click", convertWgt);