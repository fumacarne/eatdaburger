$(".devoured_button").on("click", function () {
  let id = $(this).data("id");
  $.post("/api/burgers/devour", { id }, () => {
    location.reload();
  })
})

$("#add_burger").on("click", function () {
  event.preventDefault();
  let newBurger = { burger_name: $("#burger_name").val().trim() };
  if (newBurger.burger_name !== "") {
    $.post("/api/burgers", newBurger, () => {
      location.reload();
    });
  } else { alert("Enter a burger!") }
})
