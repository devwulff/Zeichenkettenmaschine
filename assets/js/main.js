// HTML INPUT

let inputText = document.getElementById("inputText");
let textTrenner = document.getElementById("textTrenner");
let radioBefore = document.getElementById("before");
let radioAfter = document.getElementById("after");

// OUTPUT

let outputBefore = document.getElementById("output_vordererteil");
let outputAfter = document.getElementById("output_hintererteil");

let seperate = () => {
  let trennerPos = inputText.value.indexOf(textTrenner.value);
  let trennerLength = textTrenner.value.length;
  let inputTextbefore;
  let inputTextafter;

  if (trennerPos !== -1) {
    if (radioBefore.checked) {
      inputTextafter = inputText.value.slice(trennerPos);
      inputTextbefore = inputText.value.slice(0, trennerPos);
      console.log(inputTextbefore);
      console.log(inputTextafter);
    } else if (radioAfter.checked) {
      inputTextafter = inputText.value.slice(trennerPos + trennerLength);
      inputTextbefore = inputText.value.slice(0, trennerPos + trennerLength);
      console.log(inputTextafter);
      console.log(inputTextbefore);
    }
  } else {
    inputTextafter = inputText.value;
    inputTextbefore = "Das Zeichen konnte leider nicht gefunden werden.";
  }
  output_vordererteil.innerHTML = inputTextbefore;
  output_hintererteil.innerHTML = inputTextafter;
};
