/* navbar initialization */

// Navbar initialization

$("#navId a").click(e => {
  e.preventDefault();
  $(this).tab("show");
});
