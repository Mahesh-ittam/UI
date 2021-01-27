function Registration() { 
    var name = 
      document.forms["RegForm"]["Name"]; 
    var email = 
      document.forms["RegForm"]["EMail"]; 
    var phone = 
      document.forms["RegForm"]["Telephone"]; 
    var Tourists = 
      document.forms["RegForm"]["no. of tourists"]; 
    var days = 
      document.forms["RegForm"]["no. of days"]; 
    var Transpotation = 
      document.forms["RegForm"]["Mode of Transpotation"]; 
    var Hotels=
      document.forms["RegForm"]["Hotels Near Me"]

    if (name.value == "") { 
      window.alert("Please enter your name"); 
      name.focus(); 
      return false; 
    } 
    if (email.value == "") { 
      window.alert( 
      "Please enter a valid e-mail address"); 
      email.focus(); 
      return false; 
    } 
    if (phone.value == "") { 
      window.alert( 
      "Please enter your telephone number"); 
      phone.focus(); 
      return false; 
    } 
    if (Tourists.value == "") { 
      window.alert("No. of Tourists"); 
      address.focus(); 
      return false; 
    } 		
    if (password.value == "") { 
      window.alert("Please enter your transpotation"); 
      password.focus(); 
      return false; 
    } 

    if (what.selectedIndex < 1) { 
      alert("Hotels Near Me"); 
      what.focus(); 
      return false; 
    } 
    return true; 
  } 