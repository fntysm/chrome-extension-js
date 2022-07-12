const save = document.getElementById("input-btn");
save.addEventListener("mouseout",function(){
    save.innerHTML = "SAVE INPUT"
    save.style.border = "";
})

let myLinks = [];
const inputEl = document.getElementById("input-elt");
save.addEventListener("click",function(){
    save.innerHTML = "INPUT SAVED";
    save.style.border = "5px solid navy";
    myLinks.push(inputEl.value);
    console.log(myLinks);
})