jQuery(document).ready(function ($) {
    abonnement();

    let data;
    let webLink = $('<a href="#" target="_blank">Voir le site</a>');
    let webGithub = $('<a href="#" target="_blank">Github</a>');

    async function callApi() {
        let response = await fetch("assets/link.json");

        if (response.ok) {
            return response.json();
        }
    }

    function abonnement() {
        $(".demo").on("click", function () {
            displayData();
        });
    }

    async function displayData() {
        data = await callApi();
        
        $(".demo").each(function (index) {
            let linkId = $(this).attr('id');
            console.log("nom id : " + linkId);

            console.log(data.sites[index]);
          
            // N'affiche que la derniere donnée du json
            $("h1").remove();
            if("h2") $("h2").remove();
            $("#home").append("<h2>" + data.sites[index].nom + "</h2>");
            $("main p").remove();
            $("#home").append(data.sites[index].text);
            $("#home").append(webLink).attr("href", data.sites[index].site);
        });
    }

    async function displayPortfolio() {
        console.log(data.portfolio[0].site);
        $("h1").remove();
        $("#home").prepend("<h2>" + data.portfolio[0].nom + "</h2>");
        $("main p").remove();
        $("#home").append(data.portfolio[0].text);
        $("#home").append(webLink).attr("href", "https://www.w3schools.com/jquery/html_prop.asp");
    }
  

    
    
})
