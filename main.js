const text = document.getElementById("text");

if (localStorage.getItem("savedText")) {
  text.value = localStorage.getItem("savedText");
}

text.addEventListener("input", () => {
  localStorage.setItem("savedText", text.value);
});
