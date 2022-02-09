function splitSubMenu(columns) {

	jQuery("div.sub").each(function (i) {
		var items = jQuery(this).find('ul');
		var blockCount = columns;
		for (var i = 0; i < items.length; i += blockCount) {
			var slice = items.slice(i, i + blockCount);
			slice.wrapAll("<div class=\"row\"></div>");
		}
	});

}

jQuery(document).ready(function () {
	//Calculate height of top level menu and set top style for menu placement
	jQuery('ul.megamenu li .sub').css('top', jQuery('ul.megamenu > li').height());

	// set hover class to parent item
	jQuery('li.level0 div').mouseover(function () {
		jQuery(this).closest('li.level0').find('a.level0').addClass("megahover")
	}).mouseout(function () {
		jQuery(this).closest('li.level0').find('a.level0').removeClass("megahover")
	})
	;
	
	//Toggle Class for .click Function
	jQuery('li.level0 div').click(function () {
	//jQuery(this).closest('li.level0').find('a.level0').toggleClass("megahover"); 
	//alert("Hello");
	//At wrong Level - add back in Alert to see where you are
    });
	

	function megaHoverOver() {
		jQuery(this).find(".sub").stop().fadeTo('slow', 1).show();

		//Calculate width of all ul's
		(function (jQuery) {
			jQuery.fn.calcSubWidth = function () {
				rowWidth = 0;
				//Calculate row
				$(this).find("ul").each(function () {
					rowWidth += $(this).width();
				});
			};
		})(jQuery);
		
		// Special Fudge to make First Elements with no children to be vertical - find myrowwrap class traverse up the tree 3 pelements to find <ul class="megamenusubcontent> and add a class
		$(".myrowwrap").parent().parent().parent("ul").addClass("mynofloat");

		if (jQuery(this).find(".row").length > 0) { //If row exists...
			var biggestRow = 0;
			//Calculate each row
			jQuery(this).find(".row").each(function () {
				jQuery(this).calcSubWidth();
				//Find biggest row
				if (rowWidth > biggestRow) {
					biggestRow = rowWidth;
				}			
			});
			
			//Force Width to be 140 when vertical columns
				if (jQuery(this).find(".mynofloat").length > 0) {
					biggestRow = 140;
					//Add row class mb0 as when more than 4 in list then a space appears between 4th and 5th entry - margin bottom 0px
					$(".row").addClass("mb0");
				}
				
			
			//Set width
			
			jQuery(this).find(".sub").css({ 'width': biggestRow+40 }); //Plus 40 as we have margins on to separate columns of children
			jQuery(this).find(".row:last").css({ 'margin': '0' });

		} else { //If row does not exist...

			jQuery(this).calcSubWidth();
			//Set Width
			jQuery(this).find(".sub").css({ 'width': rowWidth });

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


