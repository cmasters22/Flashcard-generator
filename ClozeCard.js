
var ClozeCard = function(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.partial = this.fullText.replace(cloze, "...");
}

module.exports = ClozeCard;