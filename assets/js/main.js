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
    $(".demo").on("click", function (e) {
      displayData(e);
    });
  }

  async function displayData(e) {
    data = await callApi();

    let linkElmt = e.currentTarget.id;
    //console.log(linkElmt);
    //console.log("current target : " + e.currentTarget);
    $(".demo").each(function (index) {
      //Selectionne l'id des a
      if (linkElmt == data.sites[index].nom) {
        //console.log(linkElmt);
        //console.log(data.sites[index]);
        $("h1").remove();
        if ("h3") $("h3").remove();
        $("#home").append("<h3>" + data.sites[index].nom + "</h3>");
        $("main p").remove();
        $("#home").append(data.sites[index].text);
        $("#home").append(webGithub).attr("href", data.sites[index].github);
        if(webLink) webLink.remove();
        if (data.sites[index].site !== "#") {
            console.log("passe");
          $("#home").append(webLink).attr("href", data.sites[index].site);
        }
      }
    });
  }
});
