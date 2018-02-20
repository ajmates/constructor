function Letter(char) {
	this.visible = !/[a-z1-9]/i.test(char); 
	this.char = char; 
}
 module.exports = letter; 