$("#login").submit(function(e)  {
    e.preventDefault();
    console.log("click");
    getUser();
});

function getUser()   {

    var user = document.getElementById("username").value;
    var pass = document.getElementById("userpwd").value;
    $.ajax({
        url : 'http://127.0.0.1:8000/api/login', // La ressource ciblée
        type : 'POST', // Le type de la requête HTTP.
        data :  JSON.stringify({
            "username": user,
            "password": pass,
        }),

        success: function(data){
            sessionStorage.setItem("userconnected", data['username']);
            sessionStorage.setItem("userid", data['id']);
            window.location.href = "index";
        },
        error: function(e) {
            console.log(e);
            alert("Wrong password or username !")

        }
    });
}