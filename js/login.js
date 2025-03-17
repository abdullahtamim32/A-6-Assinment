document.getElementById("hero-section-banner-btn").addEventListener("click", () => {
   let secondInputField = document.getElementById("hero-sec-second-input-field");
   let secondInputFieldValue = parseInt(secondInputField.value);
//    console.log(secondInputFieldValue)
   if(secondInputFieldValue === 123456){
     // faq logic section
    function faq (){

       let herosec= document.getElementById("hero-sec-main-parent");
       herosec.style.display = "none"
    }
    faq()
     
   }else{
    alert("data not founded")
   }
})








