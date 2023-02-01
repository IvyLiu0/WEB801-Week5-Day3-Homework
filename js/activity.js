$(document).ready(function(){
    $('#tbody').bind("click", function(e){
        $(e.target).closest(".tdbox").toggleClass('tdclick')
    })
})

