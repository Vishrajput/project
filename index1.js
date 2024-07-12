function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  let x = document.forms["myForm"]["fname"].value;
  if(x==""){
    alert("Gmail not filled");
    return false;
  }
