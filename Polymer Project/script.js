$(document).on('click','#switch',function(){
	$('#Dark').slideToggle(1000);
});

$(document).ready(function(){
	$('#Footer').fadeTo(1,0);
	$('.box').fadeTo(1,0);
	$('#Note').fadeTo(1,0);
	$('#Note').fadeTo(5000,1);
	$('#Footer').fadeTo(5000,1);
	$('.box').fadeTo(5000,1);
	$('#todo').toggle(1);
	$('#notes').slideToggle(1);
	$('#Movie').slideToggle(1);
	$('#thought').toggle();
	$('#didYouKnow').toggle();
	$('#question').toggle();
	$('#answer').toggle();
});

$(document).on('click','#box3',function(){
	$('#todo').toggle();
});

$(document).on('click','#box1',function(){
	$('#notes').slideToggle(3000);
});

$(document).on('click','#box2',function(){
	$('#Movie').slideToggle(3000);
});

$(document).on('mouseover','#box5',function(){
	$('#thought').toggle();
});
$(document).on('mouseout','#box5',function(){
	$('#thought').toggle();
});

$(document).on('mouseover','#box6',function(){
	$('#didYouKnow').toggle();
});
$(document).on('mouseout','#box6',function(){
	$('#didYouKnow').toggle();
});

$(document).on('click','#box4',function(){
	$('#question').toggle();
});
var a=false;
$(document).on('click','#button',function(){
	if(a===false){
		$(button).html('HIDE ANSWER');
		a=true;
	}
	else{
		$(button).html('SHOW ANSWER');
		a=false;
	}
	$('#answer').toggle();
	
});