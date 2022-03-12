function telephoneCheck(str) {
  // starts with: capturing group 1 (0 or 1 times): 1 followed by a whitespace character (0 or 1 times)
  // capturing group 2: 3 digits or 3 digits enclosed by ()
  // '-' or a ' ' (0 or 1 times)
  // followed by 3 digits
  // '-' or a ' ' (0 or 1 times)
  // ends with: 4 digits
  const regex1 = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/gm
  if (str.match(regex1)) {
    return true;
  } else {
    return false;
  }
}

telephoneCheck("1 555-555-5555");

// the website: https://regex101.com/ is useful to test regular expressions
