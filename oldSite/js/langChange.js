//Defines what text should be displayed for what object id
var langData = {
  en: {
      greeting : "HI, I AM TONI",
      introTxt : "<b>\"For me, what drives me, is all things electric and automated. I cannot imagine myself doing anything else.\"</b><br><br>I have been working as an Electrotechnical officer onboard the largest container ships in the world where I learnt how shipboard systems work in practice. That knowledge improved my automation designing and programming skills later on in my carreer. Because of this I can provide unique experience from the operators and designers point of view, bridging the gap.<br><br>In recent years I have been working with Power control automation products, building them from the ground up or improving the maintainance processes of existing products using Scrum and Lean Six Sigma methodologies.<br><br>I am also a Python programmer so decision support with data analysis and automation assisted product development are my main points of interest.<br><br>",
      langTxt: "Languages",
      expertiseTxt : "Expertise",
      skill1 : "Control system design",
			skill2 : "Software architecture design",
			skill3 : "Library development",
			skill4 : "HMI, SCADA design",
			skill5 : "Special implementation",
			skill6 : "Automated PLC programming",
			skill7 : "Automated documentation generation",
			skill8 : "Unit testing",
			skill9 : "Marine experience",
			skill10 : "Power control systems",
      skill11 : "Data analysis for decision support",
      platformsTxt : "Platforms",
      SteamBoilerDesc : "This project is serving as an implementation of my bachelor degree paper \"Automation of ships steam boiler\". It covers all the chapters written about in the paper and it even gives the project the HMI and a working simulator.<br><br>Second use of this project is to serve as a portfolio of my automation programming skills, product management, hardware and control system design and as such it is changing from year to year.<br><br>The <a href=\"https://github.com/tkucic/AutoSteamBoiler\" target=\"new\">control program</a> and the HMI have been implemented with CODESYS 3.5 and serialized with my own <a href=\"https://github.com/tkucic/AutoSteamBoiler\" target=\"new\">IEC61131 serializer</a> for easier versioning with git. The repository is free to view, download and try, but distributing and using it as a base for further product development is not allowed.",
      curriculumTxt : "Curriculum",
      thesisTxt : "Thesis",
      certificationsTxt : "Certifications"
  },
  fi:{
    greeting : "MOI, MINÄ OLEN TONI",
    introTxt : "<b>\"For me, what drives me, is all things electric and automated. I cannot imagine myself doing anything else.\"</b><br><br>I have been working as an Electrotechnical officer onboard the largest container ships in the world where I learnt how shipboard systems work in practice. That knowledge improved my automation designing and programming skills later on in my carreer. Because of this I can provide unique experience from the operators and designers point of view, bridging the gap.<br><br>In recent years I have been working with Power control automation products, building them from the ground up or improving the maintainance processes of existing products using Scrum and Lean Six Sigma methodologies.<br><br>I am also a Python programmer so decision support with data analysis and automation assisted product development are my main points of interest.<br><br>",
    langTxt: "Ohjelmointi kielet",
    expertiseTxt : "Osaamiseni",
    skill1 : "Ohjausjärjestelmän suunnittelu",
    skill2 : "Ohjelmistoarkkitehtuurin suunnittelu",
    skill3 : "Ohjelmointikirjastojen kehitys",
    skill4 : "Graafisen käyttöjärjerstelmien suunnittellu ja kehitys",
    skill5 : "Erityisprojektien toteutus",
    skill6 : "Automatisoitu PLC ohjelmointi",
    skill7 : "Automatisoitu dokumentointi",
    skill8 : "Unit testaus",
    skill9 : "Meriteollisuuden kokemus",
    skill10 : "Sähköohjausjärjestelmät",
    skill11 : "Data-analyysi päätöksentekoa varten",
    platformsTxt : "Alustat",
    SteamBoilerDesc : "This project is serving as an implementation of my bachelor degree paper \"Automation of ships steam boiler\". It covers all the chapters written about in the paper and it even gives the project the HMI and a working simulator.<br><br>Second use of this project is to serve as a portfolio of my automation programming skills, product management, hardware and control system design and as such it is changing from year to year.<br><br>The <a href=\"https://github.com/tkucic/AutoSteamBoiler\" target=\"new\">control program</a> and the HMI have been implemented with CODESYS 3.5 and serialized with my own <a href=\"https://github.com/tkucic/AutoSteamBoiler\" target=\"new\">IEC61131 serializer</a> for easier versioning with git. The repository is free to view, download and try, but distributing and using it as a base for further product development is not allowed.",
    curriculumTxt : "Ansioluettelo",
    thesisTxt : "Tutkielmat",
    certificationsTxt : "Sertifikaatit"
  },
  hr:{
    greeting : "BOK, JA SAM TONI",
    introTxt : "<b>\"Pronađi posao koji voliš i nećeš morati raditi ni jedan dana svog života.\"</b><br><br>Započeo sam karijeru kao elektrotehnički oficir na največim brodovima na svijetu gđe sam naučio kako brodski sustavi rade u praksi. To znanje je poboljšalo moje dizajnerske i programerske vještine u industrijskoj automatici u daljnjoj karijeri. Zbog toga iskustva mogu pružiti jedinstveno iskustvo sa gledišta korisnika i dizajnera, s kojim se mogu premostiti sve barijere u razvoju proizvoda.<br><br>U nedavnim godinama radio sam sa razvojom automatske kontrole električnih centrala u pomorstvu, razvijajuči ih od početka ili poboljšavajuči procese održavanja postoječih proizvoda koristeći metodologije kao Scrum i Lean Six Sigma.<br><br>U dnevnim zadacima koristim i Python programski jezik. Analiza podataka u svrhu podrške u odlučivanju i automatikom potpomognuto razvijanje proizvoda su moje glavne točke zanimanja.<br><br>",
    langTxt: "Programski jezici",
    expertiseTxt : "Ekspertiza",
    skill1 : "Dizajn kontrolnih sustava",
    skill2 : "Dizajn softverskih arhitektura",
    skill3 : "Razvoj programskih biblioteka",
    skill4 : "Dizajn grafičkih sučelja (HMI, SCADA)",
    skill5 : "Specijalne programske implementacije",
    skill6 : "Automatsko PLC programiranje",
    skill7 : "Automatska generacija dokumentacije",
    skill8 : "Unit testiranje",
    skill9 : "Iskustvo iz pomorske industrije",
    skill10 : "Sustavi za kontrolu električne snage",
    skill11 : "Analiza podataka za podršku u odlučivanju",
    platformsTxt : "Platforme",
    SteamBoilerDesc : "Ovaj projekt služi kao implementacija mojeg prvostupničkog rada \"Automatsko paljenje brodskog parnog kotla\". Projekt pokriva sva poglavlja objašnjena u radu i čak daje radu grafičko suchelje i korisni simulator.<br><br>Druga namjena ovog projekta je da služi kao portfolio mojih programskih vještina, proizvodnog menadžmenta, dizajna hardvera i kontrolnog sustava i kao takav se mijenja iz godine u godinu.<br><br><a href=\"https://github.com/tkucic/AutoSteamBoiler\" target=\"new\">Kontrolni program</a> i grafičko suchelje je implementirano u CODESYS-u 3.5 i serializirano sa mojim vlastitim <a href=\"https://github.com/tkucic/AutoSteamBoiler\" target=\"new\">IEC61131 serializerom</a> za lakše praćenje promjena sa GIT-om. Repozitorij je besplatan za pregledavanje, skidanje i testiranje ali je zabranjenja svakakva distribucija, modificiranje i daljnji razvoj.",
    curriculumTxt : "Curriculum",
    thesisTxt : "Disertacije",
    certificationsTxt : "Certifikati"
  }
}

function changeLanguage(lng){
  //Iterate over the ids found in langData.js with the key
  var data = langData[lng]
  for (var id in data){
    var val = data[id]
    document.getElementById(id).innerHTML = val
  }
  if (lng == 'fi'){
    window.alert("Ei ole vielä käänetty kokonaan.");
  }
}