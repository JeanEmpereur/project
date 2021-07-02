getDon();
$("#don").submit(function(e)  {
    createDon();
    alert("Le don a bien été effectuer")
});

function getDon()   {
    $.ajax({
        url : 'http://127.0.0.1:8000/api/dons', // La ressource ciblée
        type : 'GET', // Le type de la requête HTTP.
        success : (data)=>{
            for(var i=0;i<data.length;i++){
                $("<div><p>"
                +"name : " + data[i]['name']+"</p>"
                +"montant : " + data[i]['prix']+"€</p>"
                +"</div>").appendTo("#div-dons");
            }
        } 
    });
}

function createDon()   {
    var name = document.getElementById("name").value;
    var prix = document.getElementById("prix").value;
    var banc = document.getElementById("bancaire").value;
    $.ajax({
        url : 'http://127.0.0.1:8000/api/don', // La ressource ciblée
        type : 'POST', // Le type de la requête HTTP.
        contentType: "application/json; charset=utf-8",
        data : {
            name: name,
            prix: prix,
            bancaire: banc
        },
    });
}
