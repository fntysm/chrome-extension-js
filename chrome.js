const save = document.getElementById("input-btn");
save.addEventListener("mouseout",function(){
    save.innerHTML = "SAVE INPUT"
    save.style.border = "";
})

let myLinks = [];
save.addEventListener("click",function(){
    let inputEl = document.getElementById("input-elt");
    let listItems = "";
    save.innerHTML = "INPUT SAVED";
    save.style.border = "5px solid navy";
    myLinks.push(inputEl.value);
    renderLinks(myLinks,listItems);
    inputEl.value = "";
})
function renderLinks(myLinks,listItems){
    let ulEl = document.getElementById("ulEl");
    for(let i=0;i<myLinks.length;i++){
    listItems += `
    <li>
    <a target='_blank' href='${myLinks[i]}'> ${myLinks[i]} </a>
    </li>`;
     }
    ulEl.innerHTML = listItems;
}
