/*$(document).ready(function(){

})*/
//alert("It's alive!");
$(function(){
//by id - this adds a CSS class
$('#example-one').addClass('highlight');

//by class - we'll make two things change here.
$('.example-two').css("border", "4px solid gray");

//by element
$('h5').click(function(){
	$('h5').fadeToggle("slow", "linear");
});

//https://jqueryui.com/draggable/
$('#draggable').draggable();
$('#id-combo-demo, .class-combo-demo').draggable();

$('li:contains("sad")').click(function(){
	$(this).hide()
});
});