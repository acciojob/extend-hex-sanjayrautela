const extendHex = (shortHex) => {
  if(shortHex.charAt(0) === '#'){
	  shortHex = shortHex.substring(1);
  }

    const r = shortHex.charAt(0);
	const g = shortHex.charAt(1);
	const b = shortHex.charAt(2);
	

	const fullHex = '#${r}${r}${g}${g}${b}${b}';

	return fullHex.toUpperCase();
};

//Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));


