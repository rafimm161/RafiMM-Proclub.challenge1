const text = document.getElementById("text");
const password = document.getElementById("password");
const content = document.getElementById("content");
const button = document.getElementById("show");
const submit = document.getElementById("submit");
const email = document.getElementById("email");

button.addEventListener("click",function() {
    password.setAttribute("type", "text");
});

submit.addEventListener('click', function() {
    content.innerHTML = text.value
    content.innerHTML = password.value
    content.innerHTML = email.value
});

function ubahwarna(value) {
    console.log(value);
    document.body.style.backgroundColor = value;
}
