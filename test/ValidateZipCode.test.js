/*
Our expectations:
"Please enter a five digit zip code":
a, fredd, t3st, INSERT INTO, 4-5-2, "", undefined, null, NaN, 0, "0", 00, 1, 123, -501, 1234A, $, ., +, -

"Not a valid zip code"
-00001, 00000, 00500, 99951, 99999

"Valid"
00501, 99950, 20531
*/

var assert = require('chai').assert;
var ValidateZipCode = require('../app/ValidateZipCode');

//Testing "Please enter a five digit zip code." error
describe("Testing Validate ZipCode", function(){
	it("input a", function(){
		var obj = new ValidateZipCode("a");
		assert.equal(obj.validateZip(), "Please enter a five digit zip code.");
	});	

	it("input Fredd", function(){
		var obj = new ValidateZipCode("Fredd");
		assert.equal(obj.validateZip(), "Please enter a five digit zip code.");
	});

	it("input t3st", function(){
		var obj = new ValidateZipCode("t3st");
		assert.equal(obj.validateZip(), "Please enter a five digit zip code.");
	});

	it("INSERT INTO", function(){
		var obj = new ValidateZipCode("INSERT INTO");
		assert.equal(obj.validateZip(), "Please enter a five digit zip code.");
	});

	it("input 4-5-2", function(){
		var obj = new ValidateZipCode("4-5-2");
		assert.equal(obj.validateZip(), "Please enter a five digit zip code.");
	});

	it("input empty field", function(){
		var obj = new ValidateZipCode("");
		assert.equal(obj.validateZip(), "Please enter a five digit zip code.");
	});

	it("input undefined", function(){
		var obj = new ValidateZipCode(undefined);
		assert.equal(obj.validateZip(), "Please enter a five digit zip code.");
	});

	it("input null", function(){
		var obj = new ValidateZipCode(null);
		assert.equal(obj.validateZip(), "Please enter a five digit zip code.");
	});

	it("input NaN", function(){
		var obj = new ValidateZipCode(NaN);
		assert.equal(obj.validateZip(), "Please enter a five digit zip code.");
	});

	it("input 0", function(){
		var obj = new ValidateZipCode(0);
		assert.equal(obj.validateZip(), "Please enter a five digit zip code.");
	});

	it("input 0 as a string", function(){
		var obj = new ValidateZipCode("0");
		assert.equal(obj.validateZip(), "Please enter a five digit zip code.");
	});

	it("input 00", function(){
		var obj = new ValidateZipCode("00");
		assert.equal(obj.validateZip(), "Please enter a five digit zip code.");
	});

	it("input 1", function(){
		var obj = new ValidateZipCode("1");
		assert.equal(obj.validateZip(), "Please enter a five digit zip code.");
	});

	it("input 123", function(){
		var obj = new ValidateZipCode("123");
		assert.equal(obj.validateZip(), "Please enter a five digit zip code.");
	});

	it("input 501", function(){
		var obj = new ValidateZipCode("501");
		assert.equal(obj.validateZip(), "Please enter a five digit zip code.");
	});

	it("input 1234A", function(){
		var obj = new ValidateZipCode("1234A");
		assert.equal(obj.validateZip(), "Please enter a five digit zip code.");
	});

	it("input $", function(){
		var obj = new ValidateZipCode("$");
		assert.equal(obj.validateZip(), "Please enter a five digit zip code.");
	});

	it("input .", function(){
		var obj = new ValidateZipCode(".");
		assert.equal(obj.validateZip(), "Please enter a five digit zip code.");
	});

	it("input +", function(){
		var obj = new ValidateZipCode("+");
		assert.equal(obj.validateZip(), "Please enter a five digit zip code.");
	});

	it("input -", function(){
		var obj = new ValidateZipCode("-");
		assert.equal(obj.validateZip(), "Please enter a five digit zip code.");
	});

	//Testing "Not a valid zip code." errors
	//Out of range edge cases:
	it("input 00500", function(){
		var obj = new ValidateZipCode("00500");
		assert.equal(obj.validateZip(), "Please enter a valid zip code.");
	});

	it("input 99951", function(){
		var obj = new ValidateZipCode("99951");
		assert.equal(obj.validateZip(), "Please enter a valid zip code.");
	});

	//Out of range
	it("input 00000", function(){
		var obj = new ValidateZipCode("00000");
		assert.equal(obj.validateZip(), "Please enter a valid zip code.");
	});

	it("input 99999", function(){
		var obj = new ValidateZipCode("99999");
		assert.equal(obj.validateZip(), "Please enter a valid zip code.");
	});

	//Testing "Valid zip code."
	//Testing edge cases
	it("input 00501", function(){
		var obj = new ValidateZipCode("00501");
		assert.equal(obj.validateZip(), "Valid zip code.");
	});

	it("input 99950", function(){
		var obj = new ValidateZipCode("99950");
		assert.equal(obj.validateZip(), "Valid zip code.");
	});

	it("input 20531", function(){
		var obj = new ValidateZipCode("20531");
		assert.equal(obj.validateZip(), "Valid zip code.");
	});
});	//end "Testing Box"