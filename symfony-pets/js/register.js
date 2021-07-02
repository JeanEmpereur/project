//event that create an user in the database
$("#register").submit(function(e)  {
    createUser();
    alert("The user was created successfully")
});

function createUser()   {
    if(document.getElementById("adduserpwd").value == document.getElementById("adduserpwd2").value)  {
        var user = document.getElementById("addusername").value;
        var pass = document.getElementById("adduserpwd").value;
        console.log(pass, " ", user)

        $.ajax({
            url : 'http://127.0.0.1:8000/api/user', // La ressource ciblée
            type : 'POST', // Le type de la requête HTTP.

            data : JSON.stringify({
                username: user,
                password: pass,
            }),
        });
    } else {
        alert("Please make sure to confirm your password.");
    }
}

