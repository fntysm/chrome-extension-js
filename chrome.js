// title of the project
const save = document.getElementById("input-btn");
// delete button
const deleteBtn = document.getElementById("delete-btn");
// save the tqb button
const tabBtn = document.getElementById("tab-btn");
// an array to store the input text data (save)
let myLinks = [];
// to push the items of the array inside the local storage 
const alink = JSON.parse(localStorage.getItem("myLinks"));
// mouseout of the save button
save.addEventListener("mouseout",function(){
    save.innerHTML = "SAVE INPUT"
})

save.addEventListener("click",function(){
    let inputEl = document.getElementById("input-elt");
    save.innerHTML = "INPUT SAVED";
    myLinks.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLinks", JSON.stringify(myLinks));
    renderInputText(myLinks);
})
const renderInputText = (myLinks) => {
    let listItems = "";
    let ulEl = document.getElementById("ulEl");
    for(let i=0;i<myLinks.length;i++){
    listItems += `
    <li>
    <h3 target='_blank'> ${myLinks[i]} </h3>
    </li>`;
     }
    ulEl.innerHTML = listItems;
}
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