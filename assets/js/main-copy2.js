jQuery(document).ready(function ($) {
  abonnement();

  let data;
  let webLink = $('<a href="#" target="_blank">Voir le site</a>');
  let webGithub = $('<a href="#" target="_blank">Github</a>');
  //Container parent des liens
  let linksContainer = $(".aside-content");
  // nombre de liens recuperés dynamiquement
  let nbLinks = linksContainer.children.length;


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


  // genere un tableau de booleens initalisé a false
  const getBoolArray = (length) => {
    let boolArray = [];
    for (let i = 0; i < length; i++) boolArray[i] = false;
    return boolArray;
  };

  let boolArray = getBoolArray(nbLinks);


  async function displayData(e) {
    data = await callApi();
    let lastClicked;

    let linkElmt = e.currentTarget.id;

    //console.log(linkElmt);
    //console.log("current target : " + e.currentTarget);
    $(".demo").each(function (index) {
      //Selectionne l'id des a
      if (linkElmt == data.sites[index].nom) {
        //console.log("linkElmt : " + linkElmt);
        if (lastClicked != linkElmt) {
          boolArray[index] = false;
        }

        if (boolArray[index]) {
          $("h1").remove();
          if ("h3") $("h3").remove();
          $("#home").append("<h1>" + data.accueil[0].nom + "</h1>");
          $("main p").remove();
          $("#home").append(data.accueil[0].text);
          if (webLink) webLink.remove();
          if (webGithub) webGithub.remove();
        } else {
          //console.log(data.sites[index]);
          $("h1").remove();
          if ("h3") $("h3").remove();
          $("#home").append("<h3>" + data.sites[index].nom + "</h3>");
          $("main p").remove();
          $("#home").append(data.sites[index].text);
          $("main a").remove();
          $("#home").append($('<a href="' + data.sites[index].github +' "target="_blank">Github</a>'));

          if (data.sites[index].site !== "#") {
            //console.log("passe");
            $("#home").append($('<a href="' + data.sites[index].site +' "target="_blank">Voir le site</a>'));
          }
          
        }
        boolArray[index] = !boolArray[index];
        lastClicked = linkElmt;
      }
      
    });
  }
});
