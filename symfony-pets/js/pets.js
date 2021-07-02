GetPets();
function GetPets(){
    $.ajax({
        url : 'http://127.0.0.1:8000/api/pets', // La ressource ciblée
        type : 'GET', // Le type de la requête HTTP.
        success : (data)=>{
            for(var i=0;i<data.length;i++){
                $("<div class='col-sm'><p>Name : "+data[i]['name']+"</p>"
                +"<p>Description : "+data[i]['description']
                +'<br>'
                +'<a href="fiche" class="btn btn-primary" onClick="ClickPet(' + data[i]['id'] + ')">Voir sa fiche</a>'
                +"</p>"+"</p></div>").appendTo("#div-pets");
            }
        }
    });
}

function ClickPet(idrec){
    sessionStorage.clear();
    sessionStorage.setItem('idpet', idrec);
    var idpets = sessionStorage.getItem('idpet');
}

$("#postDog").submit(function(e)  {
    e.preventDefault();
    console.log("start post");

    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var age = document.getElementById("age").value;
    var poids = document.getElementById("poids").value;
    var race = document.getElementById("race").value;

    $.ajax({
        url : 'http://127.0.0.1:8000/api/pet', // La ressource ciblée
        type : 'POST', // Le type de la requête HTTP.
        data :  JSON.stringify({
            "name": name,
            "description": description,
            "adopter": 1,
            "age": age,
            "poids": poids,
            "race": race,
        }),

        success: function(data){
            window.location.href = "liste-pets.html";
        },
        error: function(e) {
            console.log(e);
            alert("oups")

        }
    });
});