$(document).ready(function(){
	/*$('Limage').dblclick(function (){
		var Limage = $('#Limage').attr('src');
		$('#small').append('<img src="frame2.jpg" class="frame" />');
		$('#smallimages').append('<img src="'+Limage+'" class="prsn" />');
		$('#Limage').attr("src", $('#Limage').attr("src").replace(Limage, ''));
	});*/
	
	$('#Limage').click(function(){
		$('#kte').toggle();
	});
	
	$('.prsn').click(function(){
		var Limage = $('#Limage').attr('src');
		var prsn = $(this).attr('src');
		$(this).attr("src", $(this).attr("src").replace(prsn, Limage));
		$('#Limage').attr("src", $('#Limage').attr("src").replace(Limage, prsn));
	});
});