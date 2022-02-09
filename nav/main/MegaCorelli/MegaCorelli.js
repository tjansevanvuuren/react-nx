

jQuery(document).ready(function () {
	//Calculate height of top level menu and set top style for menu placement
	jQuery('ul.megamenu li .sub').css('top', jQuery('ul.megamenu > li').height());

	// set hover class to parent item
	jQuery('li.level0 div').mouseover(function () {
		jQuery(this).closest('li.level0').find('a.level0').addClass("megahover");
	}).mouseout(function () {
		jQuery(this).closest('li.level0').find('a.level0').removeClass("megahover");
	});
	
	//Toggle Class for .click Function
	jQuery('li.level0 div').click(function () {
	//jQuery(this).closest('li.level0').find('a.level0').toggleClass("megahover"); 
	//alert("Hello");
	//At wrong Level - add back in Alert to see where you are
    });
	

	function megaHoverOver() {
		jQuery(this).find(".sub").stop().fadeTo('slow', 1).css({'display':'block'});
		var rowCount = 0;
		//Calculate width of all ul's
		
		rowCount = $(this).find(".sublink").length;
			
		if (rowCount > 1) {
			jQuery(this).find(".sub").css({ 'width': 950 });
			jQuery(this).find(".row").find(".megamenusubcontent").css({ 'display': 'inline', 'width': 180 });
			jQuery(this).find(".myrowwrap").css({ 'font-size': '16px' });
			
		} else {
			jQuery(this).find(".sub").css({ 'width': 200 });
			jQuery(this).find(".myrowwrap").css({ 'font-size': '14px' });
		}
		
	}
		
	function megaHoverOut() {
		jQuery(this).find(".sub").stop().fadeTo('slow', 0, function () {
			jQuery(this).hide();
		});
	}


	var config = {
		sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)    
		interval: 100, // number = milliseconds for onMouseOver polling interval    
		over: megaHoverOver, // function = onMouseOver callback (REQUIRED)    
		timeout: 100, // number = milliseconds delay before onMouseOut    
		out: megaHoverOut // function = onMouseOut callback (REQUIRED)    
	};

	jQuery("ul.megamenu li .sub").css({ 'opacity': '0' });
	jQuery("ul.megamenu li").hoverIntent(config);

});


