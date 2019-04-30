$(() => {
    const titleCase = (str) => {
        let strArr = str.toLowerCase().split(" ")
        for (let i = 0; i < strArr.length; i++){
            strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1)
        }

        return strArr.join(" ")
    }

    $("#newSushi").on("submit", (event) => {
        event.preventDefault();

        let newSushiName = $("#sushiName").val().trim()

        if(!newSushiName) {
            alert("There is no such thing as an invisible sushi")
            return
        }

        let properName = titleCase(newSushiName)

        let newSushi = {
            name: properName
        }

        $.ajax("/api/sushi", {
            type: "POST",
            data: newSushi
        }).then(() => {
            console.log("new offering plated");
            // Reload the page to get the updated list
            location.reload();
        })
    })
    
    $(".eat").on("click", function() {
        let id = $(this).data("id")
        console.log(id)

        let devouredId = {
            id: id
        }

        $.ajax("/api/sushi/" + id ,{
            type: "PUT",
            data: devouredId
        }).then(() => {
            location.reload();
        })
    })

    $(".delete").on("click", function() {
        let id = $(this).data("id")

        let deleteId = {
            id: id
        }

        $.ajax("/api/sushi/" + id ,{
            type: "DELETE",
            data: deleteId
        }).then(() => {
            location.reload()
        })

    })

    $(".helpBtn").on("click", function() {
        $.ajax("/api/sushi", {
            type: "DELETE"
        }).then(() => {
            location.reload()
        })
    })

    //function controlling a CSS element
    if($(window).height() < $(document).height()){
        $(".help").removeClass("hidden")
    } else {
        $(".help").addClass("hidden")
    }
})