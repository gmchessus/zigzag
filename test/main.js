Ext.onReady(function() {
	var ceLinks = Ext.select("UL[id=navbar] LI");
	
	ceLinks.on("mouseover", function(e, t) {
	Ext.get(this).addClass("hovered");
	});
	
	ceLinks.on("mouseout", function(e, t) {
	Ext.get(this).removeClass("hovered");
	});
});