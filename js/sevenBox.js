// seven button part

let loadData = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res => res.json())
    .then(data => sevenBox(data.data))
}
let sevenBox = (datas) =>{
    let sevenBoxMainParent = document.getElementById("seven-box-sec-id");
    for(let data of datas){
        let createNewDivForSevenSection = document.createElement("div");
        
        createNewDivForSevenSection.innerHTML = `<button class="btn nav-btn font-semibold"><img src="assets/fa-book-open.png" alt="">Lesson-${data.level_no}</button>`
        sevenBoxMainParent.appendChild(createNewDivForSevenSection)
    }

}
loadData()