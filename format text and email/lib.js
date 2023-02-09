function fixText(text) {
  if (!text) return text;
  let fixedText = text.trimStart().trimEnd().toLowerCase();
  fixedText = fixedText.charAt(0).toUpperCase() + fixedText.slice(1);
  if (text) return fixedText;
}

function checkEmail(input) {
  let fixedEmail = String(input).replace(" ", "");
  let atIndex = fixedEmail.indexOf("@");
  let dotIndex = fixedEmail.indexOf(".");
  let dotIndex2 = fixedEmail.indexOf(".", dotIndex + 1);

  /*   console.log(
    "|dotIndex:" +
      dotIndex +
      " |atIndex:" +
      atIndex +
      " |dotIndex2:" +
      dotIndex2
  );  */

  if (dotIndex < atIndex < dotIndex2) return true;
  return false;
}
