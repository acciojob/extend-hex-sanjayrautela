const extendHex = (shortHex) => {
  // Remove '#' symbol if it exists
  if (shortHex.charAt(0) === '#') {
    shortHex = shortHex.substring(1);
  }

  // Split the short hex code into individual color components
  const r = shortHex.charAt(0);
  const g = shortHex.charAt(1);
  const b = shortHex.charAt(2);

  // Extend each color component to create the full hex code
  const fullHex = `#${r}${r}${g}${g}${b}${b}`;

  return fullHex.toUpperCase(); // Convert to uppercase for consistency
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
