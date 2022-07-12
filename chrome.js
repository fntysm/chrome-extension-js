var save = document.getElementById("input-btn");
save.addEventListener("click",function(){
    save.innerHTML = "INPUT SAVED";
    save.style.border = "15px solid navy";
})
save.addEventListener("mouseout",function(){
    save.innerHTML = "SAVE INPUT"
    save.style.border = "";
})
