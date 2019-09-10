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
      SteamBoilerDesc : "This project is serving as an implementation of my bachelor degree paper \"Automation of ships steam boiler\". It covers all the chapters written about in the paper and it even gives the project the HMI and a working simulator.<br><br>Second use of this project is to serve as a portfolio of my automation programming skills, product management, hardware and control system design and as such it is changing from year to year.<br><br>The <a href=\"https://github.com/tkucic/AutoSteamBoiler\">control program</a> and the HMI have been implemented with CODESYS 3.5 and serialized with my own <a href=\"https://github.com/tkucic/AutoSteamBoiler\">Python serializer</a> for easier versioning with git. The repository is free to view, download and try, but distributing and using it as a base for further product development is not allowed.",
      curriculumTxt : "Curriculum",
      thesisTxt : "Thesis",
      certificationsTxt : "Certifications"
  },
  fi:{
    greeting : "MOI, MINÄ OLEN TONI",
    introTxt : "<b>\"For me, what drives me, is all things electric and automated. I cannot imagine myself doing anything else.\"</b><br><br>I have been working as an Electrotechnical officer onboard the largest container ships in the world where I learnt how shipboard systems work in practice. That knowledge improved my automation designing and programming skills later on in my carreer. Because of this I can provide unique experience from the operators and designers point of view, bridging the gap.<br><br>In recent years I have been working with Power control automation products, building them from the ground up or improving the maintainance processes of existing products using Scrum and Lean Six Sigma methodologies.<br><br>I am also a Python programmer so decision support with data analysis and automation assisted product development are my main points of interest.<br><br>",
    langTxt: "Ohjelmointi kielet",
    expertiseTxt : "Osaamiseni",
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
    platformsTxt : "Alustat",
    SteamBoilerDesc : "This project is serving as an implementation of my bachelor degree paper \"Automation of ships steam boiler\". It covers all the chapters written about in the paper and it even gives the project the HMI and a working simulator.<br><br>Second use of this project is to serve as a portfolio of my automation programming skills, product management, hardware and control system design and as such it is changing from year to year.<br><br>The <a href=\"https://github.com/tkucic/AutoSteamBoiler\">control program</a> and the HMI have been implemented with CODESYS 3.5 and serialized with my own <a href=\"https://github.com/tkucic/AutoSteamBoiler\">Python serializer</a> for easier versioning with git. The repository is free to view, download and try, but distributing and using it as a base for further product development is not allowed.",
    curriculumTxt : "Curriculum",
    thesisTxt : "Thesis",
    certificationsTxt : "Päätevyydet"
  },
  hr:{
    greeting : "BOK, JA SAM TONI",
    introTxt : "<b>\"For me, what drives me, is all things electric and automated. I cannot imagine myself doing anything else.\"</b><br><br>I have been working as an Electrotechnical officer onboard the largest container ships in the world where I learnt how shipboard systems work in practice. That knowledge improved my automation designing and programming skills later on in my carreer. Because of this I can provide unique experience from the operators and designers point of view, bridging the gap.<br><br>In recent years I have been working with Power control automation products, building them from the ground up or improving the maintainance processes of existing products using Scrum and Lean Six Sigma methodologies.<br><br>I am also a Python programmer so decision support with data analysis and automation assisted product development are my main points of interest.<br><br>",
    langTxt: "Programski jezici",
    expertiseTxt : "Strucnost",
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
    platformsTxt : "Platforme",
    SteamBoilerDesc : "This project is serving as an implementation of my bachelor degree paper \"Automation of ships steam boiler\". It covers all the chapters written about in the paper and it even gives the project the HMI and a working simulator.<br><br>Second use of this project is to serve as a portfolio of my automation programming skills, product management, hardware and control system design and as such it is changing from year to year.<br><br>The <a href=\"https://github.com/tkucic/AutoSteamBoiler\">control program</a> and the HMI have been implemented with CODESYS 3.5 and serialized with my own <a href=\"https://github.com/tkucic/AutoSteamBoiler\">Python serializer</a> for easier versioning with git. The repository is free to view, download and try, but distributing and using it as a base for further product development is not allowed.",
    curriculumTxt : "Curriculum",
    thesisTxt : "Thesis",
    certificationsTxt : "Svjedodzbe"
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