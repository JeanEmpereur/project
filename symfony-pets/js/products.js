GetProducts();
function GetProducts(){
    $.ajax({
        url : 'http://127.0.0.1:8000/api/products', // La ressource ciblée
        type : 'GET', // Le type de la requête HTTP.
        success : (data)=>{
            console.log(data)
            for(var i=0;i<data.length;i++){
                $("<div><p>"+data[i]['name']+"</p>"
                +'<a href="ficheP" class="btn btn-primary" onClick="ClickProd(' + data[i]['id'] + ')">Voir sa fiche</a>'
                +"</div>").appendTo("#div-products");
            }
        }
    });
}

function ClickProd(idrec){
    sessionStorage.clear();
    sessionStorage.setItem('idprod', idrec);
    var idpets = sessionStorage.getItem('idprod');
}

$("#postproduct").submit(function(e)  {
    e.preventDefault();
    console.log("start post");

    var prix = document.getElementById("prix").value;
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var stock = document.getElementById("stock").value;

    $.ajax({
        url : 'http://127.0.0.1:8000/api/product', // La ressource ciblée
        type : 'POST', // Le type de la requête HTTP.
        data :  JSON.stringify({
            "prix": prix,
            "name": name,
            "description": description,
            "stock": stock
        }),

        success: function(data){
            window.location.href = "liste-products.html";
        },
        error: function(e) {
            console.log(e);
            alert("oups")

        }
    });
});