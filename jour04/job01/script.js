$('#button').click(function(){

$(function(){
    $.ajax({
        url:"expression.txt",
        datatype:"text",
        success: function(data) {
        $('body').append('<p>'+ data +'</p>')
        }
    })
})
})