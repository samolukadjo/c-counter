let result = document.getElementById("result");

function countC() {
    console.log("Starting count");
    let inputText = document.getElementById("text-input").value;
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
        "There are " +
        numC +
        " occurences of C in this post that consists of " +
        totalChar +
        " characters in total. That's " +
        cPercent +
        "% C, which is " +
        cCompare +
        " the 2.8% C average.";

    return resultText;
}