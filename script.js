const form = document.getElementById("my_form");
const errorMsg = document.querySelector('.errorMsg');

form.addEventListener("submit", e => {
    const pass = document.getElementById("password").value;
    const conf = document.getElementById("confirm").value;
    if (pass !== conf) {
        console.log(pass.innerHTML);
        console.log(conf.innerHTML);
        e.preventDefault();
        conf.classList.add('error');
        errorMsg.style.display = "block";
    }
})