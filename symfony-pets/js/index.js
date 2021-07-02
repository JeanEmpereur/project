
console.log("dd")
GetPets();
function GetPets(){
    $.ajax({
        url : 'http://127.0.0.1:8000/api/pets/random', // La ressource ciblée
        type : 'GET', // Le type de la requête HTTP.
        success : (data)=>{
            for(var i=0;i<data.length;i++){
                $("<div class='col-sm'><p>Name : "+data[i]['name']+"</p>"
                +"<p>Description : "+data[i]['description']
                +"<p>Poids : "+data[i]['poids']
                +"<p>Age : "+data[i]['age']
                +"<p>Race : "+data[i]['race']
                +"</p>"+"</p></div>").appendTo("#div-pets");
            }
        }
    });
    
    $.ajax({
        url : 'http://127.0.0.1:8000/api/products/random', // La ressource ciblée
        type : 'GET', // Le type de la requête HTTP.
        success : (data)=>{
            for(var i=0;i<data.length;i++){
                $("<div class='col-sm'>"
                +"<p>Name : "+data[i]['name']
                +"<p>Prix : "+data[i]['prix']
                +"<p>Description : "+data[i]['description']
                +"<p>Stock : "+data[i]['stock']
                +"</p>"+"</p></div>").appendTo("#div-products");
            }
        }
    });
    
}