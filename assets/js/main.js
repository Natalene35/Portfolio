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
        $("#portfolio").on("click", function () {
           displayPortfolio();
        });
    }

    async function displayData(e) {
        data = await callApi();
    
        $(".demo").each(function (e) {
            if ($("a").id == data.nom) {
                console.log("target : " + e.currentTarget);
            }
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

    window.onload = displayData;
})
