const save = document.getElementById("input-btn");
save.addEventListener("mouseout",function(){
    save.innerHTML = "SAVE INPUT"
    save.style.border = "";
})

let myLinks = [];
let alink = JSON.parse(localStorage.getItem("myLinks"));
save.addEventListener("click",function(){
    let inputEl = document.getElementById("input-elt");
    save.innerHTML = "INPUT SAVED";
    myLinks.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLinks", JSON.stringify(myLinks));
    renderLinks(myLinks);
})
function renderLinks(myLinks){
    let listItems = "";
    let ulEl = document.getElementById("ulEl");
    for(let i=0;i<myLinks.length;i++){
    listItems += `
    <li>
    <a target='_blank' href='${myLinks[i]}'> ${myLinks[i]} </a>
    </li>`;
     }
    ulEl.innerHTML = listItems;
}
if(alink){
    myLinks = alink;
    renderLinks(myLinks);
}
