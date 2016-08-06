var zero = 0;
var adder = require("./iterative2.js");
var one = adder.add(zero);
function gimme() {
	document.write(" " + one);
}
module.exports = {"bam": gimme};
