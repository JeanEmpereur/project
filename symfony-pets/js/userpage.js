getUserdyId()
function getUserdyId()   {
    var userconnected = sessionStorage.getItem('userconnected');
    $("<div class='col-sm'>"
    +"<p>Username : "+userconnected
    +'<br>'
    +"</p>"+"</p></div>").appendTo("#descri-user");
}