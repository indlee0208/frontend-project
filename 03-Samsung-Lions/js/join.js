$(document).ready(function () {

    $("#uEmail2").on("change", function () {
        
        var uEmailURI = $("#uEmail2 option:selected").val();

        $(".uEmailURI").val(uEmailURI);
        
    });
    
    
    
    
    $(".playerSelect input[type='radio']").on("click", function(){
        
        var player = $(".playerSelect input[type='radio']:checked").val();
        
        if(player == "pitcher") {
            $(".playerSelect > #pitcher").addClass("active").siblings("select").removeClass("active");
        } else if (player == "batter") {
            $(".playerSelect > #batter").addClass("active").siblings("select").removeClass("active");
        }
        
    });
    


});
