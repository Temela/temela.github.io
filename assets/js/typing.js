document.addEventListener("DOMContentLoaded", function () {
  // array with texts to type in typewriter
  var dataText = ["andrew s. boyer"];

  // type one text in the typewriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // check if text isn't finished yet
    if (i < text.length) {
      // add the next character to h1
      document.getElementById("text").innerHTML = text.substring(0, i + 1) + '<span id="typer" aria-hidden="true"></span>';
      document.getElementById("text").innerHTML = document
        .getElementById("text")
        .innerHTML.replace(
          "andrew s. boyer",
          '<span class="font-weight-normal" id="bold-name-txt">a</span>ndrew <span class="font-weight-normal" id="bold-name-txt">s</span>. <span class="font-weight-normal" id="bold-name-txt">boyer</span>'
        );
      // wait for a while and call this function again for the next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 70);
    } else {
      // text finished, call callback if there is a callback function
      if (typeof fnCallback === "function") {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
  }

  // start a typewriter animation for a text in the dataText array
  function startTextAnimation(i) {
    if (dataText && i < dataText.length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and the whole text has been animated), start next text
        startTextAnimation(i + 1);
      });
    }
  }

  // start the text animation
  startTextAnimation(0);
});
