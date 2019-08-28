//Defines what text should be displayed for what object id
var langData = {
  en: {
      aboutLink : "ABOUT",
      portfLink : "PORTFOLIO",
      docsLink : "DOCS",
      homeTitle : "HI, I AM TONI, PLC PROGRAMMER.",
      homeText : "Read more about me below"
  },
  fi:{
      aboutLink : "MINUSTA",
      portfLink : "PORTFOLIO",
      docsLink : "DOKUMENTIT",
      homeTitle : "MOI, MINÄ OLEN TONI, PLC KOODARI.",
      homeText : "Lue lisää minusta alhaalla"
  },
  hr:{
      aboutLink : "O MENI",
      portfLink : "PORTFOLIO",
      docsLink : "DOKUMENTI",
      homeTitle : "POZDRAV, JA SAM TONI, PLC PROGRAMER.",
      homeText : "Procitaj ispod vise o meni"
  }
}

function changeLanguage(lng){
  //Iterate over the ids found in langData.js with the key
  var data = langData[lng]
  for (var id in data){
    var val = data[id]
    document.getElementById(id).innerHTML = val
  }  
}