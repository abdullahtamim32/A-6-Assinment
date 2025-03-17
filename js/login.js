document.getElementById("hero-section-banner-btn").addEventListener("click", () => {
   let secondInputField = document.getElementById("hero-sec-second-input-field");
   let secondInputFieldValue = parseInt(secondInputField.value);
//    console.log(secondInputFieldValue)
   if(secondInputFieldValue === 123456){
    alert("data looded")
   }else{
    alert("data not founded")
   }
})


