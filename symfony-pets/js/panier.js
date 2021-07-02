GetProducts();
function GetProducts(){
    var userId = sessionStorage.getItem('userid');
    console.log(userId)
    $.ajax({
        url : 'http://127.0.0.1:8000/api/products', // La ressource ciblée
        type : 'GET', // Le type de la requête HTTP.
        success : (data)=>{
            console.log(data)
            console.log("USERID")
            console.log(userId)
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
