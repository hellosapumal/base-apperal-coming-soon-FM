document.getElementById("submit").addEventListener("click", send);

function send() {
  const email = document.getElementById("email");
  const iconError = document.getElementById("icon-error");
  if (!email.checkValidity()) {
    document.getElementById("er-msg").innerHTML = "Please provide a valid email";
    if (!iconError.classList.contains("show")) {
      iconError.classList.add("show");
    }
  } else {
    document.getElementById("er-msg").innerHTML = "";
    if (iconError.classList.contains("show")) {
      iconError.classList.remove("show");
      document.getElementById("email").value = "";
      document.getElementById("er-msg").innerHTML = "👍";
    }
  }
}
