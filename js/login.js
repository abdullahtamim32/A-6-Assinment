document.getElementById("hero-section-banner-btn").addEventListener("click", () => {
   let secondInputField = document.getElementById("hero-sec-second-input-field");
   let secondInputFieldValue = parseInt(secondInputField.value);
//    console.log(secondInputFieldValue)
   if(secondInputFieldValue === 123456){
     // faq logic section
    function faq (){
      //   hero section banish
       let herosec= document.getElementById("hero-sec-main-parent");
       herosec.style.display = "none"
      //  faq sec visible
      let faqSec = document.getElementById("FAQ-MAIN-PARENT");
       faqSec.style.display = "inline-block"
   }
    faq()
     
   }else{
    alert("data not founded")
   }
})








