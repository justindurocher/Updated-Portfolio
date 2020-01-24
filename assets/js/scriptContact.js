$("#submit").click(saveData);


$(".gitHub").hover(hoveringGit,function(){

    $("img").hide();

    $("p").hide();

});
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

    location.reload();
}

function hoveringGit() {

    let gitHub = $("<img width='50px' height='50px'>")

    gitHub.attr("src", "assets/images/github-logo.png")

   let me =$("<p>").text("justindurocher");

   let repos = $("<p>").text("15 Repositories")

    $(".myName").append(gitHub);

    $(".myName").append(me);

    $(".myName").append(repos);

}




