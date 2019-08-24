
function changeLanguage(lng){
    //Get data from the json
    
    //Replace the text from the document with json data with key lng
    
    //Try to change the home buttons text
    if (lng == 'hr'){
      document.getElementById('homeLink').innerHTML = "<a title='Brings you back to homepage'>POCETNA</a>"
      document.getElementById('aboutLink').innerHTML = "<a title='Takes you to about me page'>O MENI</a>"
      document.getElementById('eduLink').innerHTML = "<a title='Takes you to education page'>EDUKACIJA</a>"
      document.getElementById('careerLink').innerHTML = "<a title='Takes you to career page'>KARIJERA</a>"
      document.getElementById('projLink').innerHTML = "<a title='Takes you to projects page'>PROJEKTI</a>"
      document.getElementById('coursesLink').innerHTML = "<a title='Takes you to courses page'>KURSEVI</a>"
      document.getElementById('docsLink').innerHTML = "<a title='Takes you to documents page'>DOKUMENTI</a>"
      document.getElementById('contactLink').innerHTML = "<a title='Takes you to contacts page'>KONTAKT</a>"
    } else if (lng == 'fi') {
        document.getElementById('homeLink').innerHTML = "<a title='Brings you back to homepage'>KOTI</a>"
        document.getElementById('aboutLink').innerHTML = "<a title='Takes you to about me page'>MINUSTA</a>"
        document.getElementById('eduLink').innerHTML = "<a title='Takes you to education page'>KOULUTUS</a>"
        document.getElementById('careerLink').innerHTML = "<a title='Takes you to career page'>URA</a>"
        document.getElementById('projLink').innerHTML = "<a title='Takes you to projects page'>PROJEKTIT</a>"
        document.getElementById('coursesLink').innerHTML = "<a title='Takes you to courses page'>KOULUTU</a>"
        document.getElementById('docsLink').innerHTML = "<a title='Takes you to documents page'>DOKUMENTIT</a>"
        document.getElementById('contactLink').innerHTML = "<a title='Takes you to contacts page'>YHTEYS</a>"
    } else {
        document.getElementById('homeLink').innerHTML = "<a title='Brings you back to homepage'>HOME</a>"
        document.getElementById('aboutLink').innerHTML = "<a title='Takes you to about me page'>ABOUT ME</a>"
        document.getElementById('eduLink').innerHTML = "<a title='Takes you to education page'>EDUCATION</a>"
        document.getElementById('careerLink').innerHTML = "<a title='Takes you to career page'>CAREER</a>"
        document.getElementById('projLink').innerHTML = "<a title='Takes you to projects page'>PROJECTS</a>"
        document.getElementById('coursesLink').innerHTML = "<a title='Takes you to courses page'>COURSES</a>"
        document.getElementById('docsLink').innerHTML = "<a title='Takes you to documents page'>DOCUMENTS</a>"
        document.getElementById('contactLink').innerHTML = "<a title='Takes you to contacts page'>CONTACT</a>"
    }
  }