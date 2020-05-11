$(document).ready(function () {

    $(".loginInput").on("propertychange change keyup paste input", function () {
        if ($("#uId").val() == "" || $("#uPwd").val() == "") {
            $(".loginLeft > .robot").css("display", "none");
        } else if ($("#uId").val() != "" && $("#uPwd").val() != "") {
            $(".loginLeft > .robot").css("display", "block");
        }
    });
    
    
    

});
