GetPet();
function GetPet() {
    var idpets = sessionStorage.getItem('idpet');
    $.ajax({
        url : 'http://127.0.0.1:8000/api/pet/' + idpets, // La ressource ciblée
        type : 'GET', // Le type de la requête HTTP.
        success : (data)=>{
            $("<div class='col-sm'><p>Name : "+data['name']+"</p>"
            +"<p>Description : "+data['description']
            +"<p>Poids : "+data['poids']
            +"<p>Age : "+data['age']
            +"<p>Race : "+data['race']
            +"</p>"+"</p></div>").appendTo("#descri-pet");
        }
    });   
}

$("#deletepet").click(function(e)  {
    var id = sessionStorage.getItem('idpet');
    $.ajax({
        url : 'http://127.0.0.1:8000/api/pet/' + id, // La ressource ciblée
        type : 'DELETE', // Le type de la requête HTTP.
        
        success : ()=>{
            console.log("success");
            window.location.href = "liste-pets.html";
        }
    });
});