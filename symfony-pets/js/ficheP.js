GetProduct();
function GetProduct() {
    var idprod = sessionStorage.getItem('idprod');
    $.ajax({
        url : 'http://127.0.0.1:8000/api/product/' + idprod, // La ressource ciblée
        type : 'GET', // Le type de la requête HTTP.
        success : (data)=>{
            $("<div class='col-sm'>"
            +"<p>Name : "+data['name']
            +"<p>Prix : "+data['prix']
            +"<p>Description : "+data['description']
            +"<p>Stock : "+data['stock']
            +'<br>'
            +'<a class="btn btn-primary" onClick="AddPanier(' + data['id'] + ')">Ajouter au Panier</a>'
            +"</p>"+"</p></div>").appendTo("#descri-prod");
        }
    });   
}

function AddPanier(idprod){
    var userId = sessionStorage.getItem('userid');
    console.log(idprod)
    $.ajax({
        url : 'http://127.0.0.1:8000/api/panier', // La ressource ciblée
        type : 'POST', // Le type de la requête HTTP.
        contentType: "application/json; charset=utf-8",
        data : {
            quantite: 1,
            user: 1,
            product: 1
        },
        success : (data)=>{
            console.log(data);
        }
    });
}

$("#deleteproduct").click(function(e)  {
    var id = sessionStorage.getItem('idprod');
    $.ajax({
        url : 'http://127.0.0.1:8000/api/product/' + id, // La ressource ciblée
        type : 'DELETE', // Le type de la requête HTTP.
        
        success : ()=>{
            console.log("success");
            window.location.href = "liste-pets.html";
        }
    });
});

// $("#updateproduct").click(function(e)  {
//     var id = sessionStorage.getItem('idprod');
//     $('#descri-prod').html("<form id='updatePr'><label for='prix'>Prix:</label><br><input type='text' id='prix' name='prix' required><br><label for='name'>Nom: </label><br><input type='text' id='name' name='name' required><br><label for='description'>Description:</label><br><input type='text' id='description' name='description' required><br><label for='Stock'>Stock: </label><br><input type='text' id='stock' name='Stock' required><br><input type='submit' value='Submit'></form>')

// });

// $("#updatePr").submit(function(e)   {
//     var id = sessionStorage.getItem('idprod');
//     var prix = document.getElementById("prix").value;
//     var name = document.getElementById("name").value;
//     var description = document.getElementById("description").value;
//     var stock = document.getElementById("stock").value;
//     $.ajax({
//         url : 'http://127.0.0.1:8000/api/product/' + id, // La ressource ciblée
//         type : 'PUT', // Le type de la requête HTTP.
//         data :  JSON.stringify({
//             "prix": prix,
//             "name": name,
//             "description": description,
//             "stock": stock
//         }),
        
//         success : ()=>{
//             console.log("success");
//             window.location.href = "liste-pets.html";
//         }
//     });
// })