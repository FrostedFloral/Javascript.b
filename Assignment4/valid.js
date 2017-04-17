/* Nathan Stone | SE251.05 |

 Assignment 4 , the former

 */


$(document).ready(function () {
    //when submit is clicked
    $("#submitAgreement").click(function () {
        //check full name | you provide the selector for the desired input and accompanied label
        checkInput($("#fullname"), $('label[for="fullname"]'));
        //check email
        checkInput($("#email"), $('label[for="email"]'));
        //check phone
        checkInput($("#phone"), $('label[for="phone"]'));
        //check description
        checkInput($("#description"), $('label[for="description"]'));
        //check not/agree
        if (!$("input[name='agreeForm']:checked").val()) {
            $('label[for="agree"]').addClass('error');
            $('label[for="notagree"]').addClass('error');
        }
        else {
            $('label[for="agree"]').removeClass('error');
            $('label[for="notagree"]').removeClass('error');
        }
        //check if there is any errors
        if ($("label").hasClass('error')) {
            return (false);
        }
    });
    //need to clear the form when the return produces

});

function checkInput(input, label) {
    //check if the input is empty
    if (input.val() === "") {
        //if so, add class of error to the label
        label.addClass('error');
    } else {
        //else, remove error
        label.removeClass('error');
    }
}






