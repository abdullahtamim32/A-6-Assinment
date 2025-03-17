// seven button part

let loadData = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res => res.json())
    .then(data => sevenBox(data.data))
}
let sevenBox = (data) =>{
    let 
}
loadData()