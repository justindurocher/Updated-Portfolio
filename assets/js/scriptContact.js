$("#submit").click(saveData);

$(".myName").hover(hoveringGit,function(){

    $("p").hide();

    $("img").hide();

});

$(".yourName").hover(hoveringLink,function(){

    $("p").hide();

    $("img").hide();
    
});

$(".linkedIn").hover(hoveringLink,function(){

    $("p").hide();

    $("img").hide();
})
$(".gitHub").hover(hoveringGit,function(){

    $("p").hide();

    $("img").hide();

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

function hoveringLink() {

    let linked = $("<img width='50px' height='50px'>");

    linked.attr("src","assets/images/Linkedin-logo.png");

    linked.css("margin-bottom","10px");

    let meToo = $("<p>").text("Justin Durocher");

    let job = $("<p>").text("Laz Parking Valet");

    $(".yourName").append(linked);

    $(".yourName").append(meToo);

    $(".yourName").append(job)

}



