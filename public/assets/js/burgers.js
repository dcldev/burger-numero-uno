// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".alter-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newMonch = $(this).data("newmonch");
  
      var newMonchState = {
        devoured: newMonch
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newMonchState
      }).then(
        function() {
          console.log("changed consumed to", newMonch);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-burger").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurg = {
        burger_name: $("#burg").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurg
      }).then(
        function() {
          console.log("Manifested new BURGER");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("Snapped BURGER away!", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  