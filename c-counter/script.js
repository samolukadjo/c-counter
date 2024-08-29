const resultLabel = document.getElementById("result");
const countBtn = document.getElementById("count-button");
const xBtn = document.getElementById("x-button");
const txtInput = document.getElementById("text-input");


// Event Listeners for buttons and text input autosave
countBtn.addEventListener("click", function(){
    countStringInString(txtInput.value, "C");
});
xBtn.addEventListener("click", function(){
    // The X button should clear the text input
    txtInput.value = ""
    setSavedText("");
});
txtInput.addEventListener("input", function(){
    console.log("Input detected");
    setSavedText(txtInput.value);
});

// Initial load functions here
restoreSavedText();

// Functions to save and restore text from local storage
function restoreSavedText() {
    const text = localStorage.getItem("text-content");
    txtInput.value = text
}
function setSavedText(text) {
    localStorage.setItem("text-content", text);
}

// Core functionality here
function countStringInString(string, stringToCount) {
    console.log(`Counting the number of times "${stringToCount}" appears in "${string}"...`);
    let numOfStringToCount = (string.match(/c/g) || []).length;
    numOfStringToCount += (string.match(/C/g) || []).length;
    console.log("The total is:", numOfStringToCount);
    const totalChar = string.length;
    const generatedResult = generateResultText(numOfStringToCount, totalChar);

    resultLabel.textContent = generatedResult;
    navigator.clipboard.writeText(generatedResult);
}

function generateResultText(numC, totalChar) {
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
