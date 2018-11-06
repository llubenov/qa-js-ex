$(document).on('mousemove', function(e){
    $('.mouseFollow').css('top', e.pageY);
    $('.mouseFollow').css('left', e.pageX);

});


function changeColor(color) {
    $('.mouseFollow').css('background-color', color);
    $('.mouseFollow').css('color', 'white');
}

$(document).on('keydown', function ( e ) {
    if (e.ctrlKey) {
    	changeFontSize(1);
    }
    else if ( String.fromCharCode(e.which).toLowerCase() === 'a')  {
    	changeFontSize(-1);
    }
   
});


var affectedElements = $(".mouseFollow"); // Can be extended, ex. $("div, p, span.someClass")
function changeFontSize(direction){
    affectedElements.each( function(){
        var $this = $(this);
        $this.css( "font-size" , parseInt($this.css("font-size"))+direction );
    });
}