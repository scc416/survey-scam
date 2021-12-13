const form = $("#form");

form.on("submit", (event) => {
  event.preventDefault();
  form.trigger("reset");
});