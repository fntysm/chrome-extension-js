const save = document.getElementById("input-btn");
save.addEventListener("mouseout",function(){
    save.innerHTML = "SAVE INPUT"
    save.style.border = "";
})

let myLinks = ["i'm not getting younger","but when i'm older","i'll be so much stronger","i can't even stay up"];
const inputEl = document.getElementById("input-elt");
save.addEventListener("click",function(){
    save.innerHTML = "INPUT SAVED";
    save.style.border = "5px solid navy";
    myLinks.push(inputEl.value);
})
let ulEl = document.getElementById("ulEl");
let listItems = ""
for(let i=0;i<myLinks.length;i++){
    listItems += "<li>"+ myLinks[i] +"</li>";
}
ulEl.innerHTML = listItems;