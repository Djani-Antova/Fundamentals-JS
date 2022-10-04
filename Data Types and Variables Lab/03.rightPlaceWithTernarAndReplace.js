function rightPlace(firstString, char, secondString) {
  
    console.log(firstString.replace("_", char)===secondString? "Matched" : "Not Matched");

   
   
}
rightPlace('Str#ng', 'I', 'Strong')