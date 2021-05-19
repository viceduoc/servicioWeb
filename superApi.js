
$(document).ready(function(){

    $("#traer-comida").click(function(){

        $.get({
            url: 'https://www.themealdb.com/api/json/v1/1/categories.php',
            success: function(response){
                var tabla = $("#cat-comida tbody")
                tabla.empty();
                $.each(response.categories, function(index, elemento){
                    tabla.append(`<tr> <th scope="row"> ${elemento.idCategory} </th> + 
                    <td scope="row"> ${elemento.strCategory}</td> +
                    <td scope="row"> <img src="${elemento.strCategoryThumb}" alt=""></td> +
                    <td scope="row"> ${elemento.strCategoryDescription}</td>

                    </tr>`)


                    
                })
            },
            error: function(e){
                console.error(e);
            }
        })
    })






})