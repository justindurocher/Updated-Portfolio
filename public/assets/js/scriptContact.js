$("#submit").click(saveData);

$(".myName").click(linkGit);

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

    const name = $(".fullName").val();

    localStorage.setItem("Name",name);

    console.log(name);

    const email = $(".emailAddy").val();

    localStorage.setItem("Email",email);

    console.log(email);

    const mess = $(".message").val();

    localStorage.setItem("Message",mess);

    console.log(mess);

    location.reload();
}

function hoveringGit() {

    let gitHub = $("<img width='50px' height='50px'>")

    gitHub.attr("src", "assets/images/github-logo.png")

   const me =$("<p>").text("justindurocher");

   const repos = $("<p>").text("21 Repositories")

    $(".myName").append(gitHub);

    $(".myName").append(me);

    $(".myName").append(repos);

}

function hoveringLink() {

    let linked = $("<img width='50px' height='50px'>");

    linked.attr("src","assets/images/Linkedin-logo.png");

    linked.css("margin-bottom","10px");

    const meToo = $("<p>").text("Justin Durocher");

    const job = $("<p>").text("Laz Parking Valet");

    $(".yourName").append(linked);

    $(".yourName").append(meToo);

    $(".yourName").append(job)

}

 function linkGit() {

    window.location.replace("https://github.com/justindurocher")

};



function linkLink() {

    window.location.replace("https://www.linkedin.com/in/justin-durocher-a34946197/");

}


