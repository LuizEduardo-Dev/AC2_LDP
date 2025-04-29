const content = document.getElementById("content");

content.addEventListener("input", function () {
    content.value = content.value.toUpperCase();
});