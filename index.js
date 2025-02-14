let passwordButton = document.getElementById("btn_generate_password");

let passwordInput = document.getElementById("input_password");

function generate_password() {
  let password = "";
  let possible =
    "ABCDFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*";
  for (i = 0; i < 15; i++) {
    password += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  passwordInput.value = password;
}
