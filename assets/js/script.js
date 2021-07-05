$(document).ready(function(){

    $("nav div ul a").click(function(event){
        event.preventDefault()

        var gato= this.hash;

        $("html").animate({
            scrollTop: $(gato).offset().top - 86,
        },
        800)
    })

})

$('[data-toggle="tooltip"]').tooltip()
