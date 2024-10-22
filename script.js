function checkVowel() {
    const inputLetter = document.getElementById('inputLetter').value.toLowerCase();
    const result = document.getElementById('result');
  
    if (inputLetter.length === 1 && /[a-z]/.test(inputLetter)) {
      if ('aeiou'.includes(inputLetter)) {
        result.textContent = `${inputLetter.toUpperCase()} is a Vowel!`;
        result.className = 'result vowel';
      } else {
        result.textContent = `${inputLetter.toUpperCase()} is a Consonant!`;
        result.className = 'result consonant';
      }
    } else {
      result.textContent = "Please enter a valid letter!";
      result.className = 'result';
    }
  }
  