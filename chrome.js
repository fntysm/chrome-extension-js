const save = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
let myLinks = []; 
const alink = JSON.parse(localStorage.getItem("myLinks"));
save.addEventListener("mouseout",function(){
    save.innerHTML = "SAVE INPUT"
})

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
deleteBtn.addEventListener("mouseout",function(){
    deleteBtn.innerHTML = "DELETE ALL";
})
deleteBtn.addEventListener("click",function(){
    deleteBtn.innerHTML = "ITEMS DELETED";
    localStorage.clear();
    myLinks = [];
    renderLinks(myLinks);
})

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active : true, currentWindow : true},function(tabs){
        myLinks.push(tabs[0].url)
        localStorage.setItem("myLinks", JSON.stringify(myLinks));
        renderLinks(myLinks); 
    })     
})