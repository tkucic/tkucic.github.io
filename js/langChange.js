function changeLanguage(lng){
  //Iterate over the ids found in langData.js with the key
  var data = langData[lng]
  for (var id in data){
    var val = data[id]
    document.getElementById(id).innerHTML = val
  }  
}