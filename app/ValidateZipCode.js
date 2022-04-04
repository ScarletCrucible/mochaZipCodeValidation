var ValidateZipCode = function(inZip) {
	this.inZip = inZip;
};

ValidateZipCode.prototype.validateZip = function() {
	let reg = /^[0-9]{5}$/; //Regex for 5 digits between 0 and 9

	if (reg.test(this.inZip)) { //If it passes the regex test
		/*
		 * Converting inZip to a number (since it's passed in as a string to keep possibly leading zeroes for the 5 digit check)
		 * The lower range comparison is 501 and not 00501 to prevent treatment as an Octal number. Once inZip has been converted to a Number, 
		 * it removes the possible leading zeroes, making this comparison valid.
		*/
		if (Number(this.inZip) >= 501 && Number(this.inZip) <= 99950) {
			return "Valid zip code.";
		} else {
			return "Please enter a valid zip code.";
		}
	} else {
		return "Please enter a five digit zip code."
	}
};

module.exports = ValidateZipCode;
