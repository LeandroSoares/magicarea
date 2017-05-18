/*
	@author: Leandro Soares
	@email : leandrogamedesigner@gmail.com
	@contributor : https://github.com/NemoStein
*/

function magicarea(selector, dimentions) {

	if(!selector) throw "magicArea:> O parametro 'selector: string' precisa ser preenchido!";
	if(!dimentions) throw "magicArea:> O parametro 'dimentions: { width: number, height: number }' precisa ser preenchido!";

	var base = dimentions;
	var parent = $(selector).parent();

	function onResize() {

		var newW, newH;

		if(parent.width() / parent.height() > base.width / base.height)
		{
			base.width *= parent.height() / base.height;
			base.height = parent.height();
		}

		if(base.width > base.height)
		{
			newW = parent.width();
			if(newW > base.width)
			{
				newW = base.width;
			}
			newH = base.height / base.width * newW;
		}
		else
		{
			newH = parent.height(); 
			if(newH > base.height)
			{
				newH = base.height;
			}
			newW = base.width / base.height * newH;
		}
		
		$(selector).css(
		{
			height: newH,
			width: newW
		});
	}

	$(document).ready(function(){
		$(window).on('resize', onResize);
		onResize();
	});
}