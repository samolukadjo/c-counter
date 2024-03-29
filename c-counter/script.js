const result = document.getElementById("result");
const countBtn = document.getElementById("count-button");
const txtInput = document.getElementById("text-input");

countBtn.addEventListener("click", function(){
    countC()
});
txtInput.addEventListener("input", function(){
    console.log("Input detected");
    localStorage.setItem("text-content", txtInput.value);
});

restoreText();

function restoreText() {
    const text = localStorage.getItem("text-content");
    txtInput.value = text
}

function countC() {
    console.log("Starting count");
    let inputText = txtInput.value;
    console.log(inputText);
    console.log(result);
    let numC = (inputText.match(/c/g) || []).length;
    numC += (inputText.match(/C/g) || []).length;
    console.log(numC);
    let totalChar = inputText.length;
    let generated = generateResult(numC, totalChar);

    result.textContent = generated;
    navigator.clipboard.writeText(generated);
}

function generateResult(numC, totalChar) {
    let cPercent = (numC / totalChar) * 100;
    let cCompare;

    if (cPercent > 2.8) {
        cCompare = "above";
    } else if (cPercent == 2.8) {
        cCompare = "exactly";
    } else {
        cCompare = "below";
    }

    let resultText =
        `There are ${numC} occurrences of C in this post that consists of ${totalChar} characters in total. That's ${cPercent}% C, which is ${cCompare} the 2.8% C average.`;

    return resultText;
}
