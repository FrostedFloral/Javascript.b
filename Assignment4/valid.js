    /* Nathan Stone | SE251.05 |

    Assignment 4

    */


$(document).ready(function(){
    //when submit is clicked
    $("#submitAgreement").click(function () {
        //check full name
        emptyinput("fullname");
        //check email
        if ($("#email").val() === ""){
            $('label[for="email"]').addClass('error');
        }
        //check phone
        if ($("#phone").val() === ""){
            $('label[for="phone"]').addClass('error');
        }
        //check description
        if ($("#description").val() === ""){
            $('label[for="description"]').addClass('error');
        }
        //check not/agree
        if (!$("input[name='agreeForm']:checked").val()) {
            $('label[for="agree"]').addClass('error');
            $('label[for="notagree"]').addClass('error');
        }
        else {

        }
        if ($("label").hasClass('error')){
            return(false);
        }
    });


});

function emptyinput(input) {
    if ($("#"+input).val() === ""){
        $('label[for=input]').addClass('error');
    }else{
        $('label[for=input]').removeClass('error');
    }
}






