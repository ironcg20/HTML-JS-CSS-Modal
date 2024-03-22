// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// When the user clicks the button, open Lucid App content in a modal dialog window
btn.onclick = function() {
  // Add 'zoom-in' class to the body to zoom in on the content
  document.body.classList.add('zoom-in');

  // Open Lucid App content in a new window
  var lucidWindow = window.open("https://www.lucid.app/", "_blank", "width=600,height=400");

  // When the modal window is closed, remove the 'zoom-in' class from the body
  lucidWindow.onunload = function() {
    document.body.classList.remove('zoom-in');
  };
};
