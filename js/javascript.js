
function formSub() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var msg = document.getElementById("message");
    window.alert(name.value + " , " + email.value + " , " + msg.value);
}




document.getElementById("submit").addEventListener("click", formSub, false);





