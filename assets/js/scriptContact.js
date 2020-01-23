$("#submit").click(saveData);

function saveData() {

    var name = $(".fullName").val();

    localStorage.setItem("Name",name);

    console.log(name);

    var email = $(".emailAddy").val();

    localStorage.setItem("Email",email);

    console.log(email);

    var mess = $(".message").val();

    localStorage.setItem("Message",mess);

    console.log(mess);
}