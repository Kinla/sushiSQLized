/* eslint-disable no-undef */
$(() => {
  const titleCase = (str) => {
    let strArr = str.toLowerCase().split(" ");
    for (let i = 0; i < strArr.length; i++){
      strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }

    return strArr.join(" ");
  };

  $("#newSushi").on("submit", (event) => {
    event.preventDefault();

    let newSushiName = $("#sushiName").val().trim();

    if(!newSushiName) {
      alert("There is no such thing as an invisible sushi.");
      return;
    }

    let properName = titleCase(newSushiName);

    let newSushi = {
      name: properName
    };

    $.ajax("/api/sushi", {
      type: "POST",
      data: newSushi
    }).then(() => {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".feed").on("submit", function(event) {
    event.preventDefault();

    let sushiId = $(this).find(".servant").data("sushi");
    let servantName = $(this).find(".servant").val().trim();
    let properServantName = titleCase(servantName);

    let data = {
      sushiId: sushiId,
      servantName: properServantName

    };

    $.ajax("/api/servant/new" ,{
      type: "POST",
      data: data
    }).then(() => {
      location.reload();
    });
  });

  $(".delete").on("click", function() {
    let id = $(this).data("id");

    let deleteId = {
      id: id
    };

    $.ajax("/api/sushi/" + id ,{
      type: "DELETE",
      data: deleteId
    }).then(() => {
      location.reload();
    });

  });

  $(".helpBtn").on("click", function() {
    $.ajax("/api/sushi", {
      type: "DELETE"
    }).then(() => {
      location.reload();
    });
  });

});