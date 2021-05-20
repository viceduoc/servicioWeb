
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

    $("#traer-musica").click(function(){
        var id = '6ec2joVXjW8GCD7MfIf06y'
        $.get({
            url: `https://api.spotify.com/v1/artists/${id}/albums`,
            headers: {Authorization: "Bearer " + "BQBWb3sS_xn21uYuSgtpLsu4WbUzKXadYWfabMj6uaUTAOfn5q7Bu3gkNpxJ7NzuZBKXOCLb5Bgkz-YoW2jjdQy0Div2uSZF3pWI7fZ2ghcWTDW50MnB1z-Q-k7zVXdxTN9quBPOm1VAXFFV"},
            success: function(response){
                console.log(response)
                var tabla = $("#cat-comida tbody")
                tabla.empty();
                $.each(response.items, function(index, album){
                    tabla.append(`<tr> <th scope="row"> ${album.id} </th> + 
                    <td scope="row"> ${album.name}</td> +
                    <td scope="row"> <img src="${album.images[1].url}" alt=""></td> +
                    <td scope="row">${album.release_date} </td>

                    </tr>`)


                    
                })
            },
            error: function(error){
                console.error(error);
            }
        })
    })






})