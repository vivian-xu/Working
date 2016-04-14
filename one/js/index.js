/*
$(".slide-control").on("click", function(){

	var obj = $(".slide-items").find(".active");
	obj.removeClass("active");
	obj.next().addClass("active");
});
*/

$(function() {

	setSlide( $(".vsb-space.ban1") );

});

var setSlide = function( section ) {
	var _wrapper = section;
	var _slideWindow = _wrapper.find(".slide");
	var _all_items = _wrapper.find(".slide-items");
	var _slide_item =  _all_items.find('.item');

	var _leftBtn= _slideWindow.find(".slide-control.left");
	var _rightBtn = _slideWindow.find(".slide-control.right");

	_leftBtn.click(function(event) {
		var _currentItem = $(".slide-items").find('.active');

		_currentItem.removeClass('active');

		if (_currentItem.data("copy") === "first"){
			_all_items.css('left', '-'+ _slideWindow.width() + 'px');
			// 当前 item 是 first item 的 copy
			// active 属性要加到 first item 的 next 上
			_wrapper.find(".first").next().addClass('active');
		}
		else {
			_currentItem.next().addClass('active');
		}

		// 往左，距离是负值
		slideMove( _all_items, 1000, 30 , -_slideWindow.width());
	});

	_rightBtn.click(function(event) {
		/* Act on the event */
		var _currentItem = _all_items.find('.active');

		_currentItem.removeClass('active');

		if (_currentItem.data("copy") === "last"){
			_all_items.css('left', '-'+ 3*_slideWindow.width() + 'px');
			// 当前 item 是 first item 的 copy
			// active 属性要加到 first item 的 next 上
			_wrapper.find(".last").prev().addClass('active');
		}
		else {
			_currentItem.prev().addClass('active');
		}

		// 往左，距离是负值
		slideMove( _all_items, 1000, 30 , _slideWindow.width());

	});

	// 可以预设 stepCounts,和 totalTime
	var slideMove = function( object ,totalTime, stepCounts,moveWidth ) {
		var stepWidth = moveWidth / stepCounts;
		var stepTime = totalTime / stepCounts;
		var count = 0;

		for ( ; count < stepCounts; count++ ) {
			setTimeout( _go, count*stepTime, object, stepWidth);
		}
	}

	// 使obj 移动 distance  的距离 , obj 为 dom 节点, distance 为数字 可正，可负,  可以不带单位
	function _go( obj, distance ) {
		var _currentLeft = parseInt(obj.css('left'));
		var _goLeft = _currentLeft + parseInt(distance) +"px";
		obj.css('left', _goLeft);
	}
}
